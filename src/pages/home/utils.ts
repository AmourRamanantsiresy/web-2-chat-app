import zod from 'zod';

export const updateUserSchema = zod
  .object({
    name: zod.string().nonempty(),
    bio: zod.string().nonempty(),
    oldPassword: zod.string(),
    password: zod.string(),
  })
  .refine(
    data =>
      (data.password.length > 0 && data.oldPassword.length > 0) ||
      (data.password.length === 0 && data.oldPassword.length === 0),
    { path: ['password'], message: 'The new Password must contains at least one character.' }
  );
