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
  PROFILE_USER: {
    PATH: '/user-profile'
  },
  VISITS: {
    PATH: '/visits'
  },
  PROFILE_DOCTOR: {
    PATH: '/doctor-profile'
  },
  PATIENTS_DOCTOR: {
    PATH: '/patients-doctor',
    SUB_PATH: '/patients-doctor/:cardId/:appointmentId/:userId'
  },
  CARD: {
    PATH: '/card'
  },
  FEEDBACK: {
    PATH: '/feedback/:doctorId/:appointment'
  },
  TERMS: {
    PATH: '/terms',
    SUB_PATH: '/terms/:termType'
  },
  REGISTRATION_CONFIRM: {
    PATH: '/register-user-confirm/:userId/:userToken'
  },
  RESET_PASSWORD_CONFIRM: {
    PATH: '/password-reset-confirm/:userId/:userToken'
  },
  ERROR: {
    PATH: '*'
  }
};
export default ROUTES;
