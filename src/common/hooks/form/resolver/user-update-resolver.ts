import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const comparePassword = ({ newPassword, confirmPassword }: any) => newPassword === confirmPassword;
const isPasswordNeeded = ({ currentPassword, newPassword, confirmPassword }: any) =>
  (currentPassword.length === 0 && newPassword.length === 0 && confirmPassword.length === 0) ||
  (currentPassword.length !== 0 && newPassword.length !== 0 && confirmPassword.length !== 0);

const validator = zod
  .object({
    name: zod.string().nonempty(),
    bio: zod.string().nonempty(),
    email: zod.string().email(),
    newPassword: zod.string().min(0),
    currentPassword: zod.string().min(0),
    confirmPassword: zod.string().min(0),
  })
  .refine(isPasswordNeeded, {
    path: ['newPassword'],
    message: 'To update the password, all fields currentPassword, newPassword and confirmPassword is required.',
  })
  .refine(isPasswordNeeded, {
    path: ['currentPassword'],
    message: 'To update the password, all fields currentPassword, newPassword and confirmPassword is required.',
  })
  .refine(isPasswordNeeded, {
    path: ['confirmPassword'],
    message: 'To update the password, all fields currentPassword, newPassword and confirmPassword is required.',
  })
  .refine(comparePassword, { message: 'Password do not match.', path: ['confirmPassword'] });

export type UpdateUserForm = zod.infer<typeof validator>;
export const userUpdateResolver = zodResolver(validator);
