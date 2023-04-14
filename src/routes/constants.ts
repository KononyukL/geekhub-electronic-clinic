const ROUTES = {
  HOME: {
    PATH: '/',
    HASH_PATH: {
      ABOUT_US: '/#about-us',
      CONTACTS: '/#contacts',
      QUESTIONS: '/#questions '
    }
  },
  REGISTRATION: {
    PATH: '/registration'
  },
  LOGIN: {
    PATH: '/login'
  },
  RESET_PASSWORD: {
    PATH: '/reset-password'
  },
  DOCTORS: {
    PATH: '/doctors'
  },
  DOCTOR: {
    PATH: '/doctors/:doctorId'
  },
  PROFILE: {
    PATH: '/profile'
  }
};

export default ROUTES;
