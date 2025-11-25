import { graphClient } from './graph-client';
import { Team, Channel, ChatMessage } from '@microsoft/microsoft-graph-types';

export class TeamsService {
  static async createCourseTeam(courseData: {
    courseName: string;
    description: string;
    instructorId: string;
    studentIds: string[];
  }): Promise<Team> {
    const group = await graphClient.api('/groups').post({
      displayName: courseData.courseName,
      description: courseData.description,
      groupTypes: ['Unified'],
      mailEnabled: true,
      mailNickname: courseData.courseName.toLowerCase().replace(/\s+/g, '-'),
      securityEnabled: false,
      'owners@odata.bind': [
        `https://graph.microsoft.com/v1.0/users/${courseData.instructorId}`,
      ],
    });

    for (const studentId of courseData.studentIds) {
      await graphClient.api(`/groups/${group.id}/members/$ref`).post({
        '@odata.id': `https://graph.microsoft.com/v1.0/users/${studentId}`,
      });
    }

    const team = await graphClient.api(`/groups/${group.id}/team`).put({
      memberSettings: {
        allowCreateUpdateChannels: false,
        allowDeleteChannels: false,
        allowAddRemoveApps: false,
        allowCreateUpdateRemoveTabs: false,
      },
      messagingSettings: {
        allowUserEditMessages: true,
        allowUserDeleteMessages: false,
        allowOwnerDeleteMessages: true,
        allowTeamMentions: true,
        allowChannelMentions: true,
      },
      funSettings: {
        allowGiphy: false,
        allowStickersAndMemes: false,
        allowCustomMemes: false,
      },
    });

    return team;
  }

  static async createModuleChannel(teamId: string, moduleName: string, description: string): Promise<Channel> {
    return await graphClient.api(`/teams/${teamId}/channels`).post({
      displayName: moduleName,
      description,
      membershipType: 'standard',
    });
  }

  static async getTeamChannels(teamId: string): Promise<Channel[]> {
    const response = await graphClient.api(`/teams/${teamId}/channels`).get();
    return response.value;
  }

  static async createOnlineMeeting(userId: string, meetingData: {
    subject: string;
    startDateTime: Date;
    endDateTime: Date;
    participants: string[];
  }) {
    const meeting = await graphClient.api(`/users/${userId}/onlineMeetings`).post({
      subject: meetingData.subject,
      startDateTime: meetingData.startDateTime.toISOString(),
      endDateTime: meetingData.endDateTime.toISOString(),
      participants: {
        attendees: meetingData.participants.map(email => ({
          identity: {
            user: {
              id: email,
            },
          },
          upn: email,
        })),
      },
      lobbyBypassSettings: {
        scope: 'organization',
        isDialInBypassEnabled: false,
      },
      allowMeetingChat: 'enabled',
      allowTeamworkReactions: true,
      recordAutomatically: true,
    });

    return meeting;
  }

  static async sendChannelMessage(teamId: string, channelId: string, message: string) {
    return await graphClient.api(`/teams/${teamId}/channels/${channelId}/messages`).post({
      body: {
        content: message,
      },
    });
  }

  static async getChannelMessages(teamId: string, channelId: string): Promise<ChatMessage[]> {
    const response = await graphClient
      .api(`/teams/${teamId}/channels/${channelId}/messages`)
      .top(50)
      .get();

    return response.value;
  }

  static async addTabToChannel(teamId: string, channelId: string, tabData: {
    displayName: string;
    teamsAppId: string;
    configuration: {
      entityId: string;
      contentUrl: string;
      websiteUrl: string;
    };
  }) {
    return await graphClient.api(`/teams/${teamId}/channels/${channelId}/tabs`).post(tabData);
  }

  static async addMemberToTeam(teamId: string, userId: string, role: 'member' | 'owner' = 'member') {
    await graphClient.api(`/groups/${teamId}/members/$ref`).post({
      '@odata.id': `https://graph.microsoft.com/v1.0/users/${userId}`,
    });

    if (role === 'owner') {
      await graphClient.api(`/groups/${teamId}/owners/$ref`).post({
        '@odata.id': `https://graph.microsoft.com/v1.0/users/${userId}`,
      });
    }
  }

  static async removeMemberFromTeam(teamId: string, userId: string) {
    await graphClient.api(`/groups/${teamId}/members/${userId}/$ref`).delete();
  }

  static async getRecordings(teamId: string) {
    const response = await graphClient
      .api(`/groups/${teamId}/drive/root:/Recordings:/children`)
      .get();

    return response.value;
  }
}
