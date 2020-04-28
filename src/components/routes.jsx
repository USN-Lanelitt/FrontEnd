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
import FriendProfileCard from "./friend/friend-profile-card";
import LoanToFriends from "./loan/loan-to-friends";
import LoanRequestSend from "./loan/loan-request-send";
import LoanAccepted from "./loan/loan-accepted";
import Ratings from "../feature/rating/ratings";
import AssetOwnerInfo from "../feature/Assets/asset-owner-info";
import AssetSearch from "../feature/Assets/asset-search";
import Chat from "../feature/Chat/chat";
import ChatWinMobile from "./chat/chat-win-mobile";
import ChatSelectedDesktop from "./chat/chat-selected-desktop";



const Routes = props => {
    return (
        <>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/admin" exact component={Admin}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/prof" component={Profile}/>
            <PrivateRoute path="/editprof" component={EditProfile}/>
            <PrivateRoute exact path="/friendReques" component={FriendRequest}/>
            <PrivateRoute path="/friendAll" exact component={FriendAll}/>
            <PrivateRoute exact path="/friendRequestCard" component={FriendRequestCard}/>
            <PrivateRoute exact path="/searchfriends" component={SearchFriends}/>
            <Route exact path="/category" componenet={CategoryCard}/>
            <Route path="/assets/:id" component={AssetContainer}/>
            <Route path="/assetsearch/:search" component={AssetSearch}/>
            <PrivateRoute exact path="/my/assets" component={MyAssetsList}/>
            <PrivateRoute exact path="/new/asset" component={NewAsset}/>
            <PrivateRoute exact path="/notification" component={Notification}/>
            <PrivateRoute exact path="/notificationList" component={NotificationList}/>
            <PrivateRoute path="/friendprofile/:id" exact component={FriendProfile}/>
            <PrivateRoute exact path="/loanCard" component={LoanCard}/>
            <PrivateRoute path="/assetSite/:id" component={AssetSite}/>
            <PrivateRoute exact path="/chat" component={Chat}/>
            <PrivateRoute exact path="/chatSelected/:userId2" component={ChatSelectedDesktop}/>
            <PrivateRoute exact path="/chat/:userId2" component={ChatWinMobile}/>
            <PrivateRoute exact path="/friendProfileCard" component={FriendProfileCard}/>
            <PrivateRoute exact path="/loantofriends" component={LoanToFriends}/>
            <PrivateRoute path="/loanrequestsend/:id/:assetId/:assetName" component={LoanRequestSend}/>
            <PrivateRoute exact path="/loanAccepted" component={LoanAccepted}/>
            <PrivateRoute exact path="/rating/:pageNr" component={Ratings}/>
            <PrivateRoute exact path="/owner/info" component={AssetOwnerInfo}/>

        </>
    );
};

Routes.propTypes = {};

export default Routes;
