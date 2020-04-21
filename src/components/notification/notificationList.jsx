import React, {useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from "@material-ui/core/IconButton";
import FriendRequestList from "../friend/friend-request-list";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Badge from "@material-ui/core/Badge";
import LoanGetAcceptedRequests from "../loan/loan-getAcceptedRequests";
import LoanGetDeniedRequests from "../loan/loan-getDeniedRequests";
import {Box} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
    paper: {
        border: '1px solid #d3d4d5',
        margin: '0',
    },
    typo: {
        padding: theme.spacing(1),
    },
    root: {
        margin: '0',

    },

}));

const NotificationList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [arrowRef, setArrowRef] = React.useState(null);
    const [data, setData] = useState([]);
    const [userId, setId] = useState(sessionStorage.getItem('userId')); //min id
    const [dataAccept, setDataAccept] = useState([]);
    const [dataDenied, setDataDeniend] = useState([]);

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

        getAcceptedRequests();
        getDeniedRequests();

        axios.get('/user/' + userId + '/friendRequests')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));


    }, [open]);

    const getAcceptedRequests = () => {
        console.log("getAcceptedRequests", userId, sessionStorage.getItem('userId'));
        axios.get( '/user/' + userId + '/loanAccepted')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setDataAccept(response.data);
                }
            })
            .catch(error => console.log(error))
    }


    const getDeniedRequests = () => {
        console.log("getDeniedRequests", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/loanDenied')
            .then((response) => {
                console.log("hellooooo2");
                if (response.status === 200) {
                    console.log(response.data);
                    setDataDeniend(response.data);
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className={classes.root}>
            <div>
                <Badge badgeContent={data.length + dataAccept.length + dataDenied.length} color="secondary">
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
                </Badge>

                <Popper open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement='bottom-end'

                        modifiers={{
                            flip: {
                                enabled: true,
                            },
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'scrollParent',
                            },
                            arrow: {
                                enabled: true,
                                element: arrowRef,
                            },
                        }}
                >
                    <span className={classes.arrow} ref={setArrowRef}/>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow"
                                      onKeyDown={handleListKeyDown}>
                                <Box maxWidth="48ch"  overflow="auto" >
                                    <Typography className={classes.typo} variant="h6" align="center" color="textPrimary" gutterBottom>
                                        Varsler
                                    </Typography>
                                    <Divider variant="li"/>
                                    {data && <FriendRequestList data={data}/>}
                                    {data && <LoanGetAcceptedRequests data={dataAccept}/>}
                                    {data && <LoanGetDeniedRequests data={dataDenied}/>}
                                </Box>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Popper>
            </div>
        </div>
    );
}
export default NotificationList;
