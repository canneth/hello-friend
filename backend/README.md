# HelloFriend (Backend)

This is the backend part of HelloFriend.

It consists of a main server and a WebSocket server.

## The Main Server

The main server queries and manipulates the database in response to calls to its exposed API routes.

Its main responsibilities are to:
1) Serve information required by the frontend on request to exposed API routes
2) Interface directly with the database
3) Handle user authentication and authorization

## The Web Socket Server

The WebSocket server manages message traffic in all on-going chats.

Its main responsibilities are to:
1) Act as the first point of contact for messages posted by users
2) Send requests to the main server to persist messages in the database
3) Broadcast the new message(s) to the intended receipients