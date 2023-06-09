import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const validator = zod.object({
  name: zod.string().nonempty(),
  type: zod.string(),
  members: zod.string().nonempty().array().nonempty(),
});

export type CreateChannelForm = zod.infer<typeof validator>;
export const createChannelResolver = zodResolver(validator);
