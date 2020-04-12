import React from 'react';
import AssetsList from "./assets-list";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import HomeMenu from "../../components/home/home-menu";
import Copyright from "../../components/home/Copyright";
import {useParams} from "react-router";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(15, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const AssetContainer = () => {
    const classes = useStyles();
    const {id} = useParams();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid}>

                    <h3>Placeholder</h3>
                    <hr/>
                    <Grid container spacing={12}>
                        <AssetsList categoryId={id}/>
                    </Grid>
                </Container>
            </main>

        </React.Fragment>
    );
};

export default AssetContainer;