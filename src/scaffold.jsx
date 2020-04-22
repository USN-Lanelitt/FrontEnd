import React from 'react';
import {Route} from "react-router-dom";
import FriendRequest from "./components/friend/friend-request";
import FriendAll from "./feature/Friend/friend-all";
import CategoryCard from "./components/profile/category-card";
import AssetContainer from "./feature/Assets/asset-container";
import MyAssetsList from "./components/profile/my-assets-list";
import NewAsset from "./components/profile/new-asset";
import PrivateRoute from "./PrivateRoute";
import Box from "@material-ui/core/Box";
import {useMediaQuery} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import useTheme from "@material-ui/core/styles/useTheme";
import Routes from "./components/routes";
import Nav from "./components/nav/Nav";
  
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        display: "inherit",
    },
}));


const Scaffold = () => {
    const classes = useStyles();
    const theme = useTheme();
    const extraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <main>
            <Nav />
            <Box p={extraSmallScreen ? 1 : 3}>
                <Routes/>
            </Box>
        </main>
    );
};

export default Scaffold;
