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


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    reportBox: {
        padding:"100px",
    },
}));


export default function Admin() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {t('admin.1')}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {t('admin.2')}
                        </Typography>
                    </Container>
                </div>

                <Container className={classes.cardGrid} >
                    <h3>{t('admin.3')}</h3>
                    <hr/>
                    <Grid item xs={12}>
                        <AmountTable/>
                        <AdminTable/>
                    </Grid>

                    <Grid className={classes.reportBox} item xs={12}>
                    <h3>{t('admin.4')}</h3>
                    <hr/>
                    <ReportList/>
                    </Grid>
                    <Grid>
                        <LogDropdown/>
                        <LogList/>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}