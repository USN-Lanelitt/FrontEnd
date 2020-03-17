import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import MyAssetsList from "../../components/profile/my-assets-list";
import AssetContainer from "../Assets/asset-container";
import TextField from "@material-ui/core/TextField";
import HomeMenu from "../../components/home/home-menu";
import Copyright from "../../components/home/Copyright";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    icons: {
        marginRight: theme.spacing(2),
      },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
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

export default function Profile() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <hr/>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Mine Eiendeler
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Eiendel
                        </Typography>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md">
                    <div>
                        <TextField
                            id="outlined-full-width"
                            label="Søk i din eiendel liste"
                            style={{ margin: 8 }}
                            placeholder="Høyttaler"
                            helperText="Skriv navnet til det du leter etter!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                    <h3>Eiendel Kategori</h3>
                    <hr/>
                    <Grid container spacing={12}>
                        <AssetContainer/>
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Lånelitt
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    ProgTeam Lånelitt
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
}
