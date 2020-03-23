import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FriendCard from "./friend-card";
import data from "./data";

const FriendList = () => {
        return (
            <Grid container spacing={2} alignItems={"left"}>
                <Container maxWidth="sm">
                    <List>
                        {
                            data.map(item => (
                                    <ListItem>
                                        <FriendCard
                                            firstname={item.firstname}
                                            middlename={item.middlename}
                                            lastname={item.lastname}
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