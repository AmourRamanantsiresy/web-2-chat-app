import zod from 'zod';

export const updateUserSchema = zod
  .object({
    name: zod.string().nonempty(),
    bio: zod.string().nonempty(),
    oldPassword: zod.string().min(0),
    password: zod.string().min(0),
    confirmPassword: zod.string().min(0),
  })
  .refine(
    data =>
      (data.password.length > 0 && data.oldPassword.length > 0) ||
      (data.password.length === 0 && data.oldPassword.length === 0),
    { path: ['password'], message: 'The new Password must contains at least one character.' }
  )
  .refine(
    ({ confirmPassword, password }) => {
      return confirmPassword === password;
    },
    { message: 'Password do not match.', path: ['confirmPassword'] }
  );
