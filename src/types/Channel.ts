import { UserMin } from './User';

/**
 * All channel type
 */
export interface Channel {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  ownerId: number;
  owner: UserMin;
}

export type ChannelType = 'public' | 'private';

/**
 * on create channel
 */
export interface CreateChannel {
  name: string;
  type: ChannelType;
  members: number[];
}

export interface AddMemberToChannel {
  members: number[];
}
