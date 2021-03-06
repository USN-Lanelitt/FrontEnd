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
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import SportsHandballIcon from '@material-ui/icons/SportsHandball';



// ------ Kode mal hentet fra Material UI - Appbar ------
// ------ Justert og tilpasset til eget bruk. ------
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
    // ------ Farhad ------
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

    const handleClickAway = () => {
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

    // ------ Farhad ------
    // Sjekker om bruker er innlogget eller ikke og admin eller ikke - hentet og tilpasset fra Firebase Auth docs
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

    // ------ Farhad ------
    // Meny knapp ikoner som blir vist eller skjult basert på om bruker er innlogget eller ikke
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
                : <MenuItem onClick={() => Logout()}>{t('login.7')}</MenuItem>
            }
        </Menu>

    );

    const names = [
        'Norsk',
        'English',
    ];

    // ------ Farhad ------
    //Meny knapp alternativer som blir vist hvis bruker er på mobil eller hvis skjermen er liten
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
            <MenuItem>
                {selectedLang ?
                    <IconButton color="inherit" style={{fontSize: 'medium'}} onClick={()=>handleLanguageNO('no')}>
                        <LanguageIcon/>
                        <p>Norsk</p>
                    </IconButton> :
                    <IconButton color="inherit" style={{fontSize: 'medium'}}  onClick={()=>handleLanguageEN('en')}>
                        <LanguageIcon/>
                        <p>English</p>
                    </IconButton>}
            </MenuItem>
            {loggedIn && (<div>
                <MenuItem component={Link} to="/Notification">
                    <IconButton aria-label="show new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    {t('nav.6')}
                </MenuItem>
                <MenuItem component={Link} to="/chat">
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                    {t('nav.7')}
            </MenuItem></div>)}
            {!loggedIn && (
                    <MenuItem component={Link} to="/signup">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            size="small"
                            color="inherit"
                        >
                            <SportsHandballIcon/>
                            {t('login.6')}
                        </IconButton>
                    </MenuItem>
            )}
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
                        <p>{t('login.1')}</p>
                    </MenuItem>:
                <MenuItem onClick={() => Logout()}>
                    <IconButton color="inherit">
                        <ExitToAppIcon/>
                    </IconButton>
                    <p>{t('login.7')}</p>
                </MenuItem>}
        </Menu>
    );

    return (
        //                  ------ Farhad ------
        // ------------DESKTOP / PC SKJERM NAVBAR MENY----------------
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
                        <ClickAwayListener onClickAway={handleClickAway}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        </ClickAwayListener>
                    </div>)}
                        <Typography className={classes.title} variant="h5" noWrap component={Link} to="/" style={{textDecoration: "none", color: "white"}}>
                            Lånelitt
                        </Typography>

                        {/*----------Søke felt i Navbar Icon knapp / laget av Mirsa--------------*/}
                    {loggedIn &&
                    <SearchFriends/>
                    }
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
                            {/*----------Notification Icon knapp  / laget av Mirsa--------------*/}

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

                        {/*----------Opprett konto / Logg på/av Icon knapp--------------*/}
                        {!loggedIn && (
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="primary-search-account-menu"
                                    aria-haspopup="true"
                                    size="small"
                                    color="inherit"
                                    component={Link} to="/signup"
                                >
                                    <SportsHandballIcon/>
                                    {t('login.6')}
                                </IconButton>
                        )}
                        {!loggedIn ?
                                <IconButton
                                    edge="end"
                                    aria-label="Signin"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    color="inherit"
                                    size="small"
                                    component={Link} to="/login"
                                >
                                    <AccountCircle/>
                                    {t('login.1')}
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










