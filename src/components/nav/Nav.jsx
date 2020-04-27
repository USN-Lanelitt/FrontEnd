import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Logout from "../login/logout";
import app from "../../fire";
import NotificationList from "../notification/notificationList";
import SidePanel from "./SidePanel";
import SearchFriends from "../search/search-friends";
import { useTranslation } from 'react-i18next';



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

export default function NavBar(props) {

    const { t, i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(false);
    function handleLanguageNO(lang) {
        i18n.changeLanguage(lang);
        setSelectedLang(false);
    }
    function handleLanguageEN(lang) {
        i18n.changeLanguage(lang);
        setSelectedLang(true);
    }

    useEffect(()=>{
        if (i18n.language === 'en'){
            setSelectedLang(true);
        }else{
            setSelectedLang(false);
        }
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();

    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    {/*Sjekker om bruker er innlogget eller ikke og admin eller ikke*/}
    const [loggedIn, setloggedIn] = useState(false);
    const isAdmin = (sessionStorage.getItem("usertype") === "admin");
    app.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            {( ! parseInt(sessionStorage.getItem('userId')) > 0) ? Logout() : setloggedIn(true)}
        } else {
            // No user is signed in.
            setloggedIn(false);
            setOpen(false);
        }
    });

    {/*Meny knapp iconer som blir vist hvis bruker er logget på eller av*/
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {!loggedIn ?
                <MenuItem onClick={handleMenuClose} component={Link} to="/login">Logg på</MenuItem>
                : <MenuItem onClick={() => Logout()}>Logg av</MenuItem>
            }
        </Menu>

    );

    const names = [
        'Norsk',
        'English',
    ];

    {/*Meny knapp alternativer som blir vist hvis bruker er på mobil eller hvis skjermen er liten*/}
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {loggedIn && (<div>
                <MenuItem component={Link} to="/Notification">
                    <IconButton aria-label="show new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <p>Varsler</p>
                </MenuItem>
                <MenuItem component={Link} to="/chat">
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Meldiger</p>
            </MenuItem></div>)}
            {!loggedIn ?
                    <MenuItem component={Link} to="/login">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <p>Logg på</p>
                    </MenuItem>:
                <MenuItem onClick={() => Logout()}>
                    <IconButton aria-label="show 1 new notifications" color="inherit">
                        <ExitToAppIcon/>
                    </IconButton>
                    <p>Logg ut</p>
                </MenuItem>}
        </Menu>
    );


    return (
        //------------DESKTOP / PC SKJERM NAVBAR MENY----------------
        <div className={classes.grow}>
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    {loggedIn && (<div>
                        {/*----------Meny Icon knapp som blir vist når bruker er logget inn--------------*/}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>)}
                        <Typography className={classes.title} variant="h5" noWrap component={Link} to="/" style={{textDecoration: "none", color: "white"}}>
                            Lånelitt
                        </Typography>


                        {/*----------Søke felt i Navbar Icon knapp--------------*/}
                    <SearchFriends/>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>

                        {/*----------Språk Icon i Navbar Icon knapp--------------*/}
                        {selectedLang ?
                            <IconButton aria-label="show 1 new notification" color="inherit" style={{backgroundColor: 'transparent', fontSize: 'small'}} onClick={()=>handleLanguageNO('no')}>
                                <LanguageIcon/>
                            NO
                        </IconButton> :
                            <IconButton aria-label="show 1 new notification" color="inherit" style={{backgroundColor: 'transparent', fontSize: 'small'}} onClick={()=>handleLanguageEN('en')}>
                                <LanguageIcon/>
                                EN
                        </IconButton>}

                        {loggedIn && (<div>
                            {/*----------Notification Icon knapp--------------*/}

                            <IconButton aria-label="show 1 new notification" color="inherit" style={{backgroundColor: 'transparent'}}>
                                <NotificationList/>
                            </IconButton>

                            {/*--------------Melding Icon knapp--------------*/}
                            <IconButton aria-label="show 1 new mails" color="inherit" component={Link} to="/chat">
                                <Badge badgeContent={0} color="secondary">
                                    <MailIcon/>
                                </Badge>
                            </IconButton>

                            {/*----------AdminSide Icon knapp--------------*/}
                            {isAdmin && (
                                <IconButton color="inherit" component={Link} to="/admin">
                                    <Badge color="secondary">
                                        <SupervisorAccountIcon/>
                                    </Badge>
                                </IconButton>
                            )}

                        </div>)}

                        {/*----------Logg på/av Icon knapp--------------*/}
                        {!loggedIn ?
                                <IconButton
                                    edge="end"
                                    aria-label="Signin"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    color="inherit"
                                    component={Link} to="/login"
                                >
                                    <AccountCircle/>
                                </IconButton>
                         :
                            <IconButton
                                edge="end"
                                aria-label="Logout"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={() => Logout()}
                                color="inherit"
                            >
                                <ExitToAppIcon/>
                            </IconButton>}
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/*----------Sidepanel knapp-------------*/}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon/>
                        ) : (
                            <ChevronRightIcon/>
                        )}
                    </IconButton>
                </div>
                <SidePanel/>
            </Drawer>
            {renderMobileMenu}
            {renderMenu}

        </div>
    );
}










