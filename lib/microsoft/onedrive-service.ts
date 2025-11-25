import { graphClient } from './graph-client';
import { DriveItem } from '@microsoft/microsoft-graph-types';

export class OneDriveService {
  static async uploadFile(userId: string, filePath: string, fileName: string, fileBuffer: Buffer): Promise<DriveItem> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    if (fileBuffer.length < 4 * 1024 * 1024) {
      return await graphClient
        .api(`/users/${userId}/drive/root:/${filePath}/${fileName}:/content`)
        .put(fileBuffer);
    }

    const uploadSession = await graphClient
      .api(`/users/${userId}/drive/root:/${filePath}/${fileName}:/createUploadSession`)
      .post({
        item: {
          '@microsoft.graph.conflictBehavior': 'rename',
        },
      });

    const chunkSize = 320 * 1024;
    const totalSize = fileBuffer.length;
    let uploadedBytes = 0;

    while (uploadedBytes < totalSize) {
      const chunkEnd = Math.min(uploadedBytes + chunkSize, totalSize);
      const chunk = fileBuffer.slice(uploadedBytes, chunkEnd);

      const response = await fetch(uploadSession.uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Length': chunk.length.toString(),
          'Content-Range': `bytes ${uploadedBytes}-${chunkEnd - 1}/${totalSize}`,
        },
        body: chunk,
      });

      uploadedBytes = chunkEnd;

      if (response.status === 201 || response.status === 200) {
        return await response.json();
      }
    }

    throw new Error('Upload failed');
  }

  static async downloadFile(userId: string, itemId: string): Promise<Buffer> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    const downloadUrl = await graphClient
      .api(`/users/${userId}/drive/items/${itemId}`)
      .select('@microsoft.graph.downloadUrl')
      .get();

    const response = await fetch(downloadUrl['@microsoft.graph.downloadUrl']);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  static async createSharingLink(userId: string, itemId: string, type: 'view' | 'edit' = 'view'): Promise<string> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    const permission = await graphClient
      .api(`/users/${userId}/drive/items/${itemId}/createLink`)
      .post({
        type,
        scope: 'organization',
      });

    return permission.link.webUrl;
  }

  static async createFolder(userId: string, folderPath: string, folderName: string): Promise<DriveItem> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    return await graphClient
      .api(`/users/${userId}/drive/root:/${folderPath}:/children`)
      .post({
        name: folderName,
        folder: {},
        '@microsoft.graph.conflictBehavior': 'rename',
      });
  }

  static async listFiles(userId: string, folderPath: string = ''): Promise<DriveItem[]> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    const endpoint = folderPath
      ? `/users/${userId}/drive/root:/${folderPath}:/children`
      : `/users/${userId}/drive/root/children`;

    const response = await graphClient.api(endpoint).get();
    return response.value;
  }

  static async deleteFile(userId: string, itemId: string): Promise<void> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    await graphClient.api(`/users/${userId}/drive/items/${itemId}`).delete();
  }

  static async searchFiles(userId: string, query: string): Promise<DriveItem[]> {
    if (!graphClient) throw new Error('Microsoft Graph client not initialized');
    const response = await graphClient
      .api(`/users/${userId}/drive/root/search(q='${query}')`)
      .get();

    return response.value;
  }
}
