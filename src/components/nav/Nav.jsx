import React from 'react';
import clsx from "clsx";
import {Link} from 'react-router-dom';
import EmailIcon from "@material-ui/icons/Email";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { fade, makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import WarningIcon from '@material-ui/icons/Warning';
import SettingsIcon from '@material-ui/icons/Settings';
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import ProfileCard from "../profile/profileCard";
import Logout from "../login/logout";
import app from "../../fire";



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
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [expanded, setExpand] = React.useState(false);
    const [state, setState] = React.useState({
        left: false,
    });


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setExpand(!expanded);
    };



    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    /*const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };*/

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

    const menuId = 'primary-search-account-menu';



    const [loggedIn, setloggedIn] = React.useState(false);

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                    setloggedIn(true);

            } else {
                // No user is signed in.
                setloggedIn(false);
            }
        });



    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to="/prof" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleMenuClose}>Min Profil</MenuItem>
            </Link>

            { !loggedIn ? <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleMenuClose}>Logg på</MenuItem>
            </Link>  : <MenuItem onClick={()=>Logout()}>Logg av</MenuItem>   }

        </Menu>
    );


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {loggedIn && ( <div> <MenuItem>
                <IconButton aria-label="show 1 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 1 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem> </div>)}
            {!loggedIn ? <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Logg på</p>
            </MenuItem> </Link>:
            <MenuItem onClick={() => Logout()}>
                <IconButton aria-label="show 1 new notifications" color="inherit">
                        <ExitToAppIcon />
                </IconButton>
                <p>Logg ut</p>
            </MenuItem>}
        </Menu>
    );

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <ProfileCard />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Snarveier
                    </ListSubheader>
                }>
                <Link to="/friendAll" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Venner" />
                </ListItem>
                </Link>

                <ListItem button>
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Meldinger" />
                </ListItem>

                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hjem" />
                    </ListItem>

                </Link>
                <Link to="/prof" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mine Eiendeler" />
                    </ListItem>

                </Link>
                <ListItem button>
                    <ListItemIcon>
                        <QueryBuilderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Utlånt Eiendeler" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lånt Eiendeler" />
                </ListItem>

            </List>
            <Divider />
            <List>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Innstillinger" />
                    {expanded ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link to="/editprof" style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <ListItemText primary="Rediger profil" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>

                <ListItem button>
                    <ListItemIcon>
                        <WarningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rapporter" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hjelp" />
                </ListItem>

            </List>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    {loggedIn && (<div>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>)}
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <Typography className={classes.title} variant="h5" noWrap>
                            Lånelitt
                        </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Søk…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {loggedIn && ( <div>
                            <Link to="/admin" style={{ color: "white" }}>
                                <IconButton  color="inherit">
                                    <Badge color="secondary">
                                        <SupervisorAccountIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <IconButton aria-label="show 1 new mails" color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 1 new notifications" color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </div>)}

                        {!loggedIn ? <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <IconButton
                            edge="end"
                            aria-label="Signin"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        </Link> :
                        <IconButton
                            edge="end"
                            aria-label="Logout"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={() => Logout()}
                            color="inherit"
                        >
                            <ExitToAppIcon />
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
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
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
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                {sideList("left")}
            </Drawer>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}










