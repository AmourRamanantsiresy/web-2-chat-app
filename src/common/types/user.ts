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

export interface DomainUser {
  bio?: string;
  createdAt?: string;
  email?: string;
  googleId?: string;
  id?: number;
  name?: string;
  status?: string;
}

export interface RestUser extends DomainUser {
  deletedAt?: string;
  token?: string;
  updatedAt?: string;
}
