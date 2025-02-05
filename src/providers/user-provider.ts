import { EditableUser } from '@/common/types';
import { AxiosInstance } from 'axios';
import { privateRequest } from './request';
import { User, UserMin } from '@/types';
import { cookies } from '@/common/utils';

export class UserProvider {
  private privateRequest: AxiosInstance;
  private static instance: UserProvider | null = null;

  private constructor(accessToken: string) {
    this.privateRequest = privateRequest(accessToken);
  }

  public static api(accessToken: string) {
    if (this.instance === null) {
      this.instance = new UserProvider(accessToken);
    }
    return this.instance;
  }

  public async getOne() {
    const {
      data: { user },
    } = await this.privateRequest.get('/user');
    return user as User;
  }

  public async updateOne(userEdited: EditableUser) {
    const {
      data: { user },
    } = await this.privateRequest.put('/user', userEdited);
    return user as User;
  }

  public async getAll(id?: number) {
    const {
      data: { users },
    } = await this.privateRequest.get('/users');
    return (users as UserMin[]).filter(user => user.id !== id || -1);
  }

  public async fetcher(action: 'getOne' | 'updateOne' | 'getAll') {
    return this[action];
  }
}
