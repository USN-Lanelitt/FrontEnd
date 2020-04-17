import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from "@material-ui/core/IconButton";
import FriendRequestList from "../friend/friend-request-list";
import Typography from "@material-ui/core/Typography";
import LoanGetAcceptedRequests from "../loan/loan-getAcceptedRequests";
import LoanGetDeniedRequests from "../loan/loan-getDeniedRequests";



const useStyles = makeStyles(theme => ({
    paper: {
        border: '1px solid #d3d4d5',
    },
    typo: {
        padding: theme.spacing(1),
    },
}));

const NotificationList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const ITEM_HEIGHT = 3;

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

// return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <div className={classes.root}>
            <div>
                <IconButton
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    color="inherit"
                    variant="contained"
                    onClick={handleToggle}


                >
                    <NotificationsIcon/>
                </IconButton>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps}) => (
                        <Grow
                            {...TransitionProps}

                        >
                            <Paper>

                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                                        <Typography className={classes.typo} variant="h6" align="center" color="textPrimary" gutterBottom>
                                            Varsler
                                        </Typography>

                                      <FriendRequestList/>
                                      <LoanGetAcceptedRequests/>
                                      <LoanGetDeniedRequests/>




                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>


        </div>
    );
}
export default NotificationList;