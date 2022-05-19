
/* Create GroupChatMembership table */

DROP TABLE IF EXISTS "GroupChatMembership";

CREATE TABLE "GroupChatMembership" (
  "userId" UUID NOT NULL,
  "groupChatId" UUID NOT NULL,
  "groupChatMembershipId" UUID NOT NULL UNIQUE,
  "dtmJoined" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("userId", "groupChatId"),
  CONSTRAINT User_ParticipatesIn_GroupChatMembership_fk FOREIGN KEY ("userId") REFERENCES "User"("userId"),
  CONSTRAINT GroupChat_IsJoinedThrough_GroupChatMembership_fk FOREIGN KEY ("groupChatId") REFERENCES "GroupChat"("groupChatId")
);

/* Populate GroupChatMembership table */
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('0915b51c-09c7-4fe4-9581-f2afbc9536ec','2021-10-01T10:52:19Z','21c21657-77f4-4ecb-b9ca-5c8de5378248','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('a364a8ac-52a2-4ef4-b94b-76fb96528e8d','2021-11-22T17:57:08Z','86014013-1967-401a-9c9e-1f77aa87193f','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('fd825554-d233-49c0-a695-c62bd7d8cee2','2021-10-26T20:06:22Z','86014013-1967-401a-9c9e-1f77aa87193f','d46e103d-6976-494c-bb01-488e62827e69');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('16155c41-c470-4b81-b055-5dff873ff7bd','2021-07-31T16:03:03Z','c6d135b5-88db-4c5a-a394-f665df4db004','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('3914bc91-055e-4223-af19-33f110d33025','2021-12-14T17:55:34Z','cebd1cd6-057e-4992-b6b3-5d6c2505307b','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('0e733570-faec-4502-974f-33c6fcd9175c','2021-11-26T11:25:23Z','e399e7c2-a66e-40d4-bc43-103cfe930894','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('00cba843-d3fd-4fa1-89bb-dc2841f0a08c','2022-01-27T11:13:40Z','07ca6734-6f47-4125-96cc-5a8b93a2a33b','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('ed33ca27-f05f-46ef-a63c-b07cb0219983','2021-11-19T03:36:53Z','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('2dd91cf3-ff58-44cf-99f5-783e3ec33591','2021-11-11T14:26:43Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('3b18220d-b43a-4928-aa9e-728ac5f9a918','2022-02-23T08:21:44Z','58557378-75ed-4066-a1a5-20f26387032c','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('0a989cf1-619f-4008-86c9-d7c1236c8b2a','2021-11-12T18:12:02Z','430def23-3dd5-42c1-8dcf-869d2506fd60','51bd5a3c-805a-496a-8f1c-1cf31a21c7f8');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('bcfe7e33-97a5-4d61-b447-57890853b593','2022-01-15T18:23:33Z','5ea9cb41-2336-41bd-89f4-bcacef244d35','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('e7d7dc70-d2d4-42bc-8ec7-0db367a00b37','2021-08-08T02:58:46Z','58557378-75ed-4066-a1a5-20f26387032c','d46e103d-6976-494c-bb01-488e62827e69');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('1bd4e5ec-1821-42d4-9bc0-79f447909d6f','2022-04-15T08:52:31Z','86014013-1967-401a-9c9e-1f77aa87193f','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('092831c8-46f6-4b21-99ed-dae5f555baec','2022-01-04T16:43:08Z','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','9f4f0a35-aa26-48aa-9658-242a15cdf12b');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('dd363ed9-89c5-4087-ab13-20c3fb48854e','2022-04-06T23:10:10Z','66845582-d1d6-45c7-87ad-8355a4599af9','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('7ca6f8ae-3c83-4501-998c-d745bc1e32e2','2022-02-04T02:51:35Z','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','9a663601-6933-4741-bc35-c628044ec1c9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('50767b41-10d2-40b9-8265-c6c4cfeb541c','2022-03-29T13:54:43Z','607370b3-ab13-4014-a55d-54151e2ebbc2','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('96f71a8e-44c9-491a-b1cf-40c497ad265e','2021-10-03T14:17:47Z','53b18f94-6da1-46f7-9bdf-e7954626cad2','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('60b8dae0-71de-4350-a7fe-a8810c8c1ca3','2022-01-25T18:23:39Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('2603770a-d7e5-4335-8716-2d48720bf75c','2021-08-07T03:14:17Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','9f4f0a35-aa26-48aa-9658-242a15cdf12b');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('b9ef47b6-95ae-4347-8b7a-ef87ca54b764','2021-07-11T10:25:23Z','c6d135b5-88db-4c5a-a394-f665df4db004','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('274625cb-6d30-42c6-b12b-f0262b06f550','2021-12-18T06:14:23Z','496e5450-9a0f-49f3-adc6-abe23f7d22a8','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('6fc9c816-3b6e-4f39-b4d5-9af18ebf5d27','2021-07-16T13:19:50Z','58557378-75ed-4066-a1a5-20f26387032c','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('db2ccf9e-e458-4754-87fe-640fefc2ec22','2021-08-05T10:10:21Z','857e3405-bd9a-42b3-90e9-eef76b7ece8f','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('5572be7a-cff2-4a63-b41d-f80a5b5a2856','2022-03-14T07:39:36Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('4cad828f-d677-45cb-a5ed-9d34dfe2fae2','2021-09-25T04:37:51Z','58557378-75ed-4066-a1a5-20f26387032c','9a663601-6933-4741-bc35-c628044ec1c9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('047fe79f-6c4e-4316-9031-3d6798128fa8','2022-04-20T06:03:16Z','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('45466dbb-1f70-41c3-b942-54b0baed0b34','2021-12-26T21:25:06Z','cebd1cd6-057e-4992-b6b3-5d6c2505307b','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('4b0f4907-4d76-4c87-81ca-72bc6158fd92','2021-07-29T12:21:03Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','9f4f0a35-aa26-48aa-9658-242a15cdf12b');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('fd0eaaa5-7de1-494e-8489-60d095bfcf2d','2021-12-15T19:07:24Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','9a663601-6933-4741-bc35-c628044ec1c9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('ea4f1ee0-c9d3-4965-bd9a-4917f62d5273','2022-03-03T11:15:19Z','4b2c0916-64f3-4a4f-845f-ea16975a4345','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('b25aee31-275c-4da2-928c-0598867f7a1c','2022-03-20T20:47:18Z','d2a89c9d-807b-40ff-9e14-030576fde8b8','8b0cddf3-412c-4dfa-92f7-bb78e3da149f');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('780dd505-a9a0-4ef0-8c85-e60072d4af8f','2022-02-11T03:57:42Z','e399e7c2-a66e-40d4-bc43-103cfe930894','d46e103d-6976-494c-bb01-488e62827e69');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('54ed1350-e535-4fc5-9a40-71564882278a','2021-10-30T13:45:17Z','93be352c-08c6-4b93-9f9b-63c7ded1b6f9','8b0cddf3-412c-4dfa-92f7-bb78e3da149f');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('4999b786-af7a-40eb-bcc3-9c1d3c6c6c8b','2021-07-10T21:53:31Z','87125b24-c96d-4d28-9c44-a01386aaad20','8b0cddf3-412c-4dfa-92f7-bb78e3da149f');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('61088bb2-491c-4ae8-b1ac-90188ffebe26','2021-08-10T02:28:12Z','93be352c-08c6-4b93-9f9b-63c7ded1b6f9','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('1b76bc56-86dd-4532-8d72-2964a36c5f34','2021-09-04T21:34:07Z','66845582-d1d6-45c7-87ad-8355a4599af9','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('8027df62-de44-4835-9b1e-fd027d2e8244','2021-12-04T00:12:34Z','07ca6734-6f47-4125-96cc-5a8b93a2a33b','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('b870469f-2d0a-4092-b623-eb3fef25c3f8','2021-11-04T08:17:57Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','c897ad50-a071-4181-93a0-f81ce1b9229a');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('87279fd6-e8e2-44bb-9d7b-8c95f5477e63','2022-01-31T18:19:22Z','58557378-75ed-4066-a1a5-20f26387032c','9f4f0a35-aa26-48aa-9658-242a15cdf12b');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('b81742d8-9be6-4b74-8bcc-04e5d1f377aa','2021-09-20T03:44:41Z','66845582-d1d6-45c7-87ad-8355a4599af9','8b0cddf3-412c-4dfa-92f7-bb78e3da149f');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('e384a1ce-bc78-465a-9f73-b2cd57d2b210','2021-10-15T21:40:23Z','e399e7c2-a66e-40d4-bc43-103cfe930894','9a663601-6933-4741-bc35-c628044ec1c9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('faaf816f-97d3-437d-a097-501caf33b5a5','2022-04-23T00:48:31Z','54dfd152-194a-4201-9256-334355cbb291','b3b8bf9d-78a9-4c0c-a4e8-4c7b47c5bde9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('8c5cdfdf-4dda-4332-a13f-f7e373d5beaf','2022-02-18T21:03:28Z','58557378-75ed-4066-a1a5-20f26387032c','8b0cddf3-412c-4dfa-92f7-bb78e3da149f');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('6ea7d449-ca15-49bd-9b16-09997aa07d06','2021-11-29T03:05:19Z','93be352c-08c6-4b93-9f9b-63c7ded1b6f9','51bd5a3c-805a-496a-8f1c-1cf31a21c7f8');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('8f549791-a2e4-4783-ac38-7fe48896dfcf','2021-08-25T14:01:20Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','dcf83561-13a4-401c-b285-827c7d733a42');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('d460f127-69b0-4c89-8fce-c599fdd83038','2022-02-13T02:12:05Z','496e5450-9a0f-49f3-adc6-abe23f7d22a8','9a663601-6933-4741-bc35-c628044ec1c9');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('2f2cdc88-62cb-4014-ad89-38b52d9c5dba','2021-07-02T04:39:06Z','66845582-d1d6-45c7-87ad-8355a4599af9','f986c568-af81-4275-8250-4b47d110b164');
INSERT INTO "GroupChatMembership"("groupChatMembershipId","dtmJoined","userId","groupChatId") VALUES ('25b78d48-7c47-4308-8b5f-0269816123ae','2021-11-17T04:26:18Z','87125b24-c96d-4d28-9c44-a01386aaad20','dcf83561-13a4-401c-b285-827c7d733a42');
