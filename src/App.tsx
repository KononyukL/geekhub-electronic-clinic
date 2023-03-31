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
import Layout from './routes/Layout';
import Doctors from './routes/pages/Doctors';
import Doctor from "./routes/pages/Doctor";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME.PATH} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.REGISTRATION.PATH} element={<Registration />} />
      <Route path={ROUTES.LOGIN.PATH} element={<Login />} />
      <Route path={ROUTES.DOCTORS.PATH} element={<Doctors />} />
      <Route path={ROUTES.DOCTOR.PATH} element={<Doctor />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
