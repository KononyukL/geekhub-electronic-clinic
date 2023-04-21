import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Home from './routes/pages/Home';
import Registration from './routes/pages/Registration';
import Login from './routes/pages/Login';
import ROUTES from './routes/constants';
import Doctors from './routes/pages/Doctors';
import Doctor from './routes/pages/Doctor';
import FooterLayout from './components/Layouts/FooterLayout';
import HeaderLayout from './components/Layouts/HeaderLayout';
import Visits from './routes/pages/UserProfile/Visits';
import Profile from './routes/pages/UserProfile/Profile';
import { CssBaseline } from '@mui/material';
import ResetPassword from './routes/pages/ResetPassword';
import LayoutUserProfile from './components/Layouts/LayoutProfile/LayoutUserProfile';
import LayoutDoctorProfile from './components/Layouts/LayoutProfile/LayoutDoctorProfile';
import ProfileDoctor from './routes/pages/DoctorProfile/ProfileDoctor';
import Patient from './routes/pages/DoctorProfile/Patient';
import CardPatient from './components/view/profile/CardParient';
import MyCard from 'routes/pages/UserProfile/MyCard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME.PATH} element={<FooterLayout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.HOME.PATH} element={<HeaderLayout />}>
        <Route path={ROUTES.REGISTRATION.PATH} element={<Registration />} />
        <Route element={<LayoutUserProfile />}>
          <Route path={ROUTES.PROFILE_USER.PATH} element={<Profile />} />
          <Route path={ROUTES.VISITS.PATH} element={<Visits />} />
          <Route path={ROUTES.CARD.PATH} element={<MyCard />} />
        </Route>
        <Route element={<LayoutDoctorProfile />}>
          <Route path={ROUTES.PROFILE_DOCTOR.PATH} element={<ProfileDoctor />} />
          <Route path={ROUTES.PATIENTS_DOCTOR.PATH} element={<Patient />} />
          <Route path={ROUTES.PATIENTS_DOCTOR.SUB_PATH} element={<CardPatient />} />
        </Route>
        <Route path={ROUTES.LOGIN.PATH} element={<Login />} />
        <Route path={ROUTES.RESET_PASSWORD.PATH} element={<ResetPassword />} />
        <Route path={ROUTES.DOCTORS.PATH} element={<Doctors />} />
        <Route path={ROUTES.DOCTOR.PATH} element={<Doctor />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
