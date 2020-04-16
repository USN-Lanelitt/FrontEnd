import React, {useState} from 'react';
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
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 4)
    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },

}));


const AssetContainer = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [categoryId, setCategoriId] = useState([]);


    return (
        <div>
            <div className={classes.heroContent}>
                <Container>
                    <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {categoryId}
                        Kategorinavn
                    </Typography>
                </Container>
            </div>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid}>

                   <Box m={5}>
                    <hr/>
                   </Box>
                    <Grid >
                        <AssetsList categoryId={id}/>
                    </Grid>
                </Container>
            </main>
</div>

    );
};

export default AssetContainer;