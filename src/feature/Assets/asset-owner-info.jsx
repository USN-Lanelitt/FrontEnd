/**
 * Linda Loftsgarden
 */

import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";


const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 256,
        maxWidth: 256,
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


const AssetOwnerInfo = ({asset, children}) => {
    const styles = useStyles();

    return (
        <div>
            <Card className={styles.card} elevation="0">
                <CardActionArea component={Link} to={"/friendprofile/" + asset.users.id}>
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
                        <Box display="flex" flexDirection="column" alignItems='center' p={2}>
                            <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                                {asset && asset.users.firstName} {asset && asset.users.middleName} {asset && asset.users.lastName}
                            </Typography>

                            <Typography variant="subtitle1" component="h2" display={"inline"}>
                                {asset && asset.users.nickname}
                            </Typography>

                            {children}
                        </Box>


                    </CardContent>
                </CardActionArea>
            </Card>

        </div>

    );
};

export default AssetOwnerInfo;