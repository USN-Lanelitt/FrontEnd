import React from 'react';
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AssetsList from "../../feature/Assets/assets-list";
import {makeStyles} from "@material-ui/core/styles";

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

const FriendAssets = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid>
                <CssBaseline/>

                <main>
                    <Container className={classes.cardGrid}>
                        <h3>Lån</h3>
                        <hr/>
                        <Grid container spacing={12}>
                            <AssetsList />
                        </Grid>


                    </Container>
                </main>
            </Grid>
        </React.Fragment>
    );
};

export default FriendAssets;