import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/dashboard/dashboard';
import Login from './page/login/login';
import MyDevice from './page/myDevice/myDevice';
import Register from './page/register/register';

import Trigger from './page/trigger/trigger';
import EventCenter from './page/eventCenter/eventCenter';
import Me from './page/me/me';
import SharingCenter from './page/sharingCenter/sharingCenter';
import ResetPass from './page/resetPass/resetPass';
import VerifyEmail from './page/register/verifyEmail';
import Finished from './page/register/finished';
import ForgotPassword from './page/register/forgotPassword';
import ResetPassword from './page/register/resetPassword';
import Report from './page/reports/report';
import AddTrigger from './page/trigger/add';
import Reporter from './page/reports/report';
import Add from './page/reports/add';
import AddReports from './page/reports/add';
import MapGoogle from './page/map/map';

const Routers = () => {
    return (
        <Routes>
            {/* login, register, forgot Password */}
            <Route exact path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/resetPass' element={<ResetPass />} />
            <Route path='/verifyEmail' element={<VerifyEmail />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
            <Route path='/finish' element={<Finished />} />
            {/* login, register, forgot Password */}
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/myDevice' element={<MyDevice />} />
            <Route path='/map' element={<MapGoogle />} />
            <Route path='/trigger' element={<Trigger />} />
            <Route exact path='/trigger/add' element={<AddTrigger />} />
            <Route path='/reports' element={<Reporter />} />
            <Route path='/reports/add' element={<AddReports />} />
            <Route path='/eventCenter' element={<EventCenter />} />
            <Route path='/shareCenter' element={<SharingCenter />} />
            <Route path='/me' element={<Me />} />
        </Routes>
    );
}

export default Routers;
