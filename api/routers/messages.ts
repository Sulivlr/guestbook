import express from 'express'
import fileDb from '../fileDb';
import {MessageMutation} from '../types';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const message = await fileDb.getMessages();
  res.send(message);
});

messagesRouter.post('/', async (req, res) => {
  if (!req.body.message) {
    res.status(400).send({error: 'leave a message'});
  }

  const messageMutation: MessageMutation = {
    author: req.body.author,
    message: req.body.message,
    image: req.body.image,
  };

  const message = await fileDb.addMessage(messageMutation);
  res.send(message);
});

export default messagesRouter;