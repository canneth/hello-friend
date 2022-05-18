
import type User from '@/models/User';

export default interface ContactListing {
  contactListingId: string;
  ownerUserId: User['userId'];
  contactUserId: User['userId'];
  dtmAdded: string; // Expected to be in ISO format.
}