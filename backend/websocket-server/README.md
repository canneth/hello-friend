# HelloFriend (Backend - WebSocket Server)

This is the backend part of HelloFriend.

The WebSocket server manages message traffic in all on-going chats.

Its main responsibilities are to:
1) Act as the first point of contact for messages posted by users
2) Send requests to the main server to persist messages in the database
3) Broadcast the new message(s) to the intended receipients