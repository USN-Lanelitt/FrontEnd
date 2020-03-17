import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Register/SignUp";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Scaffold from "./scaffold";

function App(){
    return (
        <AuthProvider>
            <Router>
            <div className="App">
                <Nav />
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/admin" exact component={Admin} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/prof" component={Profile} />
                <PrivateRoute path="/editprof" component={EditProfile} />
                <Scaffold/>
            </div>
        </Router>
        </AuthProvider>
    );
}

export default App;


