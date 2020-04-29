import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/home/Copyright';
import AmountTable from "../../components/admin/amount-table";
import AdminTable from "../../components/admin/admin-table";
import ReportList from "../../components/admin/report-list";
import LogDropdown from "../../components/admin/log-dropdown";
import {useTranslation} from "react-i18next";
import LogList from "../../components/admin/log-list";
import ReportTitle from "../../components/admin/report-title";


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
           {/*             <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {t('admin.2')}
                        </Typography>*/}
                    </Container>
                </div>

                <Container item m={8}>
                   {/* <h3>{t('admin.3')}</h3>
                    <hr/>*/}
                    <Grid>
                        <AmountTable/>
                        <AdminTable/>
                    </Grid>

                    {/*<h3>{t('admin.4')}</h3>
                    <hr/>*/}
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