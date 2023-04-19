export interface IGetProfileData {
  id: string | number;
}

export interface IProfile {
  first_name: string;
  last_name: string;
  patronim_name: string;
  birth_date: string;
  sex: string;
  email: string;
  phone_num: string;
  address_city: string;
  address_street: string;
  address_house: string;
  address_appartment: string;
}
