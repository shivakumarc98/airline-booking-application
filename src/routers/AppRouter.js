import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from '../components/Booking';
import BookingSummary from '../components/BookingSummary';
import ForgotPassword from '../components/ForgotPassword';
import Home from '../components/Homepage';
import Login from '../components/LoginPage';
import Payment from '../components/Payment';
import Signup from '../components/SignupPage';
import UpdateProfile from '../components/UpdateProfile';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => (
    <Router>
        <AuthProvider>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/" component={Home} exact />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/booking" component={Booking} />
                <PrivateRoute path="/booking-summary" component={BookingSummary} />
                <PrivateRoute path="/payment" component={Payment} />
            </Switch>
        </AuthProvider>
    </Router>
);

export default AppRouter;