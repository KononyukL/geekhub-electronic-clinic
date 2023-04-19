import { AUTH_DATA } from './constants';

export const getAuthData = () => {
  try {
    const data = localStorage.getItem(AUTH_DATA);

    if (data) {
      return JSON.parse(data);
    }

    return {};
  } catch (e) {
    console.error(e);
  }
};
