import express from 'express'

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  console.log('get messages page');
});

messagesRouter.post('/', async (req, res) => {
  console.log('post message page');
});

export default messagesRouter;