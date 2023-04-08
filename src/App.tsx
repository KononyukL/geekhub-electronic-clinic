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
import UserProfile from './routes/pages/UserProfile';
import Doctor from "./routes/pages/Doctor";
import FooterLayout from './components/Layouts/FooterLayout';
import HeaderLayout from './components/Layouts/HeaderLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME.PATH} element={<FooterLayout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.HOME.PATH} element={<HeaderLayout />}>
        <Route path={ROUTES.REGISTRATION.PATH} element={<Registration />} />
        <Route path={ROUTES.PROFILE.PATH} element={<UserProfile />} />
        <Route path={ROUTES.LOGIN.PATH} element={<Login />} />
        <Route path={ROUTES.DOCTORS.PATH} element={<Doctors />} />
        <Route path={ROUTES.DOCTOR.PATH} element={<Doctor />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
