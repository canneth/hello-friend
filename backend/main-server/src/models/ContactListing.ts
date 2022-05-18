
import type User from '@/models/User';

export default interface ContactListing {
  contactListingId: string;
  contactName: string;
  dtmAdded: string; // Expected to be in ISO format.
  ownerUserId: User['userId'];
  contactUserId: User['userId'];
}