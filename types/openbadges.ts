export interface OpenBadgeIssuer {
  id: string;
  type: 'Issuer';
  name: string;
  url: string;
  email: string;
}

export interface OpenBadgeImage {
  id: string;
  type: 'Image';
  caption?: string;
}

export interface OpenBadgeCriteria {
  narrative: string;
}

export interface OpenBadgeClass {
  id: string;
  type: 'BadgeClass';
  name: string;
  description: string;
  image: OpenBadgeImage;
  criteria: OpenBadgeCriteria;
  issuer: OpenBadgeIssuer;
}

export interface OpenBadgeVerification {
  type: 'hosted';
}

export interface OpenBadgeRecipient {
  type: 'email';
  hashed: boolean;
  identity: string;
}

export interface OpenBadge {
  '@context': 'https://w3id.org/openbadges/v2';
  type: 'Assertion';
  id: string;
  recipient: OpenBadgeRecipient;
  badge: OpenBadgeClass;
  verification: OpenBadgeVerification;
  issuedOn: string;
  expires?: string;
}

export const UNIVERSIDAD_AUTODESK_ISSUER: OpenBadgeIssuer = {
  id: 'https://universidad-autodesk.edu/issuer',
  type: 'Issuer',
  name: 'Universidad Autodesk',
  url: 'https://universidad-autodesk.edu',
  email: 'certificaciones@universidad-autodesk.edu',
};
