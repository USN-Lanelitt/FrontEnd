import React, {useState} from 'react';
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
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

/*Kortet til profil, laget av Mirsa*/


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


const FriendProfileCard = ({user, getChat, deleteFriend, sendRequest}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    const styles = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [buttonText, setButtonText] = useState(null);
    const [done, setDone] = useState(false);
    const [value, setValue] = useState(null);
    const [disabled, setDisabled] = useState(false);

    if(done === false && user){
        console.log("check", sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/check/' + user.id)
            .then(result => {
                console.log(result.data);
                if (result.data === 1) {
                    setValue(1)

                    setButtonText( 'friend-profile.1');

                } else {
                    setButtonText('friend-profile.3');
                }
            })
            .catch(e => console.log(e));
       setDone(true);
    }

    const handleOnClick = () => {
        setDisabled(true);
        if(value === 1)
            deleteFriend()
        else
            sendRequest()
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
                                src={"profileImage/"+ user.profileImage}
                            />
                        </StyledBadge>
                    </IconButton>
                    <Box display="flex" flexDirection="column" p={2}>
                        <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                            {user && user.firstName} {user && user.middleName} {user && user.lastName}
                        </Typography>

                        <Typography variant="subtitle1" component="h2" display={"inline"}>
                            {user && user.nickname}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box mt={4}>
                {user &&
                <Box display="flex" flexDirection="row">
                    <Box m={2}>
                        <Button onClick={handleOnClick} disabled={disabled} className={classes.button} type="submit" variant="contained"
                                color="primary">
                            {t(buttonText)}
                        </Button>
                    </Box>
                    <Box m={2}>
                        <Button onClick={getChat} component={Link} to={"/chat/" + user.id} type="submit"
                                variant="contained" color="primary">
                            {t('friend-profile.2')}
                        </Button>
                    </Box>
                </Box>
                }
            </Box>
        </div>
    );
};

export default FriendProfileCard;
