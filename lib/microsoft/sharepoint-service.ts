import { graphClient } from './graph-client';

const SITE_ID = process.env.M365_SHAREPOINT_SITE_ID || '';

export class SharePointService {
  static async uploadCourseMaterial(courseId: string, fileName: string, fileBuffer: Buffer) {
    const folderPath = `Courses/${courseId}/Materials`;

    await this.ensureFolderExists(folderPath);

    return await graphClient
      .api(`/sites/${SITE_ID}/drive/root:/${folderPath}/${fileName}:/content`)
      .put(fileBuffer);
  }

  static async getCourseMaterials(courseId: string) {
    const folderPath = `Courses/${courseId}/Materials`;

    try {
      const response = await graphClient
        .api(`/sites/${SITE_ID}/drive/root:/${folderPath}:/children`)
        .get();

      return response.value;
    } catch (error) {
      return [];
    }
  }

  static async createCourseLibrary(courseId: string, courseName: string) {
    const folderPath = `Courses/${courseId}`;

    const folder = await graphClient
      .api(`/sites/${SITE_ID}/drive/root:/Courses:/children`)
      .post({
        name: courseId,
        folder: {},
        '@microsoft.graph.conflictBehavior': 'fail',
      });

    const subfolders = ['Materials', 'Assignments', 'Videos', 'Resources'];

    for (const subfolder of subfolders) {
      await graphClient
        .api(`/sites/${SITE_ID}/drive/items/${folder.id}/children`)
        .post({
          name: subfolder,
          folder: {},
        });
    }

    return folder;
  }

  private static async ensureFolderExists(folderPath: string) {
    const parts = folderPath.split('/').filter(Boolean);
    let currentPath = '';

    for (const part of parts) {
      const parentPath = currentPath || 'root';
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      try {
        await graphClient.api(`/sites/${SITE_ID}/drive/root:/${currentPath}`).get();
      } catch {
        await graphClient
          .api(`/sites/${SITE_ID}/drive/${parentPath}:/children`)
          .post({
            name: part,
            folder: {},
          });
      }
    }
  }

  static async uploadAssignmentSubmission(
    assignmentId: string,
    studentId: string,
    fileName: string,
    fileBuffer: Buffer
  ) {
    const folderPath = `Assignments/${assignmentId}/${studentId}`;

    await this.ensureFolderExists(folderPath);

    return await graphClient
      .api(`/sites/${SITE_ID}/drive/root:/${folderPath}/${fileName}:/content`)
      .put(fileBuffer);
  }

  static async getStudentSubmissions(assignmentId: string, studentId: string) {
    const folderPath = `Assignments/${assignmentId}/${studentId}`;

    try {
      const response = await graphClient
        .api(`/sites/${SITE_ID}/drive/root:/${folderPath}:/children`)
        .get();

      return response.value;
    } catch {
      return [];
    }
  }
}
