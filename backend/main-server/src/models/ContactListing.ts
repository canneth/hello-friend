
import type User from '@src/models/User';

export default interface ContactListing {
  // PRIMARY KEY (ownerUserId, contactUserId)
  ownerUserId: User['userId']; // FOREIGN KEY
  contactUserId: User['userId']; // FOREIGN KEY
  contactListingId: string; // UNIQUE
  contactName: string;
  dtmAdded: string; // Expected to be in ISO format.
}