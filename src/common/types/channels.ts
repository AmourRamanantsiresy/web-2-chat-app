export interface RestChannel {
  id: number;
  name: string;
  type: string;
  ownerId: number;
  updatedAt: string;
  createdAt: string;
}

enum ChannelType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

type UserIds = number[];

export interface CreateChannel {
  name: string;
  type: ChannelType;
  members: UserIds;
}
