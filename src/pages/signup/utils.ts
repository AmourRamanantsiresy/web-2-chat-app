import { CreateUser } from '@/common/types';
import zod from 'zod';

export const signUpSchema = zod.object({
  name: zod.string().min(5).max(15),
  email: zod.string().email(),
  password: zod.string().min(8),
});

export type SignUpSchema = zod.infer<typeof signUpSchema>;

export const userSignUpDefaultValues: CreateUser = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};
