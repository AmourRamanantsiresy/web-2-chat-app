import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const comparePassword = ({ password, confirmPassword }: any) => password === confirmPassword;

const validator = zod
  .object({
    name: zod.string().nonempty().min(4).max(255),
    email: zod.string().nonempty().email(),
    password: zod.string().nonempty().min(4),
    confirmPassword: zod.string().nonempty(),
  })
  .refine(comparePassword, { message: 'Password do not match.', path: ['confirmPassword'] });

export type SignUpFormType = zod.infer<typeof validator>;
export const signUpResolver = zodResolver(validator);
