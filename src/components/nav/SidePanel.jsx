import React from "react";
import ProfileCard from "../profile/profile-card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PeopleIcon from "@material-ui/icons/People";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from "@material-ui/icons/Home";
import StorageIcon from "@material-ui/icons/Storage";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import {fade, makeStyles} from "@material-ui/core/styles";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { useTranslation } from 'react-i18next';
import StarIcon from "@material-ui/icons/Star";
import CardActionArea from "@material-ui/core/CardActionArea";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(2)
        }
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {}
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    grow: {
        flexGrow: 1
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
}));

export default function SidePanel() {
    const { t } = useTranslation();
    const [state, setState] = React.useState({
        left: false,
    });
    const classes = useStyles();

    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({...state, [side]: open});
    };

    const Sidepanel = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <ProfileCard/>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        {t('sidepanel.1')}
                    </ListSubheader>
                }>

                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.2')}/>
                </ListItem>

                <ListItem button component={Link} to="/Notification">
                    <ListItemIcon>
                        <NotificationsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.3')}/>
                </ListItem>

                <ListItem button component={Link} to="/FriendAll">
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.4')}/>
                </ListItem>

                <ListItem button component={Link} to="/chat">
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.5')}/>
                </ListItem>

                <ListItem button component={Link} to="/prof">
                    <ListItemIcon>
                        <StorageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.6')}/>
                </ListItem>

                <ListItem button component={Link} to="/LoanToFriends">
                    <ListItemIcon>
                        <QueryBuilderIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.7')}/>
                </ListItem>

                <ListItem button component={Link} to="/LoanAccepted">
                    <ListItemIcon>
                        <ShoppingBasketIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.8')}/>
                </ListItem>
                <ListItem button component = {Link} to={"/rating/1"}>
                    <ListItemIcon>
                        <StarIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.9')}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button component={Link} to="/editprof">
                    <ListItemIcon>
                        <EditIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.10')}/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ContactSupportIcon/>
                    </ListItemIcon>
                    <ListItemText primary={t('sidepanel.11')}/>
                </ListItem>

            </List>
        </div>
    );

    return (
        <Sidepanel/>
    )

}