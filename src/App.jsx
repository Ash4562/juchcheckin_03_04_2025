import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AadharVerify from './public/pages/AadharVerify';
import Wallet from './public/pages/Wallet';
import ProtectedRoute from './public/pages/ProtectedRoute';
import ForgotPassword from './public/pages/ForgotPassword';
import { Toaster } from 'react-hot-toast';
import About from './public/pages/About';
import VerificationCards from './public/pages/NumberOfUsers';
import DrivingLicenseForm from './public/pages/DrivingLicenseUserDetails';
import DrivingLicenseVerify from './public/pages/DrivingLicniesVerify';
import VotingIdVerifying from './public/pages/VotingIdVerifying';
import VoterIdForm from './public/pages/VotingIdUserDetail';
import PassportVerify from './public/pages/Passportverify';
import PassportVerifyUser from './public/pages/PassportVerifyUser';
import UserDrivngLicencesDetals from './public/pages/UserDrivngLicencesDetals';
import PassportUserDetails from './public/pages/PassportUserDetails';
import UserVoterDetails from './public/pages/UserVoterDetails';

// Lazy-loaded components
const PublicLayout = lazy(() => import('./public/PublicLayout'));
const Login = lazy(() => import('./public/pages/Login'));
const Home = lazy(() => import('./public/component/Home'));
const DashboardHome = lazy(() => import('./public/pages/DashboardHome'));
const Profile = lazy(() => import('./public/pages/Profile'));
const UserDetails = lazy(() => import('./public/pages/UserDetails'));
const Register = lazy(() => import('./public/pages/Register'));
const DashboardFirst = lazy(() => import('./public/pages/DashboardFirst'));

const App = () => {
  return (
    <HashRouter>
      <Toaster position="top-right" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPass" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<VerificationCards />} />
            <Route path="AadharVerify" element={<AadharVerify />} />
            <Route path="DashboardHome" element={<DashboardHome />} />
            <Route path="/driving" element={<DrivingLicenseVerify />} />
            <Route path="/DLUserDetails" element={<DrivingLicenseForm />} />
            <Route path="/VotingIdVerifying" element={<VotingIdVerifying />} />
            <Route path="/VotingIdUserDetail" element={<VoterIdForm />} />
            <Route path="/Passportverify" element={<PassportVerify />} />
            <Route path="/PassportVerifyUser" element={<PassportVerifyUser />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                <Routes>
                  <Route path="DashboardHome" element={<DashboardHome />} />  


                  <Route path="profile" element={<Profile />} />
                  <Route path="userdetails" element={<UserDetails />} />
                  <Route path="PassportUserDetails" element={<PassportUserDetails />} />
                  <Route path="UserDrivngLicencesDetals" element={<UserDrivngLicencesDetals />} />
                  <Route path="UserVoterDetails" element={<UserVoterDetails />} />
                  <Route path="DashboardFirst" element={<DashboardFirst />} />
                  <Route path="wallet" element={<Wallet />} />
                </Routes>
                  </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
