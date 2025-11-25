import { graphClient } from './graph-client';
import { User, Message, Event, Group } from '@microsoft/microsoft-graph-types';

export class MicrosoftGraphService {
  // ===== USER MANAGEMENT =====

  static async getUser(userId: string): Promise<User> {
    return await graphClient.api(`/users/${userId}`).get();
  }

  static async createUser(userData: {
    displayName: string;
    userPrincipalName: string;
    mailNickname: string;
    password: string;
  }): Promise<User> {
    const user = {
      accountEnabled: true,
      displayName: userData.displayName,
      mailNickname: userData.mailNickname,
      userPrincipalName: userData.userPrincipalName,
      passwordProfile: {
        forceChangePasswordNextSignIn: true,
        password: userData.password,
      },
    };

    return await graphClient.api('/users').post(user);
  }

  static async assignLicense(userId: string, skuId: string): Promise<void> {
    const licenses = {
      addLicenses: [{ skuId }],
      removeLicenses: [],
    };

    await graphClient.api(`/users/${userId}/assignLicense`).post(licenses);
  }

  static async deleteUser(userId: string): Promise<void> {
    await graphClient.api(`/users/${userId}`).delete();
  }

  static async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    return await graphClient.api(`/users/${userId}`).patch(updates);
  }

  // ===== EMAIL (OUTLOOK) =====

  static async sendEmail(userId: string, emailData: {
    to: string[];
    cc?: string[];
    subject: string;
    body: string;
    bodyType?: 'text' | 'html';
    attachments?: { name: string; contentBytes: string; contentType: string }[];
  }): Promise<void> {
    const message = {
      subject: emailData.subject,
      body: {
        contentType: emailData.bodyType || 'html',
        content: emailData.body,
      },
      toRecipients: emailData.to.map(email => ({
        emailAddress: { address: email },
      })),
      ccRecipients: emailData.cc?.map(email => ({
        emailAddress: { address: email },
      })) || [],
      attachments: emailData.attachments || [],
    };

    await graphClient
      .api(`/users/${userId}/sendMail`)
      .post({ message, saveToSentItems: true });
  }

  static async getEmails(userId: string, options?: {
    top?: number;
    filter?: string;
    orderBy?: string;
  }): Promise<Message[]> {
    let request = graphClient.api(`/users/${userId}/messages`);

    if (options?.top) request = request.top(options.top);
    if (options?.filter) request = request.filter(options.filter);
    if (options?.orderBy) request = request.orderby(options.orderBy);

    const response = await request.get();
    return response.value;
  }

  static async getEmail(userId: string, messageId: string): Promise<Message> {
    return await graphClient.api(`/users/${userId}/messages/${messageId}`).get();
  }

  static async deleteEmail(userId: string, messageId: string): Promise<void> {
    await graphClient.api(`/users/${userId}/messages/${messageId}`).delete();
  }

  // ===== CALENDAR (OUTLOOK) =====

  static async createEvent(userId: string, eventData: {
    subject: string;
    body: string;
    start: Date;
    end: Date;
    attendees: string[];
    location?: string;
    isOnlineMeeting?: boolean;
  }): Promise<Event> {
    const event = {
      subject: eventData.subject,
      body: {
        contentType: 'html',
        content: eventData.body,
      },
      start: {
        dateTime: eventData.start.toISOString(),
        timeZone: 'America/Caracas',
      },
      end: {
        dateTime: eventData.end.toISOString(),
        timeZone: 'America/Caracas',
      },
      location: eventData.location ? { displayName: eventData.location } : undefined,
      attendees: eventData.attendees.map(email => ({
        emailAddress: { address: email },
        type: 'required',
      })),
      isOnlineMeeting: eventData.isOnlineMeeting || false,
      onlineMeetingProvider: eventData.isOnlineMeeting ? 'teamsForBusiness' : undefined,
    };

    return await graphClient.api(`/users/${userId}/calendar/events`).post(event);
  }

  static async getEvents(userId: string, startDate: Date, endDate: Date): Promise<Event[]> {
    const response = await graphClient
      .api(`/users/${userId}/calendar/calendarView`)
      .query({
        startDateTime: startDate.toISOString(),
        endDateTime: endDate.toISOString(),
      })
      .orderby('start/dateTime')
      .get();

    return response.value;
  }

  static async getEvent(userId: string, eventId: string): Promise<Event> {
    return await graphClient.api(`/users/${userId}/calendar/events/${eventId}`).get();
  }

  static async updateEvent(userId: string, eventId: string, updates: Partial<Event>): Promise<Event> {
    return await graphClient.api(`/users/${userId}/calendar/events/${eventId}`).patch(updates);
  }

  static async deleteEvent(userId: string, eventId: string): Promise<void> {
    await graphClient.api(`/users/${userId}/calendar/events/${eventId}`).delete();
  }

  // ===== GROUPS & TEAMS =====

  static async createGroup(groupData: {
    displayName: string;
    description: string;
    mailNickname: string;
    owners: string[];
    members: string[];
  }): Promise<Group> {
    const group = {
      displayName: groupData.displayName,
      description: groupData.description,
      mailNickname: groupData.mailNickname,
      mailEnabled: true,
      securityEnabled: false,
      groupTypes: ['Unified'],
      'owners@odata.bind': groupData.owners.map(id => `https://graph.microsoft.com/v1.0/users/${id}`),
      'members@odata.bind': groupData.members.map(id => `https://graph.microsoft.com/v1.0/users/${id}`),
    };

    return await graphClient.api('/groups').post(group);
  }

  static async getGroup(groupId: string): Promise<Group> {
    return await graphClient.api(`/groups/${groupId}`).get();
  }

  static async addMemberToGroup(groupId: string, userId: string): Promise<void> {
    const member = {
      '@odata.id': `https://graph.microsoft.com/v1.0/directoryObjects/${userId}`,
    };

    await graphClient.api(`/groups/${groupId}/members/$ref`).post(member);
  }

  static async removeMemberFromGroup(groupId: string, userId: string): Promise<void> {
    await graphClient.api(`/groups/${groupId}/members/${userId}/$ref`).delete();
  }

  static async getGroupMembers(groupId: string): Promise<User[]> {
    const response = await graphClient.api(`/groups/${groupId}/members`).get();
    return response.value;
  }

  // ===== ONEDRIVE =====

  static async getUserDriveInfo(userId: string) {
    return await graphClient.api(`/users/${userId}/drive`).get();
  }

  static async createFolder(userId: string, folderName: string, parentPath: string = 'root') {
    const driveItem = {
      name: folderName,
      folder: {},
      '@microsoft.graph.conflictBehavior': 'rename',
    };

    return await graphClient
      .api(`/users/${userId}/drive/${parentPath}/children`)
      .post(driveItem);
  }
}
