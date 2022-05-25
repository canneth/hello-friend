
import type User from '@src/database/schemas/User';

export default interface ContactListing {
  // PRIMARY KEY (ownerUserId, contactUserId)
  ownerUserId: User['userId']; // FOREIGN KEY
  contactUserId: User['userId']; // FOREIGN KEY
  contactListingId: string; // UNIQUE
  contactName: string;
  dtmAdded?: string; // DEFAULT CURRENT_TIMESTAMP
}