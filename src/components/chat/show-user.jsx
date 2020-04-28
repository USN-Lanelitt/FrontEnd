/*Nicole har jobbet med denne siden*/

import React, {useEffect, useState} from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));

const ShowUser =  ({userId2}) =>  {
    const classes = useStyles();
    const [user, setUser] = useState('');

    useEffect(() => {
        console.log("showUser", sessionStorage.getItem('userId'));
        axios.get('/getUser/'+ userId2)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setUser(response.data);
                }
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <>
        {user &&
            <Box display="flex" flexDirection="row" alignItems="center">
                <Box mr={1}>
                    <Avatar alt="img" src={user.profileImage} className={classes.smallAvatar}/>
                </Box>
                <Box fontSize={15} fontWeight="fontWeightBold" m={1}>
                    {user.firstName} {user.middleName} {user.lastName}
                </Box>
            </Box>
        }
        </>
    );
};
export default ShowUser;
