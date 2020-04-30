/*Nicole har jobbet med denne siden*/

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AmountTable from "../../components/admin/amount-table";
import AdminTable from "../../components/admin/admin-table";
import ReportList from "../../components/admin/report-list";
import LogDropdown from "../../components/admin/log-dropdown";

import LogList from "../../components/admin/log-list";



const useStyles = makeStyles(theme => ({
    reportBox: {
        padding:"100px",
    },
}));


export default function Admin() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Administrator
                        </Typography>

                    </Container>
                </div>

                <Container item m={8}>

                    <Grid>
                        <AmountTable/>
                        <AdminTable/>
                    </Grid>


                    <Grid>
                        <ReportList/>
                    </Grid>

                    <Grid
                        style={{marginTop: 50}}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        <LogDropdown/>
                        <LogList/>
                    </Grid>
                </Container>
        </React.Fragment>
    );
}