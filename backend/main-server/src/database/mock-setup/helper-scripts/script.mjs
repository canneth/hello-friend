
import { writeFile } from 'node:fs/promises';
import generateList from './utils/generateList.mjs';

const chatMembershipList = [
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', 'e484cdf0-2aae-41a0-8e25-d5d33018282f'],
  ['07ca6734-6f47-4125-96cc-5a8b93a2a33b', 'e484cdf0-2aae-41a0-8e25-d5d33018282f'],
  ['66845582-d1d6-45c7-87ad-8355a4599af9', '620ad5be-1f91-456e-afc4-f822de2dffda'],
  ['36e8f20f-fd55-43cd-b7f3-51d6f3d2454b', '620ad5be-1f91-456e-afc4-f822de2dffda'],
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', '88bb5353-9534-473a-a3ac-55ce6f1a044f'],
  ['1cb0f679-3f83-441e-ad21-b22e5f8315b8', '88bb5353-9534-473a-a3ac-55ce6f1a044f'],
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', '8a108fd5-8314-487a-a42e-8d8d18e4fe3c'],
  ['4b2c0916-64f3-4a4f-845f-ea16975a4345', '8a108fd5-8314-487a-a42e-8d8d18e4fe3c'],
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', 'f8054c41-38c1-4d37-829f-a5d70fa87d21'],
  ['cebd1cd6-057e-4992-b6b3-5d6c2505307b', 'f8054c41-38c1-4d37-829f-a5d70fa87d21'],
  ['607370b3-ab13-4014-a55d-54151e2ebbc2', '0d323d01-0124-457e-b109-5d643d124edc'],
  ['713b02f5-ad39-4f3a-97b1-29e4ca023a2f', '0d323d01-0124-457e-b109-5d643d124edc'],
  ['5ea9cb41-2336-41bd-89f4-bcacef244d35', '3c14b011-f3d3-48ec-be28-efe90b5bd3a3'],
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