export interface LoginUser {
  email?: string;
  password?: string;
}

export interface User extends LoginUser {
  name?: string;
}

export interface CreateUser extends User {
  confirmPassword?: string;
}

export interface CreatedUser {
  status: number;
  user: DomainUser;
}

export interface DomainUser {
  bio?: string;
  createdAt?: string;
  email?: string;
  googleId?: string;
  id?: number;
  name?: string;
  status?: string;
  token?: string;
}

export interface RestUser extends DomainUser {
  deletedAt?: string;
  token?: string;
  updatedAt?: string;
}

export interface EditableUser {
  name?: string;
  email?: string;
  oldPassword: string | number;
  password: string | number;
  bio: string;
}
