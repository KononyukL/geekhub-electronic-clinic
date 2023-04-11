import { TSpecializations, TSpecializationsServerData } from './types';

export const specializationsNormalizer = (data: TSpecializationsServerData): TSpecializations => {
  if (!data) {
    return [];
  }

  return data.map((item) => item[0]);
};
