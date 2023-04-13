export interface IDoctor {
  id: number;
  email: string;
  profile_image: string;
  last_name: string;
  first_name: string;
  patronim_name: string;
  specialization: string;
  price: number;
  category: string;
  experience: string;
  info: string;
};

export interface IBocking {
  time: string;
  status: boolean;
}

export type IDoctorsApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IDoctor[];
};



