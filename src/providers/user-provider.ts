import { privateRequest } from '@/providers/request';
import { DomainUser, EditableUser, RestUser } from '@/common/types';
import { userMapper } from '@/providers/mapper';

export const userProvider = {
  getOne: async () => {
    const {
      data: { user: _user },
    } = await privateRequest().get('/user');

    const user: RestUser = { ..._user };
    return userMapper.toDomain(user);
  },
  updateOne: async (useredited: EditableUser) => {
    const { data: user } = await privateRequest().put('/user', useredited);
    return user;
  },
};
