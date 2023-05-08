export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}

export interface CreateUser extends User {
  confirmPassword?: string;
}
