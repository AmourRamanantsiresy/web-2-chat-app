import { EditableUser } from '@/common/types';
import { AxiosInstance } from 'axios';
import { privateRequest } from './request';
import { Message, SendMessage, SendMessageToChannel, SendMessageToUser, User, UserMin } from '@/types';

export class MessageProvider {
  private privateRequest: AxiosInstance;
  private static instance: MessageProvider | null = null;

  private constructor(accessToken: string) {
    this.privateRequest = privateRequest(accessToken);
  }

  public static api(accessToken: string) {
    if (this.instance === null) {
      this.instance = new MessageProvider(accessToken);
    }
    return this.instance;
  }

  public async getByChannelId(channelId: number) {
    const {
      data: { messages },
    } = await this.privateRequest.get(`/messages/channel/${channelId}`);
    return messages as Message[];
  }

  public async getByUserId(userId: number) {
    const {
      data: { messages },
    } = await this.privateRequest.get(`/messages/${userId}`);
    return messages as Message[];
  }

  private async send(message: SendMessage) {
    const {
      data: { message: sendedMessage },
    } = await this.privateRequest.post(`/message`, message);

    return sendedMessage as Message;
  }

  public async sendToUser(message: SendMessageToUser) {
    return await this.send({ ...message, channelId: null });
  }

  public async sendToChannel(message: SendMessageToChannel) {
    return await this.send({ ...message, recipientId: null });
  }
}
