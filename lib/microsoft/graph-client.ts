import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { ClientSecretCredential } from '@azure/identity';

const credential = process.env.M365_TENANT_ID && process.env.M365_CLIENT_ID && process.env.M365_CLIENT_SECRET
  ? new ClientSecretCredential(
      process.env.M365_TENANT_ID,
      process.env.M365_CLIENT_ID,
      process.env.M365_CLIENT_SECRET
    )
  : null;

const authProvider = credential
  ? new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default'],
    })
  : null;

export const graphClient = authProvider
  ? Client.initWithMiddleware({ authProvider })
  : null;
