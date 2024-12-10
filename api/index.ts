import express from 'express';
import cors from 'cors';
import messagesRouter from './routers/messages';

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use('/messages', messagesRouter);


const run = () => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};


void run();