import { AUTH_DATA } from './constants';
import dayjs from 'dayjs';

interface IGetAuthDataResult {
  token?: string;
  id?: number;
  user_id?: number;
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

export function removeEmptyFields(data: Record<string, any>) {
  Object.keys(data).forEach((key) => {
    if (data[key] === '' || data[key] === null) {
      delete data[key];
    }
  });
}

export const parseDate = (date: string | Date, format: string): string => {
  if (!dayjs(date).isValid()) {
    return date as string;
  }

  return dayjs(date).format(format);
};
