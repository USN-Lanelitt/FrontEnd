import React from 'react';
import Card from "@material-ui/core/Card";
import cx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import {useFadedShadowStyles} from "@mui-treasury/styles/shadow/faded";
import {useGutterBorderedGridStyles} from "@mui-treasury/styles/grid/gutterBordered";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,

    },
    subheader: {
        fontSize: 14,
        color: grey,
        marginBottom: '0.875em',
    },
    statLabel: {
        fontSize: 12,
        color: grey,
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}));

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',

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


const FriendProfileCard = (id,firstname, middlename, lastname, imageUrl,) => {

    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
    });

    return (
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardContent>
                <IconButton>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                        variant="dot"
                    >
                        <Avatar
                            className={styles.avatar}
                            src={"profileimages/"+sessionStorage.getItem('profileImage')}
                        />
                    </StyledBadge>
                </IconButton>
                <h3 className={styles.heading}>Maria Monsen</h3>
            </CardContent>
            <Divider light/>
            <Box display={"flex"}>
                <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={styles.statValue}>{"Bruker ID: " + id}</p>
                </Box>
            </Box>
        </Card>
    );
};

export default FriendProfileCard;