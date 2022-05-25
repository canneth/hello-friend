
import { writeFile } from 'node:fs/promises';
import generateList from './utils/generateList.mjs';

const userIdList = [
  '5ea9cb41-2336-41bd-89f4-bcacef244d35',
  '21c21657-77f4-4ecb-b9ca-5c8de5378248',
  'b2b7e2d1-9496-4a0f-ad0d-314b8c8df624',
  '607370b3-ab13-4014-a55d-54151e2ebbc2',
  '86014013-1967-401a-9c9e-1f77aa87193f',
  '1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372',
  'd2a89c9d-807b-40ff-9e14-030576fde8b8',
  '58557378-75ed-4066-a1a5-20f26387032c',
  '66845582-d1d6-45c7-87ad-8355a4599af9',
  '36e8f20f-fd55-43cd-b7f3-51d6f3d2454b',
  '1cb0f679-3f83-441e-ad21-b22e5f8315b8',
  '4b2c0916-64f3-4a4f-845f-ea16975a4345',
  '07ca6734-6f47-4125-96cc-5a8b93a2a33b',
  'cebd1cd6-057e-4992-b6b3-5d6c2505307b',
  'e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf',
  '713b02f5-ad39-4f3a-97b1-29e4ca023a2f',
  '430def23-3dd5-42c1-8dcf-869d2506fd60',
  '496e5450-9a0f-49f3-adc6-abe23f7d22a8',
  'e399e7c2-a66e-40d4-bc43-103cfe930894',
  '857e3405-bd9a-42b3-90e9-eef76b7ece8f',
  'c3df681d-cf36-4214-9fae-019cffdee68a',
  '87125b24-c96d-4d28-9c44-a01386aaad20',
  '4d8f6228-60cf-4707-b102-5b0cc0e779d8',
  '54dfd152-194a-4201-9256-334355cbb291',
  '3ce6d955-b341-4960-a7ba-a6cc8c67da4f',
  '8ad9c286-bb5a-4338-87cb-c0c31d0be3e7',
  '93be352c-08c6-4b93-9f9b-63c7ded1b6f9',
  'c6d135b5-88db-4c5a-a394-f665df4db004',
  '70e4cb54-45ba-4245-a8ec-1abeb72b3678',
  '53b18f94-6da1-46f7-9bdf-e7954626cad2'
];

const chatMembershipList = [
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', 'e484cdf0-2aae-41a0-8e25-d5d33018282f'],
  ['66845582-d1d6-45c7-87ad-8355a4599af9', 'e484cdf0-2aae-41a0-8e25-d5d33018282f'],
  ['07ca6734-6f47-4125-96cc-5a8b93a2a33b', '620ad5be-1f91-456e-afc4-f822de2dffda'],
  ['36e8f20f-fd55-43cd-b7f3-51d6f3d2454b', '620ad5be-1f91-456e-afc4-f822de2dffda'],
  ['e7d1a17f-a89c-4ef9-aba7-f1b1704de2bf', '88bb5353-9534-473a-a3ac-55ce6f1a044f'],
  ['1cb0f679-3f83-441e-ad21-b22e5f8315b8', '88bb5353-9534-473a-a3ac-55ce6f1a044f'],
  ['21c21657-77f4-4ecb-b9ca-5c8de5378248', '8a108fd5-8314-487a-a42e-8d8d18e4fe3c'],
  ['4b2c0916-64f3-4a4f-845f-ea16975a4345', '8a108fd5-8314-487a-a42e-8d8d18e4fe3c'],
  ['b2b7e2d1-9496-4a0f-ad0d-314b8c8df624', 'f8054c41-38c1-4d37-829f-a5d70fa87d21'],
  ['cebd1cd6-057e-4992-b6b3-5d6c2505307b', 'f8054c41-38c1-4d37-829f-a5d70fa87d21'],
  ['607370b3-ab13-4014-a55d-54151e2ebbc2', '0d323d01-0124-457e-b109-5d643d124edc'],
  ['713b02f5-ad39-4f3a-97b1-29e4ca023a2f', '0d323d01-0124-457e-b109-5d643d124edc'],
  ['86014013-1967-401a-9c9e-1f77aa87193f', '3c14b011-f3d3-48ec-be28-efe90b5bd3a3'],
  ['430def23-3dd5-42c1-8dcf-869d2506fd60', '3c14b011-f3d3-48ec-be28-efe90b5bd3a3'],
  ['1a1fd6fd-4bd6-4418-9c9f-d2339b5e6372', '91dbd0e1-ccee-42b8-bf1f-150cfc7c814f'],
  ['496e5450-9a0f-49f3-adc6-abe23f7d22a8', '91dbd0e1-ccee-42b8-bf1f-150cfc7c814f'],
  ['d2a89c9d-807b-40ff-9e14-030576fde8b8', 'd806e26b-0da9-4462-8b45-2060624be8a7'],
  ['e399e7c2-a66e-40d4-bc43-103cfe930894', 'd806e26b-0da9-4462-8b45-2060624be8a7'],
  ['58557378-75ed-4066-a1a5-20f26387032c', 'c9fa33b6-f810-4484-8a4d-8307368bd6d3'],
  ['857e3405-bd9a-42b3-90e9-eef76b7ece8f', 'c9fa33b6-f810-4484-8a4d-8307368bd6d3']
];

const generatedList = generateList(chatMembershipList, 300);

writeFile('./ignored/output.js', JSON.stringify(generatedList));