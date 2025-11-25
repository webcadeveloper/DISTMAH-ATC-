import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { ClientSecretCredential } from '@azure/identity';

const credential = new ClientSecretCredential(
  process.env.M365_TENANT_ID!,
  process.env.M365_CLIENT_ID!,
  process.env.M365_CLIENT_SECRET!
);

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ['https://graph.microsoft.com/.default'],
});

export const graphClient = Client.initWithMiddleware({
  authProvider,
});
