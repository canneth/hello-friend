
/* Create GroupChat table */

DROP TABLE IF EXISTS "GroupChat";

CREATE TABLE "GroupChat" (
  "groupChatId" UUID NOT NULL PRIMARY KEY,
  "title" VARCHAR(50) NOT NULL,
  "dtmCreated" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
);

/* Populate GroupChat table */

INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('f608bdc4-eb27-4806-a7f0-4776a77bc5ae','Marvin-Turcotte','2021-08-04T17:51:03Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('8b0cddf3-412c-4dfa-92f7-bb78e3da149f','Dach, Halvorson and Watsica','2022-02-08T07:44:05Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('51bd5a3c-805a-496a-8f1c-1cf31a21c7f8','Haley Inc','2021-08-28T07:25:48Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('9f4f0a35-aa26-48aa-9658-242a15cdf12b','Mann-Funk','2021-11-15T06:03:41Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9','Metz, Towne and O''Reilly','2021-09-02T11:22:30Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('9a663601-6933-4741-bc35-c628044ec1c9','Denesik-Pfeffer','2022-02-03T05:29:08Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('d46e103d-6976-494c-bb01-488e62827e69','Muller-Okuneva','2021-12-26T02:41:35Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('dcf83561-13a4-401c-b285-827c7d733a42','Ratke-Kreiger','2022-02-14T01:52:49Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('f986c568-af81-4275-8250-4b47d110b164','Rowe-Quitzon','2021-12-15T02:41:19Z');
INSERT INTO "GroupChat"("groupChatId","title","dtmCreated") VALUES ('c897ad50-a071-4181-93a0-f81ce1b9229a','Schinner-Pagac','2021-11-06T14:29:09Z');
