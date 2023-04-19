import { AUTH_DATA } from './constants';

interface IGetAuthDataResult {
  token?: string;
  id?: number;
  is_doctor?: boolean;
}

export const getAuthData = (): IGetAuthDataResult => {
  try {
    const data = localStorage.getItem(AUTH_DATA);

    if (data) {
      return JSON.parse(data);
    }

    return {};
  } catch (e) {
    console.error(e);
    return {};
  }
};
