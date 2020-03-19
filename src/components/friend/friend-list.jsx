import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import FriendCard from "./friend-card";
import axios from "axios";
import app from "../../fire";

const FriendList = () => {

    const user = app.auth().currentUser;
    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);


    useEffect(() => {
        console.log("hello from freind list ", id, sessionStorage.getItem('userId'));
        axios.get('/getAllFriends', {
            headers: {
                "x-userid": id,
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }, [setData, id]);


    return (
        <Grid container spacing={2} alignItems={"left"}>
            <Container maxWidth="sm">
                <List>
                    {
                        data.map((item, i) => (
                                <ListItem key={i}>
                                    <FriendCard
                                        firstname={item['user2'].firstName}
                                        middlename={item.middlename}
                                        lastname={item['user2'].lastName}
                                        imageUrl={item.imageUrl}
                                    />
                                </ListItem>
                            )
                        )
                    }

                </List>

            </Container>
        </Grid>
    );
};
export default FriendList;