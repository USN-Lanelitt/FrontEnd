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
import {createMuiTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {MuiThemeProvider} from "@material-ui/core";


function App(){

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#198679',
            },
            secondary: red
        },
    });
    return (
        <MuiThemeProvider theme={theme}>
        <AuthProvider>
            <Router>
            <div className="App">
                <MUICookieConsent
                    cookieName="mySiteCookieConsent"
                    componentType="Snackbar" // default value is Snackbar
                    message="LåneLitt bruker informasjonskapsler (cookies) på sine nettsider til bl.a.
                    stastikk og skjemaoppdateriger. Hvis du godtar dette, kan du fortsette å bruke våre nettsider som vanlig."

                />
                <Scaffold/>
            </div>
        </Router>
        </AuthProvider>
        </MuiThemeProvider>
    );
}

export default App;
