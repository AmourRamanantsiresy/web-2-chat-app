import { EditableUser } from '@/common/types';
import { AxiosInstance } from 'axios';
import { privateRequest } from './request';
import { Channel, CreateChannel, User, UserMin } from '@/types';

export class ChannelProvider {
  private privateRequest: AxiosInstance;
  private static instance: ChannelProvider | null = null;

  private constructor(accessToken: string) {
    this.privateRequest = privateRequest(accessToken);
  }

  public static api(accessToken: string) {
    if (this.instance === null) {
      this.instance = new ChannelProvider(accessToken);
    }
    return this.instance;
  }

  public async getOne(channelId: number) {
    const {
      data: { channel },
    } = await this.privateRequest.get(`/channel/${channelId}`);
    return channel as Channel;
  }

  public async addMember(channelId: number, membersIds: number[]) {
    const {
      data: { userAdded },
    } = await this.privateRequest.post(`/channels/${channelId}/members`, { members: membersIds });
    return userAdded as number[];
  }

  public async createChannel(channel: CreateChannel) {
    const {
      data: { channel: createdChannel },
    } = await this.privateRequest.post('/channel', channel);

    return createdChannel as Channel;
  }

  public async getAll() {
    const {
      data: { channels },
    } = await this.privateRequest.get('/channels');
    return channels as Channel[];
  }
}
