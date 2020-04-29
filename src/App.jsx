import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "./Auth";
import Scaffold from "./scaffold";
import MUICookieConsent from "material-ui-cookie-consent";
import {createMuiTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {MuiThemeProvider} from "@material-ui/core";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";


function App() {

    let theme = createMuiTheme({
        palette: {
            primary: {
                main: '#198679',
            },
            secondary: red
        },
    });
    theme = responsiveFontSizes(theme);

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
