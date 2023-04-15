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
import MyCard from './routes/pages/UserProfile/MyCard';
import Profile from './routes/pages/UserProfile/Profile';
import LayoutProfile from './components/Layouts/LayoutProfile';
import { CssBaseline } from '@mui/material';
import ResetPassword from './routes/pages/ResetPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME.PATH} element={<FooterLayout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.HOME.PATH} element={<HeaderLayout />}>
        <Route path={ROUTES.REGISTRATION.PATH} element={<Registration />} />
        <Route element={<LayoutProfile />}>
          <Route path={ROUTES.PROFILE.PATH} element={<Profile />} />
          <Route path={ROUTES.VISITS.PATH} element={<Visits />} />
          <Route path={ROUTES.CARD.PATH} element={<MyCard />} />
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
