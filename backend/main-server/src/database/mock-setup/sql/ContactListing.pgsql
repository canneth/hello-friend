
/* Create ContactListing table */

DROP TABLE IF EXISTS "ContactListing";

CREATE TABLE "ContactListing" (
  "ownerUserId" UUID NOT NULL,
  "contactUserId" UUID NOT NULL,
  "contactListingId" UUID NOT NULL UNIQUE,
  "contactName" VARCHAR(50) NOT NULL,
  "dtmAdded" TIMESTAMPTZ NOT NULL,
  PRIMARY KEY ("ownerUserId", "contactUserId"),
  CONSTRAINT User_Adds_ContactListing_fk FOREIGN KEY ("ownerUserId") REFERENCES "User"("userId"),
  CONSTRAINT User_IsAddedIn_ContactListing_fk FOREIGN KEY ("contactUserId") REFERENCES "User"("userId")
);

/* Populate ContactListing table */

INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('fadd265f-e7f3-485b-be4f-b05fa04ca97e','Terathopius ecaudatus','2021-07-21T11:53:12Z','53b18f94-6da1-46f7-9bdf-e7954626cad2','713b02f5-ad39-4f3a-97b1-29e4ca023a2f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('b877068e-3e01-4aff-994d-e5909877b0f2','Tadorna tadorna','2021-09-07T21:01:19Z','54dfd152-194a-4201-9256-334355cbb291','53b18f94-6da1-46f7-9bdf-e7954626cad2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('18601027-e6d2-4fea-b74a-b6bbb5c4f7dd','Pteronura brasiliensis','2021-10-23T14:31:47Z','93be352c-08c6-4b93-9f9b-63c7ded1b6f9','86014013-1967-401a-9c9e-1f77aa87193f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('32fcba22-5357-4dfe-a785-290aa82b104c','Eolophus roseicapillus','2022-01-13T23:20:27Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('ad6f119b-0d42-4439-a3c3-5780eb3f5662','Butorides striatus','2022-01-21T08:10:07Z','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf','4d8f6228-60cf-4707-b102-5b0cc0e779d8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('ec950e49-e014-477c-9656-8f175fc1dd02','Paroaria gularis','2022-03-17T22:23:34Z','1cb0f679-3f83-441e-ad21-b22e5f8315b8','3ce6d955-b341-4960-a7ba-a6cc8c67da4f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('4f114f9c-3eb3-454d-9697-724874209046','Colobus guerza','2022-03-21T14:04:01Z','857e3405-bd9a-42b3-90e9-eef76b7ece8f','54dfd152-194a-4201-9256-334355cbb291');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('b6d2d624-d6a4-45cd-ab17-69f4d56f1837','Cebus albifrons','2021-12-27T00:55:48Z','07ca6734-6f47-4125-96cc-5a8b93a2a33b','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('5a1bda03-0edd-4d22-bb92-e7aa2608c52a','Upupa epops','2022-02-05T08:59:46Z','70e4cb54-45ba-4245-a8ec-1abeb72b3678','496e5450-9a0f-49f3-adc6-abe23f7d22a8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('aeb7e516-a462-4d69-b367-c6453309eb52','Tayassu tajacu','2021-07-05T04:23:20Z','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf','86014013-1967-401a-9c9e-1f77aa87193f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('95ddf7a4-5fc1-4579-b382-dca6c94f95c5','Butorides striatus','2022-04-11T04:51:01Z','607370b3-ab13-4014-a55d-54151e2ebbc2','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('9c9b000c-9047-4a3e-b106-8156176fa1f3','Chordeiles minor','2022-02-23T21:59:53Z','86014013-1967-401a-9c9e-1f77aa87193f','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('794a4f00-dc40-4db0-88c9-34e0d308c577','Salvadora hexalepis','2021-09-22T00:19:42Z','07ca6734-6f47-4125-96cc-5a8b93a2a33b','cebd1cd6-057e-4992-b6b3-5d6c2505307b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('7812b891-6f33-4800-9768-4e8cc960b678','Coendou prehensilis','2022-01-17T06:34:10Z','58557378-75ed-4066-a1a5-20f26387032c','70e4cb54-45ba-4245-a8ec-1abeb72b3678');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('31aef065-be8a-41d4-ab0b-a92a6fa5e089','Potos flavus','2021-10-26T08:43:21Z','21c21657-77f4-4ecb-b9ca-5c8de5378248','66845582-d1d6-45c7-87ad-8355a4599af9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('008a4747-662d-463a-b7ec-bae3b26840ef','Genetta genetta','2021-06-11T00:19:35Z','e399e7c2-a66e-40d4-bc43-103cfe930894','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('280962a3-1049-4cec-bb47-40700e9f385b','Myiarchus tuberculifer','2022-02-16T08:25:50Z','cebd1cd6-057e-4992-b6b3-5d6c2505307b','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('39cc88e9-1658-40c8-a393-eead524cb2b8','Larus fuliginosus','2022-01-16T08:59:53Z','54dfd152-194a-4201-9256-334355cbb291','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('b3e0aae5-5fad-4cf3-84cd-e189b078ec60','Varanus sp.','2021-06-30T21:57:07Z','66845582-d1d6-45c7-87ad-8355a4599af9','4d8f6228-60cf-4707-b102-5b0cc0e779d8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('d5cf8757-d1ef-4624-bef7-25997ef33c16','Catharacta skua','2021-06-16T06:06:11Z','54dfd152-194a-4201-9256-334355cbb291','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('cb91614b-3c43-4e0f-8dc7-349cbe63c571','Acrobates pygmaeus','2022-05-10T00:57:19Z','1cb0f679-3f83-441e-ad21-b22e5f8315b8','53b18f94-6da1-46f7-9bdf-e7954626cad2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('26d6a76f-5fdb-4cf4-87af-ac541c9f5640','Sula nebouxii','2021-10-09T06:25:50Z','d2a89c9d-807b-40ff-9e14-030576fde8b8','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('145aaae7-38cb-4a70-ab63-933a52cb872f','Bucephala clangula','2021-07-06T04:40:05Z','54dfd152-194a-4201-9256-334355cbb291','07ca6734-6f47-4125-96cc-5a8b93a2a33b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('6b649f61-ea58-41d6-97da-df3fa2c9a63c','Dasyurus maculatus','2022-03-13T22:51:47Z','87125b24-c96d-4d28-9c44-a01386aaad20','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('eb46d9c9-b9db-48af-984b-ba14c74ad026','Mungos mungo','2022-05-08T12:37:29Z','54dfd152-194a-4201-9256-334355cbb291','3ce6d955-b341-4960-a7ba-a6cc8c67da4f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('759e0e2c-ccb8-4560-8df4-366edfc68fcb','Phalacrocorax niger','2021-05-24T09:13:27Z','4b2c0916-64f3-4a4f-845f-ea16975a4345','e399e7c2-a66e-40d4-bc43-103cfe930894');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('9250bee9-f0c6-422b-a1cd-382d83cd7ccc','Recurvirostra avosetta','2021-12-01T15:05:31Z','430def23-3dd5-42c1-8dcf-869d2506fd60','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('0da22431-b234-43a1-a731-a5b8de5c161a','Globicephala melas','2021-11-06T22:20:32Z','21c21657-77f4-4ecb-b9ca-5c8de5378248','857e3405-bd9a-42b3-90e9-eef76b7ece8f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('aa746021-1d6c-47c5-85dd-eadccb38b291','Cygnus atratus','2022-01-30T16:04:57Z','21c21657-77f4-4ecb-b9ca-5c8de5378248','87125b24-c96d-4d28-9c44-a01386aaad20');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('a5e6eefd-2809-4621-a707-bdddd38bae9e','Lybius torquatus','2021-09-08T23:27:55Z','430def23-3dd5-42c1-8dcf-869d2506fd60','d2a89c9d-807b-40ff-9e14-030576fde8b8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('feca71ca-a495-4f67-85b3-fd106754731a','Plegadis falcinellus','2021-11-12T21:09:35Z','c6d135b5-88db-4c5a-a394-f665df4db004','c3df681d-cf36-4214-9fae-019cffdee68a');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('2a3370a7-a34b-438f-b76b-43c802bc5ba1','Ramphastos tucanus','2022-01-16T01:03:46Z','e399e7c2-a66e-40d4-bc43-103cfe930894','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('18aefcd7-4d1a-42a5-97a3-0e580c74d63e','Cathartes aura','2021-11-14T01:16:27Z','87125b24-c96d-4d28-9c44-a01386aaad20','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('22e84545-bdd1-4620-af5e-0c5a310eb78e','Phoenicopterus chilensis','2021-11-29T14:01:43Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('6ceffa12-ed1d-4410-abff-d4ca15a14d10','Papio cynocephalus','2022-02-17T11:21:07Z','93be352c-08c6-4b93-9f9b-63c7ded1b6f9','496e5450-9a0f-49f3-adc6-abe23f7d22a8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('4097242c-c510-4a02-b075-b41803619eb1','Semnopithecus entellus','2021-09-21T13:32:04Z','713b02f5-ad39-4f3a-97b1-29e4ca023a2f','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('952c789e-c0ed-4af7-89fd-2cfbb67d2fb3','Tursiops truncatus','2022-05-16T12:01:43Z','713b02f5-ad39-4f3a-97b1-29e4ca023a2f','66845582-d1d6-45c7-87ad-8355a4599af9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('69e96b4e-f906-46ac-8739-2d4db15df9b2','Pan troglodytes','2021-05-18T01:49:40Z','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('e433908d-b0d6-4dd8-981e-e4c061380fa3','Ammospermophilus nelsoni','2022-01-25T06:40:04Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','66845582-d1d6-45c7-87ad-8355a4599af9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('65e438ca-ce1b-4369-808f-316c8bc794d7','Rhea americana','2021-11-15T14:40:25Z','cebd1cd6-057e-4992-b6b3-5d6c2505307b','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('3eca3ba0-1827-443c-b796-66763bf2e7ee','Vanessa indica','2022-03-13T04:20:56Z','430def23-3dd5-42c1-8dcf-869d2506fd60','70e4cb54-45ba-4245-a8ec-1abeb72b3678');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('408b3adf-f515-4711-953d-afb2b02bffd9','Acinynox jubatus','2021-09-20T03:41:33Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','4d8f6228-60cf-4707-b102-5b0cc0e779d8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('cb035b34-2f7d-49ec-95f5-c477507b00ee','Pandon haliaetus','2022-01-25T17:12:39Z','87125b24-c96d-4d28-9c44-a01386aaad20','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('61dfbc26-7a7d-40cd-9da9-1409a1dae6a9','Stercorarius longicausus','2021-11-26T04:32:11Z','66845582-d1d6-45c7-87ad-8355a4599af9','5ea9cb41-2336-41bd-89f4-bcacef244d35');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('3e0f0d1f-b8f5-4a35-9c60-4c229f4ea394','Phaethon aethereus','2021-12-26T20:06:03Z','70e4cb54-45ba-4245-a8ec-1abeb72b3678','c6d135b5-88db-4c5a-a394-f665df4db004');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('11b537c5-bd26-4bc5-92a6-48ea9c2ac657','Ovibos moschatus','2021-10-18T08:17:31Z','c3df681d-cf36-4214-9fae-019cffdee68a','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('1a94302a-7972-4948-89c8-a813418be944','Axis axis','2022-02-09T01:28:15Z','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624','70e4cb54-45ba-4245-a8ec-1abeb72b3678');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('2b009628-ebec-4afd-b374-4d8f697d84f0','Tockus erythrorhyncus','2021-08-21T05:22:59Z','607370b3-ab13-4014-a55d-54151e2ebbc2','d2a89c9d-807b-40ff-9e14-030576fde8b8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('12d00985-88c5-44e0-9bda-bc4892b7725b','Picoides pubescens','2021-05-22T00:43:13Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','c6d135b5-88db-4c5a-a394-f665df4db004');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('4e2313e6-101c-46b5-afd8-1412456f5ea8','Pteronura brasiliensis','2021-11-28T00:37:47Z','607370b3-ab13-4014-a55d-54151e2ebbc2','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('3d6f351e-8f25-49ba-8769-fa02b04f0275','Sula dactylatra','2021-10-28T19:33:05Z','58557378-75ed-4066-a1a5-20f26387032c','07ca6734-6f47-4125-96cc-5a8b93a2a33b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('8da6c1e9-6a34-4443-9dc7-4d0dc7d63e5f','Pavo cristatus','2021-06-14T15:04:01Z','d2a89c9d-807b-40ff-9e14-030576fde8b8','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('e31c6b5b-7f92-410b-b67c-6e892b2bafa1','Sarcorhamphus papa','2021-09-21T15:43:14Z','713b02f5-ad39-4f3a-97b1-29e4ca023a2f','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('9766f907-6ded-49ac-b22b-eddf316fd781','Sagittarius serpentarius','2022-05-10T04:14:46Z','857e3405-bd9a-42b3-90e9-eef76b7ece8f','c6d135b5-88db-4c5a-a394-f665df4db004');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('d12c6f07-58fb-4aa0-a6c3-a2ddb3615173','Zenaida galapagoensis','2021-07-04T04:08:38Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','4b2c0916-64f3-4a4f-845f-ea16975a4345');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('1214eb00-bca9-47ce-a609-d04f44df1623','Kobus defassa','2021-06-24T03:35:43Z','c3df681d-cf36-4214-9fae-019cffdee68a','87125b24-c96d-4d28-9c44-a01386aaad20');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('66fe3b38-4521-4339-9918-59ed1fd4b399','Bucephala clangula','2021-06-26T04:26:05Z','4b2c0916-64f3-4a4f-845f-ea16975a4345','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('8e383a71-8d4d-4f5d-a3fb-98a159090b32','Felis libyca','2021-09-16T10:49:53Z','430def23-3dd5-42c1-8dcf-869d2506fd60','87125b24-c96d-4d28-9c44-a01386aaad20');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('cd969595-22cf-48df-9aaf-aefaa770b9ab','Antidorcas marsupialis','2021-11-18T14:35:50Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','607370b3-ab13-4014-a55d-54151e2ebbc2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('432d0887-31e2-4270-a638-4c439b9cc4e5','Threskionis aethiopicus','2021-12-26T20:07:11Z','607370b3-ab13-4014-a55d-54151e2ebbc2','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('fcf2977f-b000-4db0-b409-bc42c0da1293','Canis aureus','2021-09-12T17:33:22Z','713b02f5-ad39-4f3a-97b1-29e4ca023a2f','53b18f94-6da1-46f7-9bdf-e7954626cad2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('0f1c411d-9118-41eb-bf45-70def8339a7a','Ursus americanus','2021-05-30T04:46:28Z','cebd1cd6-057e-4992-b6b3-5d6c2505307b','70e4cb54-45ba-4245-a8ec-1abeb72b3678');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('be57b863-53be-46c2-9951-ca45c88fbd1c','Podargus strigoides','2022-03-17T14:14:35Z','70e4cb54-45ba-4245-a8ec-1abeb72b3678','713b02f5-ad39-4f3a-97b1-29e4ca023a2f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('9e57141c-bd74-4cfb-8ad7-1b471654d64c','Halcyon smyrnesis','2021-08-06T17:56:41Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('b12f9787-f812-4e6a-9978-ce2e6682d33c','Sciurus niger','2022-05-14T23:09:56Z','86014013-1967-401a-9c9e-1f77aa87193f','cebd1cd6-057e-4992-b6b3-5d6c2505307b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('5b17701b-df17-4aa6-8c5a-c7a71af400be','Trichoglossus chlorolepidotus','2021-11-17T14:09:05Z','86014013-1967-401a-9c9e-1f77aa87193f','713b02f5-ad39-4f3a-97b1-29e4ca023a2f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('13618abd-574f-4609-b0bc-514605220830','Pedetes capensis','2021-06-16T14:34:25Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','430def23-3dd5-42c1-8dcf-869d2506fd60');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('4ca22db3-5dc3-45d5-bb9c-515c9b0c2e11','Snycerus caffer','2021-11-10T21:57:51Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('ea54761a-8325-4608-8aa7-14791f0ac4bc','Castor canadensis','2021-11-28T04:26:38Z','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','21c21657-77f4-4ecb-b9ca-5c8de5378248');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('bca33fe6-b8b8-42ac-a5d2-a742e048924e','Microcebus murinus','2022-03-30T00:17:43Z','857e3405-bd9a-42b3-90e9-eef76b7ece8f','713b02f5-ad39-4f3a-97b1-29e4ca023a2f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('faf4f35b-defd-49a9-8759-79569f47030d','Tursiops truncatus','2021-08-06T11:35:44Z','c3df681d-cf36-4214-9fae-019cffdee68a','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('aca181ea-0ca4-47db-a345-7f156a939569','Lemur catta','2021-05-23T01:03:37Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','607370b3-ab13-4014-a55d-54151e2ebbc2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('40e4c731-45f8-428f-9829-fa0b04b7a118','Ciconia ciconia','2022-03-10T15:48:38Z','87125b24-c96d-4d28-9c44-a01386aaad20','3ce6d955-b341-4960-a7ba-a6cc8c67da4f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('16af7998-052a-4f4a-b8f9-64d85e4adfe5','Bison bison','2021-07-25T18:19:21Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','cebd1cd6-057e-4992-b6b3-5d6c2505307b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('76e2b3e9-b42c-4c6d-9f2f-af9b0be4a8ad','Alopex lagopus','2021-10-21T19:05:55Z','e399e7c2-a66e-40d4-bc43-103cfe930894','496e5450-9a0f-49f3-adc6-abe23f7d22a8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('09fc153a-64eb-4c8b-a09a-4fbe37972538','Pseudalopex gymnocercus','2021-10-13T23:00:17Z','54dfd152-194a-4201-9256-334355cbb291','713b02f5-ad39-4f3a-97b1-29e4ca023a2f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('1d368043-c20a-400f-a8ec-01f6ae66323d','Macropus fuliginosus','2022-03-13T20:34:51Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('a992771e-b037-44b4-8601-bd1adcb9e62d','Cordylus giganteus','2021-09-15T17:30:36Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','54dfd152-194a-4201-9256-334355cbb291');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('15d904e4-80ec-4799-8263-4bbb7579bd28','Alces alces','2022-05-16T11:28:49Z','87125b24-c96d-4d28-9c44-a01386aaad20','c3df681d-cf36-4214-9fae-019cffdee68a');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('abce2010-9dfd-44a0-8c14-8f243f3ce034','Dasyurus maculatus','2022-01-24T05:26:26Z','54dfd152-194a-4201-9256-334355cbb291','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('2fe47c41-9a41-4edc-9ee0-99c7bc6cfe3f','Dasyurus viverrinus','2021-08-04T06:01:21Z','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf','1cb0f679-3f83-441e-ad21-b22e5f8315b8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('2a9fbeac-625c-42c4-9d4f-5a803200df11','Prionace glauca','2021-08-11T18:00:21Z','70e4cb54-45ba-4245-a8ec-1abeb72b3678','86014013-1967-401a-9c9e-1f77aa87193f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('75b26fce-f3bc-4f5c-b382-8de65bda052c','Calyptorhynchus magnificus','2021-12-29T14:34:15Z','36e8f20f-fd55-43cd-b7f3-51d6f3d2454b','53b18f94-6da1-46f7-9bdf-e7954626cad2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('25e263c3-f17f-450b-be66-7fccb345744f','Falco mexicanus','2021-09-10T12:46:51Z','54dfd152-194a-4201-9256-334355cbb291','496e5450-9a0f-49f3-adc6-abe23f7d22a8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('75d4f2dc-0d37-4fa4-949b-207f34c27b97','Parus atricapillus','2021-06-23T00:38:52Z','87125b24-c96d-4d28-9c44-a01386aaad20','1cb0f679-3f83-441e-ad21-b22e5f8315b8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('fd58e9c5-1b85-4b4a-8290-3284713c1f28','Cyrtodactylus louisiadensis','2021-11-27T02:53:23Z','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf','857e3405-bd9a-42b3-90e9-eef76b7ece8f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('1fed7665-bd8f-48e3-bdfc-7718d7b869e1','Irania gutteralis','2021-10-16T21:26:11Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','93be352c-08c6-4b93-9f9b-63c7ded1b6f9');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('bb0ea216-ebf3-4737-9f57-89f79a71dc1a','Erinaceus frontalis','2021-07-25T20:45:19Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('92e7b6aa-9ce0-42dc-947e-da0537e06721','Uraeginthus granatina','2021-05-20T18:18:01Z','1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372','e399e7c2-a66e-40d4-bc43-103cfe930894');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('cf1964c5-d60a-4da7-9c27-3b3bc6f2f91c','Phoenicopterus ruber','2021-05-05T07:08:01Z','8ad9c286-bb5a-4338-87cb-c0c31d0be3e7','53b18f94-6da1-46f7-9bdf-e7954626cad2');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('b8462241-0874-40f6-a2a3-a76d517a0340','Cacatua tenuirostris','2022-02-12T19:56:56Z','430def23-3dd5-42c1-8dcf-869d2506fd60','58557378-75ed-4066-a1a5-20f26387032c');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('68eef0d7-7d2c-4ac5-b103-2a132eec053e','Ursus maritimus','2021-07-19T07:32:22Z','3ce6d955-b341-4960-a7ba-a6cc8c67da4f','430def23-3dd5-42c1-8dcf-869d2506fd60');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('3e04410c-ae65-41cb-8116-eb879b12a4d2','Meles meles','2021-10-28T17:31:02Z','70e4cb54-45ba-4245-a8ec-1abeb72b3678','87125b24-c96d-4d28-9c44-a01386aaad20');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('ca684ea1-76ef-497c-bd1a-f4a5044010ef','Theropithecus gelada','2021-08-14T22:23:37Z','607370b3-ab13-4014-a55d-54151e2ebbc2','cebd1cd6-057e-4992-b6b3-5d6c2505307b');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('48ef3ec1-7945-43d8-ac6f-7623cbc8529f','Kobus defassa','2021-07-06T08:05:16Z','4d8f6228-60cf-4707-b102-5b0cc0e779d8','d2a89c9d-807b-40ff-9e14-030576fde8b8');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('d5f34952-59e5-4fa1-a5e6-1e0714946a99','Manouria emys','2021-12-05T12:38:10Z','1cb0f679-3f83-441e-ad21-b22e5f8315b8','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('0d29f835-9cd2-41c3-a798-facc53c28e8c','Trichoglossus haematodus moluccanus','2021-05-07T11:13:15Z','c6d135b5-88db-4c5a-a394-f665df4db004','58557378-75ed-4066-a1a5-20f26387032c');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('3256a11e-52cf-4803-83e4-6d953706901c','Aegypius tracheliotus','2021-06-24T07:53:55Z','4b2c0916-64f3-4a4f-845f-ea16975a4345','e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('fba600da-9421-413c-9845-8b2dda05c49b','Phasianus colchicus','2022-02-17T04:11:43Z','b2b7e2d1-9496-4a0f-ad0d-314b8c8df624','857e3405-bd9a-42b3-90e9-eef76b7ece8f');
INSERT INTO "ContactListing"("contactListingId","contactName","dtmAdded","ownerUserId","contactUserId") VALUES ('c4b8343c-387f-45d8-aeb5-385747cf0920','Choriotis kori','2021-10-20T12:50:37Z','c3df681d-cf36-4214-9fae-019cffdee68a','1cb0f679-3f83-441e-ad21-b22e5f8315b8');
