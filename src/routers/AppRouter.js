import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from '../components/ForgotPassword';
import Home from '../components/Homepage';
import Login from '../components/LoginPage';
import Signup from '../components/SignupPage';
import UpdateProfile from '../components/UpdateProfile';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => (
    <Router>
        <AuthProvider>
            <Switch>
                <PrivateRoute path="/" component={Home} exact />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </AuthProvider>
    </Router>
);

export default AppRouter;