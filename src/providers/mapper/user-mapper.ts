import { DomainUser, RestUser } from '@/common/types';

export const userMapper = {
  toDomain: (user: RestUser): DomainUser => {
    return {
      bio: user.bio,
      createdAt: user.createdAt,
      email: user.email,
      googleId: user.googleId,
      status: user.status,
      name: user.name,
      token: user.token,
      id: user.id,
    };
  },
  toRest: (user: DomainUser): RestUser => {
    return {
      bio: user.bio,
      createdAt: user.createdAt,
      email: user.email,
      googleId: user.googleId,
      status: user.status,
      name: user.name,
      token: user.token,
      id: user.id,
    };
  },
};
