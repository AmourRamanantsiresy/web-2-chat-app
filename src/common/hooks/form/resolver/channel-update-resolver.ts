import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const validator = zod.object({
  members: zod.string().nonempty().array().nonempty(),
});

export type UpdateChannelForm = zod.infer<typeof validator>;
export const updateChannelResolver = zodResolver(validator);
