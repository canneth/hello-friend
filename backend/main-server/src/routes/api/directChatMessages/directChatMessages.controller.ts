
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getAllDirectChatMessagesBetweenUsers, getDirectChatMessagesInvolvingUser, getLatestDirectChatMessagesInvolvingUser } from './directChatMessages.service';

export const getDirectChatMessagesController: RequestHandler<
  {},
  {},
  {},
  {
    betweenUserIds?: string;
    involvedUserId?: User['userId'];
    latest?: string;
  }
> = async (req, res) => {

  const betweenUserIds = req.query.betweenUserIds?.split(',');
  const involvedUserId = req.query.involvedUserId;
  const latest = req.query.latest && (req.query.latest === 'false' ? false : true); // Expected to be a boolean

  if (!involvedUserId && !betweenUserIds) return res.status(400).send('involvedUserId or betweenUserIds query param is required!');
  if (involvedUserId && betweenUserIds) return res.status(400).send('Specify only either involvedUserId or betweenUserIds query params, not both');
  if (betweenUserIds && betweenUserIds.length !== 2) return res.status(400).send('betweenUserIds must contain exactly 2 userIds');

  // TODO: Guard this controller against unauthorised access!

  if (latest) {
    if (involvedUserId) {
      const directChatMessagesList = await getLatestDirectChatMessagesInvolvingUser(involvedUserId);
      return res.status(200).send(directChatMessagesList);
    }
    if (betweenUserIds) {
      const directChatMessagesList = await getAllDirectChatMessagesBetweenUsers(betweenUserIds[0], betweenUserIds[1]);
      const chronologicalMessageList = directChatMessagesList.sort((a, b) => {
        if (!a.dtmPosted || !b.dtmPosted) return 0;
        const aDate = (new Date(a.dtmPosted)).getTime();
        const bDate = (new Date(b.dtmPosted)).getTime();
        if (aDate < bDate) return 1;
        return 1;
      });
      return res.status(200).send([chronologicalMessageList[0]]);
    }
  } else {
    if (involvedUserId) {
      const directChatMessagesList = await getDirectChatMessagesInvolvingUser(involvedUserId);
      return res.status(200).send(directChatMessagesList);
    }
    if (betweenUserIds) {
      const directChatMessagesList = await getAllDirectChatMessagesBetweenUsers(betweenUserIds[0], betweenUserIds[1]);
      return res.status(200).send(directChatMessagesList);
    }
  }
};