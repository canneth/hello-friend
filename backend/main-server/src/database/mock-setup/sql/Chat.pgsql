
/* Create Chat table */

DROP TABLE IF EXISTS "Chat";

CREATE TYPE chatType AS ENUM ('direct', 'group');

CREATE TABLE "Chat" (
  "chatId" UUID NOT NULL PRIMARY KEY,
  "name" VARCHAR(50),
  "type" chatType NOT NULL DEFAULT 'direct',
  "dtmCreated" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "avatarSrc" TEXT DEFAULT NULL
);

/* Populate Chat table */

/* Group chats */
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('f608bdc4-eb27-4806-a7f0-4776a77bc5ae','Marvin-Turcotte','group','2021-08-04T17:51:03Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('8b0cddf3-412c-4dfa-92f7-bb78e3da149f','Dach, Halvorson and Watsica','group','2022-02-08T07:44:05Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('51bd5a3c-805a-496a-8f1c-1cf31a21c7f8','Haley Inc','group','2021-08-28T07:25:48Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('9f4f0a35-aa26-48aa-9658-242a15cdf12b','Mann-Funk','group','2021-11-15T06:03:41Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9','Metz, Towne and O''Reilly','group','2021-09-02T11:22:30Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('9a663601-6933-4741-bc35-c628044ec1c9','Denesik-Pfeffer','group','2022-02-03T05:29:08Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('d46e103d-6976-494c-bb01-488e62827e69','Muller-Okuneva','group','2021-12-26T02:41:35Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('dcf83561-13a4-401c-b285-827c7d733a42','Ratke-Kreiger','group','2022-02-14T01:52:49Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('f986c568-af81-4275-8250-4b47d110b164','Rowe-Quitzon','group','2021-12-15T02:41:19Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('c897ad50-a071-4181-93a0-f81ce1b9229a','Schinner-Pagac','group','2021-11-06T14:29:09Z',NULL);
/* Direct chats */
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('e484cdf0-2aae-41a0-8e25-d5d33018282f',NULL,'direct','2021-08-04T17:51:03Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('620ad5be-1f91-456e-afc4-f822de2dffda',NULL,'direct','2022-02-08T07:44:05Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('88bb5353-9534-473a-a3ac-55ce6f1a044f',NULL,'direct','2021-08-28T07:25:48Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('8a108fd5-8314-487a-a42e-8d8d18e4fe3c',NULL,'direct','2021-11-15T06:03:41Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('f8054c41-38c1-4d37-829f-a5d70fa87d21',NULL,'direct','2021-09-02T11:22:30Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('0d323d01-0124-457e-b109-5d643d124edc',NULL,'direct','2022-02-03T05:29:08Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('3c14b011-f3d3-48ec-be28-efe90b5bd3a3',NULL,'direct','2021-12-26T02:41:35Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('91dbd0e1-ccee-42b8-bf1f-150cfc7c814f',NULL,'direct','2022-02-14T01:52:49Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('d806e26b-0da9-4462-8b45-2060624be8a7',NULL,'direct','2021-12-15T02:41:19Z',NULL);
INSERT INTO "Chat"("chatId","name","type","dtmCreated") VALUES ('c9fa33b6-f810-4484-8a4d-8307368bd6d3',NULL,'direct','2021-11-06T14:29:09Z',NULL);
