# Microsoft 365 Integration - Setup Guide

## Overview

DISTMAH ATC integrates with Microsoft 365 to provide:

- **OneDrive**: Personal file storage for students/instructors
- **SharePoint**: Shared course materials and resources
- **Microsoft Teams**: Live classes, collaboration, and communication
- **Teams Meetings**: Recorded live classes with automatic transcription

## Prerequisites

1. Microsoft 365 Business or Education subscription
2. Azure AD admin access
3. SharePoint site for DISTMAH content

## Step 1: Azure AD App Registration

### 1.1 Create App Registration

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Configure:
   - Name: `DISTMAH ATC Integration`
   - Supported account types: `Accounts in this organizational directory only`
   - Redirect URI: Leave blank for now
5. Click **Register**

### 1.2 Get Credentials

Copy these values to your `.env` file:

```
M365_TENANT_ID=<Directory (tenant) ID>
M365_CLIENT_ID=<Application (client) ID>
```

### 1.3 Create Client Secret

1. Go to **Certificates & secrets**
2. Click **New client secret**
3. Description: `DISTMAH Backend`
4. Expires: 24 months (recommended)
5. Click **Add**
6. **IMPORTANT**: Copy the **Value** immediately (you won't see it again)

Add to `.env`:
```
M365_CLIENT_SECRET=<secret value>
```

## Step 2: API Permissions

### 2.1 Add Required Permissions

1. Go to **API permissions**
2. Click **Add a permission** > **Microsoft Graph** > **Application permissions**
3. Add these permissions:

**Users & Authentication**
- `User.Read.All` - Read all users' full profiles

**Files & Storage**
- `Files.ReadWrite.All` - Have full access to all files
- `Sites.ReadWrite.All` - Have full control of all site collections

**Teams & Meetings**
- `Team.Create` - Create teams
- `Team.ReadBasic.All` - Read the names and descriptions of teams
- `TeamMember.ReadWrite.All` - Add and remove members from teams
- `Channel.Create` - Create channels
- `ChannelMessage.Send` - Send channel messages
- `OnlineMeetings.ReadWrite` - Create and update online meetings

### 2.2 Grant Admin Consent

1. Click **Grant admin consent for [Your Organization]**
2. Confirm by clicking **Yes**
3. Wait for all permissions to show "Granted" status

## Step 3: SharePoint Site Setup

### 3.1 Create SharePoint Site

1. Go to [SharePoint Admin Center](https://admin.microsoft.com/sharepoint)
2. Click **Sites** > **Active sites** > **Create**
3. Select **Team site**
4. Configure:
   - Site name: `DISTMAH Courses`
   - Site address: `distmah-courses`
   - Privacy: `Private`
5. Click **Next** and **Finish**

### 3.2 Get SharePoint Site ID

Use Microsoft Graph Explorer or PowerShell:

```bash
# Using Graph Explorer (https://developer.microsoft.com/graph/graph-explorer)
GET https://graph.microsoft.com/v1.0/sites/yourdomain.sharepoint.com:/sites/distmah-courses
```

Response will include `id` field. Copy this value:

```
M365_SHAREPOINT_SITE_ID=<site id>
```

### 3.3 Create Document Library Structure

The SharePoint service will auto-create this structure when needed:

```
📁 Courses/
  📁 {courseId}/
    📁 Materials/
    📁 Assignments/
    📁 Videos/
    📁 Resources/

📁 Assignments/
  📁 {assignmentId}/
    📁 {studentId}/
```

## Step 4: Environment Variables

Create `.env.local` with:

```bash
# Microsoft 365 Configuration
M365_TENANT_ID="your-tenant-id"
M365_CLIENT_ID="your-client-id"
M365_CLIENT_SECRET="your-client-secret"
M365_SHAREPOINT_SITE_ID="your-sharepoint-site-id"
```

## Step 5: Database Migration

Run Prisma migration to add M365 fields:

```bash
npx prisma migrate dev --name add-m365-integration
npx prisma generate
```

## Step 6: Install Dependencies

```bash
npm install @microsoft/microsoft-graph-client @microsoft/microsoft-graph-types @azure/identity
```

## Features Enabled

### OneDrive Integration

**For Students:**
- Personal file storage (assignments, notes)
- File sharing with instructors
- Download course materials

**For Instructors:**
- Upload course materials
- Share resources with students
- Manage assignment submissions

### SharePoint Integration

- Centralized course material library
- Version control for documents
- Shared resources across courses
- Assignment submission storage

### Microsoft Teams Integration

**Per Course:**
- Dedicated Team created automatically
- Channels per module
- File sharing tabs
- Announcements

**Live Classes:**
- Schedule Teams meetings
- Automatic recording
- Chat and Q&A
- Screen sharing
- Attendance tracking

## API Endpoints

### Files

```
POST /api/files/upload
GET  /api/files/list
GET  /api/files/download
POST /api/files/share
```

### Teams

```
POST /api/teams/create-course-team
POST /api/teams/create-meeting
POST /api/teams/add-member
```

## React Components

### OneDriveFileBrowser

```tsx
import { OneDriveFileBrowser } from '@/components/microsoft/OneDriveFileBrowser';

<OneDriveFileBrowser userId={session.user.id} />
```

### FileUploader

```tsx
import { FileUploader } from '@/components/microsoft/FileUploader';

<FileUploader
  destination="sharepoint"
  path="courses/autocad-2026"
  onUploadComplete={() => console.log('Done!')}
/>
```

### TeamsLiveMeeting

```tsx
import { TeamsLiveMeeting } from '@/components/microsoft/TeamsLiveMeeting';

<TeamsLiveMeeting courseId={course.id} moduleId={module.id} />
```

## Testing

### Test OneDrive Access

```typescript
import { OneDriveService } from '@/lib/microsoft/onedrive-service';

const files = await OneDriveService.listFiles('user-m365-id');
console.log(files);
```

### Test SharePoint Access

```typescript
import { SharePointService } from '@/lib/microsoft/sharepoint-service';

const library = await SharePointService.createCourseLibrary(
  'course-id',
  'AutoCAD 2026 Básico'
);
```

### Test Teams Creation

```typescript
import { TeamsService } from '@/lib/microsoft/teams-service';

const team = await TeamsService.createCourseTeam({
  courseName: 'AutoCAD 2026',
  description: 'Curso básico de AutoCAD',
  instructorId: 'instructor-m365-id',
  studentIds: ['student1-id', 'student2-id'],
});
```

## Troubleshooting

### "Unauthorized" Error

- Verify admin consent was granted
- Check API permissions are Application (not Delegated)
- Ensure client secret hasn't expired

### "Site not found"

- Verify SharePoint site ID is correct
- Check app has Sites.ReadWrite.All permission
- Ensure site is not deleted or archived

### "Cannot create team"

- Verify Group.ReadWrite.All permission
- Check user has license for Teams
- Ensure instructor M365 ID is valid

## Security Best Practices

1. **Never commit** `.env` or `.env.local` to git
2. **Rotate secrets** every 6-12 months
3. **Use least privilege** - only grant required permissions
4. **Monitor usage** via Azure AD audit logs
5. **Implement rate limiting** on file upload endpoints

## Production Deployment

1. Add environment variables to hosting platform (Vercel, Railway, etc.)
2. Test all M365 integrations in staging first
3. Monitor Microsoft Graph API usage/throttling
4. Set up alerts for permission errors
5. Document any custom SharePoint configurations

## Support & Resources

- [Microsoft Graph Documentation](https://docs.microsoft.com/graph/)
- [Teams API Reference](https://docs.microsoft.com/graph/teams-concept-overview)
- [OneDrive API Reference](https://docs.microsoft.com/graph/onedrive-concept-overview)
- [SharePoint API Reference](https://docs.microsoft.com/graph/sharepoint-concept-overview)

## Migration Script (Optional)

If you have existing files, use this script to migrate to SharePoint:

```typescript
// scripts/migrate-to-sharepoint.ts
import { SharePointService } from '@/lib/microsoft/sharepoint-service';
import { prisma } from '@/lib/prisma';
import fs from 'fs/promises';

async function migrate() {
  const courses = await prisma.course.findMany();

  for (const course of courses) {
    console.log(`Migrating ${course.title}...`);

    // Create SharePoint library
    await SharePointService.createCourseLibrary(course.id, course.title);

    // Upload existing materials
    const materialsPath = `./public/cursos/${course.slug}`;
    const files = await fs.readdir(materialsPath);

    for (const file of files) {
      const buffer = await fs.readFile(`${materialsPath}/${file}`);
      await SharePointService.uploadCourseMaterial(course.id, file, buffer);
      console.log(`  ✓ ${file}`);
    }
  }
}

migrate();
```

## Conclusion

This integration enables DISTMAH ATC to leverage the full power of Microsoft 365 for a professional, enterprise-grade learning platform.
