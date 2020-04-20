import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import cx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },

    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    button: {
        paddingRight: '40px',
        paddingLeft: '40px',
    }
}));

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


const FriendProfileCard = ({userId2, firstname, middlename, lastname, imageUrl}) => {
    const classes = useStyles();
    const styles = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [friendStatus, setFriendStatus] = useState(0);
    const [buttonText, setButtonText] = useState([]);

    useEffect(() => {
        console.log("getUsers", sessionStorage.getItem('userId'));
        axios.get('/user/'+userId+'/'+ userId2)
            .then(result => {
                console.log(result.data);
                setFriendStatus(result.data);
            })
            .catch(e => console.log(e));
        if (friendStatus === 1) {
            deleteFriend();
            console.log('deleteFriend');
        } else
            sendFriendRequest();
            console.log('sendFriendRequest');
    },[]);

    const deleteFriend = () => {
        setButtonText('Slett venn');
    }

    const sendFriendRequest = () => {
        setButtonText('Legg til');
    }

    return (
        <div>
            <Card className={cx(styles.card)}>
                <CardContent>
                    <IconButton>
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                            variant="dot"
                        >
                            <Avatar
                                className={styles.avatar}
                                src={"imageUrl/" + sessionStorage.getItem('profileImage')}
                            />
                        </StyledBadge>
                    </IconButton>
                    <Box display="flex" flexDirection="column" p={2}>
                        <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                            {firstname} {middlename} {lastname}
                        </Typography>

                        <Typography variant="subtitle1" component="h2" display={"inline"}>
                            Nickname
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box mt={4}>
                <Box display="flex" flexDirection="row">
                    <Box m={2}>
                    <Button className={classes.button} type="submit"  variant="contained" color="primary">
                        {buttonText}
                    </Button>
                    </Box>
                    <Box m={2}>
                    <Button type="submit"  variant="contained" color="primary">
                        Send Melding
                    </Button>
                    </Box>
                </Box>
            </Box>
        </div>

    );
};

export default FriendProfileCard;
