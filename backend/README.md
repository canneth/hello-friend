# HelloFriend (Backend)

This is the backend part of HelloFriend.

It consists of a main server and a WebSocket server.

## Architecture

![app-architecture-diagram](https://user-images.githubusercontent.com/23531034/170530138-fdb6688d-1a99-44ba-a623-dd01e0e73b51.png)

### The Main Server

The main server queries and manipulates the database in response to calls to its exposed API routes.

Its main responsibilities are to:
* Serve information required by the frontend on request to exposed API routes
* Interface directly with the database
* Handle user authentication and authorization
* Send events to the WebSocket server immediately after relevant database manipulations (eg. when a new message is POSTed)

### The Web Socket Server

The WebSocket server listens to events coming from .

Its main responsibilities are to:
* Listen to events from the main server
* Control broadcast traffic
* Act as a forwarder for events sent from the main server to active clients
