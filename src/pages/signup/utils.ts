import { CreateUser } from '@/common/types';
import zod from 'zod';

export const signUpSchema = zod
  .object({
    name: zod.string().min(5).max(60),
    email: zod.string().email(),
    password: zod.string().min(8),
    confirmPassword: zod.string(),
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: "Password doesn't match.",
    path: ['confirmPassword'],
  });

export type SignUpSchema = zod.infer<typeof signUpSchema>;

export const userSignUpDefaultValues: CreateUser = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};
