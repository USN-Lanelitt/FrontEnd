import React from 'react';
import {Route} from "react-router-dom";
import Home from "../feature/Home/Home";
import PrivateRoute from "../PrivateRoute";
import Admin from "../feature/Admin/Admin";
import Login from "../feature/Login/Login";
import SignUp from "../feature/Register/SignUp";
import Profile from "../feature/Profile/Profile";
import EditProfile from "../feature/Profile/EditProfile";
import FriendRequest from "./friend/friend-request";
import FriendAll from "../feature/Friend/friend-all";
import FriendRequestCard from "./friend/friend-requestCard";
import SearchFriends from "./search/search-friends";
import CategoryCard from "./profile/category-card";
import AssetContainer from "../feature/Assets/asset-container";
import MyAssetsList from "./profile/my-assets-list";
import NewAsset from "./profile/new-asset";
import Notification from "../feature/Notification/notification";
import NotificationList from "./notification/notificationList";
import FriendProfile from "./friend/friend-profile";
import LoanCard from "./loan/loan-card";
import AssetSite from "../feature/Assets/asset-site";
import Chat from "../feature/Chat/Chat";
import FriendProfileCard from "./friend/friend-profile-card";
import LoanToFriends from "./loan/loan-to-friends";
import LoanRequestSend from "./loan/loan-request-send";
import LoanAccepted from "./loan/loan-accepted";
import Ratings from "../feature/rating/ratings";
import AssetOwnerInfo from "../feature/Assets/asset-owner-info";

const Routes = props => {
    return (
        <>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/admin" exact component={Admin}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/prof" component={Profile}/>
            <PrivateRoute path="/editprof" component={EditProfile}/>


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
            <Route path="/assetSite/:id" component={AssetSite}/>
            <Route exact path="/chat" component={Chat}/>
            <Route exact path="/friendProfileCard" component={FriendProfileCard}/>
            <Route exact path="/loantofriends" component={LoanToFriends}/>
            <Route path="/loanrequestsend" component={LoanRequestSend}/>
            <Route exact path="/loanAccepted" component={LoanAccepted}/>
            <Route path="/rating/:pageNr" component={Ratings}/>
            <Route exact path="/owner/info" component={AssetOwnerInfo}/>

        </>
    );
};

Routes.propTypes = {};

export default Routes;
