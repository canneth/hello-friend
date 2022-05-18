
# Note: SQL Script Order Matters!

Due to foreign key constraints, some tables must exist before others can be created!

As such, it is recommended to adhere to the order specified below when executing them.

## Creating Tables

1) User.pgsql
2) ContactListing.pgsql (References the User table)
3) DirectChatMessage.pgsql (References the User table)
4) GroupChat.pgsql
5) GroupChatMembership.pgsql (References the GroupChat and User tables)
6) GroupChatMessage.pgsql (References the GroupChat and User tables)