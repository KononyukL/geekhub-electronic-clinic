import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import RegistrationForm from "./pages/RegistrationForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="registration" element={<RegistrationForm />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
