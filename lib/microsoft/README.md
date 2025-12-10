# Microsoft 365 Integration Services

This directory contains all Microsoft Graph API integrations for DISTMAH ATC.

## Services

### 1. `graph-client.ts`
Core Microsoft Graph client configuration with Azure AD authentication.

**Usage:**
```typescript
import { graphClient } from '@/lib/microsoft/graph-client';

const user = await graphClient.api('/me').get();
```

### 2. `onedrive-service.ts`
OneDrive file management for personal student/instructor storage.

**Methods:**
- `uploadFile(userId, path, fileName, buffer)` - Upload file to OneDrive
- `downloadFile(userId, itemId)` - Download file as Buffer
- `createSharingLink(userId, itemId, type)` - Generate sharing link
- `createFolder(userId, folderPath, folderName)` - Create folder
- `listFiles(userId, folderPath)` - List files in folder
- `deleteFile(userId, itemId)` - Delete file
- `searchFiles(userId, query)` - Search files

**Example:**
```typescript
import { OneDriveService } from '@/lib/microsoft/onedrive-service';

// Upload assignment
const buffer = Buffer.from(await file.arrayBuffer());
const result = await OneDriveService.uploadFile(
  'user-m365-id',
  'DISTMAH/Assignments',
  'homework.pdf',
  buffer
);

// Create sharing link
const link = await OneDriveService.createSharingLink(
  'user-m365-id',
  result.id,
  'view'
);
```

### 3. `sharepoint-service.ts`
SharePoint site management for shared course resources.

**Methods:**
- `uploadCourseMaterial(courseId, fileName, buffer)` - Upload to course library
- `getCourseMaterials(courseId)` - List course materials
- `createCourseLibrary(courseId, courseName)` - Initialize course folders
- `uploadAssignmentSubmission(assignmentId, studentId, fileName, buffer)` - Store submission
- `getStudentSubmissions(assignmentId, studentId)` - Get student's submissions

**Example:**
```typescript
import { SharePointService } from '@/lib/microsoft/sharepoint-service';

// Create course library
await SharePointService.createCourseLibrary(
  'course-123',
  'AutoCAD 2026 Básico'
);

// Upload material
await SharePointService.uploadCourseMaterial(
  'course-123',
  'leccion-1.pdf',
  buffer
);

// Get materials
const materials = await SharePointService.getCourseMaterials('course-123');
```

### 4. `teams-service.ts`
Microsoft Teams integration for collaboration and live classes.

**Methods:**
- `createCourseTeam(courseData)` - Create Team for course
- `createModuleChannel(teamId, moduleName, description)` - Create channel
- `getTeamChannels(teamId)` - List channels
- `createOnlineMeeting(userId, meetingData)` - Schedule live class
- `sendChannelMessage(teamId, channelId, message)` - Post message
- `getChannelMessages(teamId, channelId)` - Get messages
- `addTabToChannel(teamId, channelId, tabData)` - Add tab (e.g., Files)
- `addMemberToTeam(teamId, userId, role)` - Add student/instructor
- `removeMemberFromTeam(teamId, userId)` - Remove member
- `getRecordings(teamId)` - Get meeting recordings

**Example:**
```typescript
import { TeamsService } from '@/lib/microsoft/teams-service';

// Create course team
const team = await TeamsService.createCourseTeam({
  courseName: 'AutoCAD 2026 Básico',
  description: 'Curso completo de AutoCAD',
  instructorId: 'instructor-m365-id',
  studentIds: ['student1-id', 'student2-id']
});

// Create live meeting
const meeting = await TeamsService.createOnlineMeeting(
  'instructor-m365-id',
  {
    subject: 'Clase 1: Introducción',
    startDateTime: new Date('2024-12-01T10:00:00'),
    endDateTime: new Date('2024-12-01T12:00:00'),
    participants: ['student1@distmah.com', 'student2@distmah.com']
  }
);

console.log('Join URL:', meeting.joinUrl);
```

## Database Schema Updates

The following fields were added to support M365 integration:

### User Model
```prisma
model User {
  m365UserId  String? @unique  // Microsoft 365 User ID
  m365Email   String? @unique  // Microsoft 365 Email
}
```

### Course Model
```prisma
model Course {
  m365TeamId        String? @unique  // Microsoft Teams ID
  m365SharePointId  String?          // SharePoint folder ID
}
```

### LiveClass Model
```prisma
model LiveClass {
  m365EventId  String? @unique  // Microsoft 365 Event ID
}
```

## Environment Variables

Required in `.env` or `.env.local`:

```bash
M365_TENANT_ID="your-tenant-id"
M365_CLIENT_ID="your-client-id"
M365_CLIENT_SECRET="your-client-secret"
M365_SHAREPOINT_SITE_ID="your-sharepoint-site-id"
```

## API Permissions Required

In Azure AD App Registration, configure these **Application Permissions**:

- `User.Read.All` - Read all users
- `Files.ReadWrite.All` - Access OneDrive files
- `Sites.ReadWrite.All` - Access SharePoint sites
- `Team.Create` - Create Teams
- `Team.ReadBasic.All` - Read Teams info
- `TeamMember.ReadWrite.All` - Manage team members
- `Channel.Create` - Create channels
- `ChannelMessage.Send` - Send messages
- `OnlineMeetings.ReadWrite` - Manage meetings

**IMPORTANT:** Must grant **Admin Consent** for all permissions.

## Error Handling

All services throw errors that should be caught:

```typescript
try {
  const files = await OneDriveService.listFiles('user-id', 'folder');
} catch (error) {
  if (error.statusCode === 404) {
    console.error('Folder not found');
  } else if (error.statusCode === 401) {
    console.error('Unauthorized - check credentials');
  } else {
    console.error('Error:', error.message);
  }
}
```

## Rate Limiting

Microsoft Graph API has rate limits:

- **Per app**: 2,000 requests/second
- **Per user**: 200 requests/second

Implement retry logic with exponential backoff for production use.

## Testing

Unit tests example:

```typescript
import { OneDriveService } from '@/lib/microsoft/onedrive-service';

describe('OneDriveService', () => {
  it('should upload file', async () => {
    const buffer = Buffer.from('test content');
    const result = await OneDriveService.uploadFile(
      'test-user-id',
      'test',
      'file.txt',
      buffer
    );

    expect(result.name).toBe('file.txt');
  });
});
```

## Security Notes

1. **Never expose** M365 credentials in client-side code
2. **Validate** all user inputs before passing to Graph API
3. **Implement** proper authorization checks before file access
4. **Use** organization scope for sharing links (not public)
5. **Monitor** audit logs for suspicious activity

## Support

For issues or questions:
- Check [Microsoft Graph documentation](https://docs.microsoft.com/graph/)
- Review Azure AD audit logs
- Contact Microsoft support for API issues
