import { UserModel } from '../models';

export interface UsersModel {
  data: Array<UserModel>;
  total_pages: number;
  per_page: number;
  total: number;
  page: number;
}
