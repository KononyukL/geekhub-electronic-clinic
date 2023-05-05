import {IDoctorsState} from "./interfaces";

export const initialState: IDoctorsState = {
  doctors: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  doctor: {
    id: 0,
    email: '',
    profile_image: '',
    last_name: '',
    first_name: '',
    patronim_name: '',
    specialization: '',
    price: 0,
    category: '',
    experience: '',
    info: '',
    education: [],
    courses: [],
    procedures_performed: [],
    rating: 0
  },
  specializations: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  feedbacks: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  isLoading: false,
  error: ''
};