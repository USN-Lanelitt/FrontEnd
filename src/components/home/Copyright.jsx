import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export default function Copyright() {
    return (
        // ------ Farhad ------
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Lånelitt
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        // ------ Farhad ------
    )
}