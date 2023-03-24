import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Doctors from './pages/Doctors';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="doctors" element={<Doctors />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
