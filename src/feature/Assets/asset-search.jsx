import React, {useState} from 'react';
import AssetsList from "./assets-search-list";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import HomeMenu from "../../components/home/home-menu";
import Copyright from "../../components/home/Copyright";
import {useParams} from "react-router";
import Box from "@material-ui/core/Box";
import AssetSearchTextfield from "../../components/home/AssetSearchTextfield";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 4)
    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },

}));

const AssetSearch = () => {
    const classes = useStyles();
    const {search} = useParams();
    const [searchTherm, setSearchTherm] = useState([]);

    return (
        <div>
            <div className={classes.heroContent}>
                <Container>
                    <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {searchTherm}
                        Søk
                    </Typography>
                </Container>
            </div>
            <CssBaseline />
            <main>

                <Container>
                    <AssetSearchTextfield/>
                </Container>
                <Container className={classes.cardGrid}>

                   <Box m={5}>
                    <hr/>
                   </Box>
                    <Grid >
                        <AssetsList searchTherm={search}/>
                    </Grid>
                </Container>
            </main>
        </div>

    );
};

export default AssetSearch;