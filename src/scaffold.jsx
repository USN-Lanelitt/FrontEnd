import React from 'react';
import {Route} from "react-router-dom";
import FriendList from "./components/friend/friend-list";
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
import Notification from "./feature/Notification/notification";
import FriendRequestCard from "./components/friend/friend-requestCard";
import SearchFriends from "./components/search/search-friends";
import NotificationList from "./components/notification/notificationList";
import FriendProfile from "./components/friend/friend-profile";
import LoanCard from "./components/loan/loan-card";
import Chat from "./feature/Chat/Chat";
import AssetSite from "./feature/Assets/asset-site";
import FriendProfileCard from "./components/friend/friend-profile-card";
import LoanToFriends from "./components/loan/loan-to-friends";
import LoanRequestSend from "./components/loan/loan-request-send";
import LoanAccepted from "./components/loan/loan-accepted";
import Ratings from "./feature/rating/ratings";

{/*sessionStorage.setItem('API_URL', 'https://api.lanelitt.no');*/}
sessionStorage.setItem('API_URL', 'http://127.0.0.1:8000');


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
            <Box p={extraSmallScreen ? 1 : 3} mt={12}>
                <Route exact path="/friendReques" component={FriendRequest}/>
                <Route path="/friendAll" exact component={FriendAll}/>
                <Route exact path="/friendRequestCard" component={FriendRequestCard}/>
                <Route exact path="/searchfriends" component={SearchFriends}/>
                <Route exact path="/category" componenet={CategoryCard}/>
                <Route path="/assets/:id" component={AssetContainer}/>
                <Route exact path="/my/assets" component={MyAssetsList}/>
                <Route exact path="/new/asset" component={NewAsset}/>
                <Route exact path="/notification" component={Notification}/>
                <Route exact path="/notificationList" component={NotificationList}/>
                <Route path="/friendprofile/:id" exact component={FriendProfile}/>
                <Route exact path="/loanCard" component={LoanCard}/>
                <Route exact path="/assetSite" component={AssetSite}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/friendProfileCard" component={FriendProfileCard}/>
                <Route exact path="/loantofriends" component={LoanToFriends}/>
                <Route exact path="/loanrequestsend" component={LoanRequestSend}/>
                <Route exact path="/loanAccepted" component={LoanAccepted}/>
                <Route exact path="/ratings" component={Ratings}/>

            </Box>
        </main>
    );
};

export default Scaffold;