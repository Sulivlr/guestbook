import {Message, MessageMutation} from './types';
import {promises as fs} from 'fs';
import crypto from 'crypto'

const fileName = './db.json';
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContent = await fs.readFile(fileName);
      data = JSON.parse(fileContent.toString());
    } catch (error) {
      data = [];
    }
  },
  async getMessages() {
    return data;
  },
  async addMessage(item: MessageMutation) {
    const message: Message = {
      id: crypto.randomUUID().toString(),
      ...item,
    };
    data.push(message);
    await this.save()
    return message;
  },
  async save() {
    await fs.writeFile(fileName, JSON.stringify((data), null, 2));
  },
};

export default fileDb;