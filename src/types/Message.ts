import { UserMin } from './User';

export interface SendMessage {
  senderId: number;
  channelId: number | null;
  recipientId: number | null;
  content: string;
}

export interface Message extends SendMessage {
  id: number;
  createdAt: string;
  updatedAt: string;
  sender: UserMin;
}

export type SendMessageToUser = Omit<SendMessage, 'channelId'> & { recipientId: number };
export type SendMessageToChannel = Omit<SendMessage, 'recipientId'> & { channelId: number };
