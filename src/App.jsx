import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./feature/Home/Home";
import Admin from "./feature/Admin/Admin";
import Login from "./feature/Login/Login";
import SignUp from "./feature/Register/SignUp";
import Profile from "./feature/Profile/Profile";
import EditProfile from "./feature/Profile/EditProfile";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Scaffold from "./scaffold";
import MUICookieConsent from "material-ui-cookie-consent";

import { useTranslation } from 'react-i18next';


function App(){
    const API_URL = "api.lanelitt.no";
    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <AuthProvider>
            <Router>
            <div className="App">
                <nav style={{width:'100%', padding:'2 rem 0', backgroundColor: 'gray' }}>
                    <button onClick={()=>handleClick('no')}>Norsk</button>
                    <button onClick={()=>handleClick('en')}>English</button>
                </nav>
                <MUICookieConsent
                    cookieName="mySiteCookieConsent"
                    componentType="Snackbar" // default value is Snackbar
                    message="LåneLitt bruker informasjonskapsler (cookies) på sine nettsider til bl.a.
                    stastikk og skjemaoppdateriger. Hvis du godtar dette, kan du fortsette å bruke våre nettsider som vanlig."

                />
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