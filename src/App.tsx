import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import Registration from "./pages/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="registration" element={<Registration />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
