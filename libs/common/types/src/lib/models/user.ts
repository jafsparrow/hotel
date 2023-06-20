import { FormatedCountry } from './countries';

export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
  STAFF = 'staff',
  TAKEAWAY = 'takeaway',
}

export interface User {
  id?: number;
  email?: string;
  companyId?: string;
  firstName: string;
  lastName?: string;
  username?: string;
  userType: UserType;
  token?: string;
  country?: FormatedCountry;
  isAdmin?: boolean;
  isCashier?: boolean;
  isWaiter?: boolean;
  isKitchenUser?: boolean;
}

export interface LoginData {
  username: string;
  password: string;
}
