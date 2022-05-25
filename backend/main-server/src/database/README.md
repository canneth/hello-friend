
# Note: SQL Script Order Matters!

Due to foreign key constraints, some tables must exist before others can be created!

As such, it is recommended to adhere to the order specified below when executing them.

## Creating Tables

1) User.pgsql
2) ContactListing.pgsql (References the User table)
3) Chat.pgsql
4) ChatMembership.pgsql (References the Chat and User tables)
5) ChatMessage.pgsql (References the Chat and User tables)