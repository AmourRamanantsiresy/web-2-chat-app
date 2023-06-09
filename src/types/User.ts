/**
 * type on update, create or get one user
 */
export interface User {
  id: number;
  email: string;
  name: string;
  googleId: string;
  bio: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  token: string;
}

/**
 * type on get all users
 */
export interface UserMin {
  id: number;
  name: string;
  email: string;
  bio: string;
}
