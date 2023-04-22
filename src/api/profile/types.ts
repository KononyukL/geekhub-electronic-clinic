export interface IGetProfileData {
  id: string | number;
}

export interface IProfile {
  first_name: string;
  card_id: string;
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

export interface IEditPasswordFormData {
  old_password: string;
  password: string;
  password2: string;
}

export interface IEditPasswordData {
  formData: IEditPasswordFormData;
  id: string | number;
}

export interface IEditProfileFormData {
  first_name?: string;
  last_name?: string;
  patronim_name?: string;
  birth_date?: string;
  phone_num?: string;
  sex?: string;
  email?: string;
  address_city?: string;
  address_street?: string;
  address_house?: string;
  address_appartment?: string;
}

export interface IEditProfileData {
  formData: IEditProfileFormData;
  id: string | number;
}
