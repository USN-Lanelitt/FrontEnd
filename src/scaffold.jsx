import React from 'react';
import {Route} from "react-router-dom";
import FriendList from "./components/friend/friend-list";
import FriendRequest from "./components/friend/friend-request";
import FriendAll from "./Pages/Friend/friend-all";
import CategoryCard from "./components/home/category-card";
import AssetContainer from "./Pages/Assets/asset-container";
import MyAssetsList from "./components/profile/my-assets-list";
import NewAsset from "./components/profile/new-asset";
import PrivateRoute from "./PrivateRoute";


const Scaffold = () => {
    return (
        <main>
            <Route path="/friendList" exact component={FriendList} />
            <Route path="/friendReques" exact component={FriendRequest} />
            <PrivateRoute path="/friendAll" exact component={FriendAll} />
            <Route exact path="/category" componenet={CategoryCard}/>
            <Route exact path="/assets" component={AssetContainer}/>
            <Route exact path="/my/assets" component={MyAssetsList}/>
            <Route exact path="/new/asset" component={NewAsset}/>
        </main>
    );
};

export default Scaffold;