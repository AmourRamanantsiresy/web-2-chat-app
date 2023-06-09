import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const validator = zod.object({
  email: zod.string().nonempty().email(),
  password: zod.string().nonempty(),
});
export type LoginFormType = zod.infer<typeof validator>;
export const loginResolver = zodResolver(validator);
