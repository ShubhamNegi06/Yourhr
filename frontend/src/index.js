import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter,} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './components/AuthContext';
import Signup from './pages/Signup';
import  Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
import ContactUs from  './pages/ContactUs';
import  AboutUs from './pages/AboutUs';
import ThankYou from './pages/ThankYou';
import ApplyNow from './pages/ApplyNow';
import JobSearch from './pages/JobSearch';

const Applayout =  () => {
  return (
    <>
     <Navbar />
     <Outlet />
    <Footer />
    </>
);
};
const Approuter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
    {path: "/",  element: <Home />},
    {path: "/signup",  element: <Signup />},
    {path: "/login",  element: <Login />},
    {path: "/contactus",  element: <ContactUs />},
    {path: "/about",  element: <AboutUs />},
    {path: "/ThankYou",   element: <ThankYou />},
    {path: "/applynow", element: <ApplyNow />},
    {path: "/jobsearch", element: <JobSearch />},
]},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
<RouterProvider router={Approuter} />
</AuthProvider>
);

