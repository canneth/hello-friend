
/* Create User table */

DROP TABLE IF EXISTS "User";

CREATE TABLE "User" (
  "userId" UUID NOT NULL PRIMARY KEY,
  "email" VARCHAR(50) NOT NULL UNIQUE,
  "handle" VARCHAR(50) NOT NULL UNIQUE,
  "password" VARCHAR(100) NOT NULL,
  "name" VARCHAR(50) NOT NULL,
  "avatarSrc" TEXT,
  "dtmCreated" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
);

/* Populate User table */

INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('5ea9cb41-2336-41bd-89f4-bcacef244d35','test1@test','test1','$2b$10$iPxPSwUibtxVE546SOvDxehBvXoGxMVev4dI/qT9ngHwtSbAhzoKy','TesterOne',NULL,'2022-04-27T07:32:18Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('07ca6734-6f47-4125-96cc-5a8b93a2a33b','test2@test','test2','$2b$10$iPxPSwUibtxVE546SOvDxehBvXoGxMVev4dI/qT9ngHwtSbAhzoKy','TesterTwo',NULL,'2021-12-29T20:22:59Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf','test3@test','test3','$2b$10$iPxPSwUibtxVE546SOvDxehBvXoGxMVev4dI/qT9ngHwtSbAhzoKy','TesterThree',NULL,'2021-09-05T21:37:57Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('21c21657-77f4-4ecb-b9ca-5c8de5378248','bmcindoe1@topsy.com','bmcindoe1','IegsmYA','Binny McIndoe',NULL,'2022-03-20T15:23:28Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('b2b7e2d1-9496-4a0f-ad0d-314b8c8df624','erodie2@godaddy.com','erodie2','nvCPx3WI7K4','Elinor Rodie',NULL,'2022-02-17T02:59:57Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('607370b3-ab13-4014-a55d-54151e2ebbc2','lkernes3@livejournal.com','lkernes3','HCQRTTZHOBF','Loren Kernes','http://dummyimage.com/189x154.png/ff4444/ffffff','2021-10-15T22:39:06Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('86014013-1967-401a-9c9e-1f77aa87193f','rpennetta4@biblegateway.com','rpennetta4','Dsh1MUr5JJo','Roley Pennetta','http://dummyimage.com/109x148.png/dddddd/000000','2021-09-04T11:36:44Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','gforce5@flavors.me','gforce5','gRIzPQsaBiBm','Gail Force',NULL,'2022-02-18T17:04:14Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('d2a89c9d-807b-40ff-9e14-030576fde8b8','lflower6@abc.net.au','lflower6','xP5lHy2','Linzy Flower',NULL,'2021-06-02T05:28:27Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('58557378-75ed-4066-a1a5-20f26387032c','sswepstone7@time.com','sswepstone7','AEOR0gPb','Sileas Swepstone','http://dummyimage.com/158x115.png/dddddd/000000','2021-05-23T12:49:06Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('66845582-d1d6-45c7-87ad-8355a4599af9','mrumens8@google.pl','mrumens8','X1qITa','Marlon Rumens','http://dummyimage.com/142x224.png/cc0000/ffffff','2021-08-13T13:43:25Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','gbent9@woothemes.com','gbent9','WUCMwvZtY','Grete Bent',NULL,'2022-05-15T09:46:36Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('1cb0f679-3f83-441e-ad21-b22e5f8315b8','horuddena@surveymonkey.com','horuddena','uFtCAzPdXbrp','Hollis NULLRudden','http://dummyimage.com/192x165.png/5fa2dd/ffffff','2021-09-26T10:18:23Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('4b2c0916-64f3-4a4f-845f-ea16975a4345','aurquhartb@mail.ru','aurquhartb','S6fq9d','Aileen Urquhart',NULL,'2022-02-28T07:39:08Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('cebd1cd6-057e-4992-b6b3-5d6c2505307b','rnolletd@washingtonpost.com','rnolletd','0B6gOakZeSQ','Radcliffe Nollet',NULL,'2021-06-23T02:01:25Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('713b02f5-ad39-4f3a-97b1-29e4ca023a2f','dmichielf@europa.eu','dmichielf','y8dexDZjY0','Dill Michiel',NULL,'2022-02-25T14:22:55Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('430def23-3dd5-42c1-8dcf-869d2506fd60','talyonovg@infoseek.co.jp','talyonovg','QyFcmq','Teddi Alyonov','http://dummyimage.com/137x174.png/dddddd/000000','2021-07-14T17:47:51Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('496e5450-9a0f-49f3-adc6-abe23f7d22a8','areddickh@phoca.cz','areddickh','cm9115K','Alejandra Reddick','http://dummyimage.com/218x150.png/cc0000/ffffff','2021-05-10T16:25:49Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('e399e7c2-a66e-40d4-bc43-103cfe930894','pgiriardellii@smugmug.com','pgiriardellii','4y3ITPX36XXq','Paxton Giriardelli','http://dummyimage.com/235x215.png/5fa2dd/ffffff','2022-03-23T19:41:52Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('857e3405-bd9a-42b3-90e9-eef76b7ece8f','mstofflerj@house.gov','mstofflerj','oPHmHp6d','Muffin Stoffler',NULL,'2021-11-30T03:18:06Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('c3df681d-cf36-4214-9fae-019cffdee68a','lcritchk@ebay.com','lcritchk','eVC6B2','Lolly Critch',NULL,'2021-10-24T22:31:09Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('87125b24-c96d-4d28-9c44-a01386aaad20','ggrzesiewiczl@nih.gov','ggrzesiewiczl','iwHcb0Clu9C9','Goldia Grzesiewicz',NULL,'2021-07-03T08:57:09Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('4d8f6228-60cf-4707-b102-5b0cc0e779d8','holdalem@ucla.edu','holdalem','giDSDlpP5P','Helge Oldale','http://dummyimage.com/186x221.png/dddddd/000000','2021-05-05T14:05:12Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('54dfd152-194a-4201-9256-334355cbb291','etesmondn@constantcontact.com','etesmondn','2iut1476xQ','Erminie Tesmond','http://dummyimage.com/230x126.png/cc0000/ffffff','2022-01-21T16:21:58Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('3ce6d955-b341-4960-a7ba-a6cc8c67da4f','dtarriero@msu.edu','dtarriero','QGH3iRXkXM','Doris Tarrier',NULL,'2021-11-25T21:34:17Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','cgarriochp@mozilla.com','cgarriochp','OIgPPoi','Coralie Garrioch',NULL,'2022-03-08T21:51:38Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('93be352c-08c6-4b93-9f9b-63c7ded1b6f9','blugdenq@sohu.com','blugdenq','361cU00J','Barnabas Lugden',NULL,'2021-08-30T19:57:56Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('c6d135b5-88db-4c5a-a394-f665df4db004','eharbisonr@theglobeandmail.com','eharbisonr','k5XD5YjboFD','Ealasaid Harbison','http://dummyimage.com/160x213.png/ff4444/ffffff','2021-08-30T05:46:06Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('70e4cb54-45ba-4245-a8ec-1abeb72b3678','edearys@squarespace.com','edearys','bdd6Q8Y','Emelia Deary',NULL,'2021-06-03T18:08:43Z');
INSERT INTO "User"("userId","email","handle","password","name","avatarSrc","dtmCreated") VALUES ('53b18f94-6da1-46f7-9bdf-e7954626cad2','dgrigautt@ycombinator.com','dgrigautt','ch27R7','Donna Grigaut',NULL,'2021-10-15T10:56:53Z');
