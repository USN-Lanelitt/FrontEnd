import React, {useEffect, useState} from 'react';
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
import NotificationLoanSendt from "./notification-loan-sendt";
import Progress from "../progress";

/*Her har vi notifikasjonen som ligger i bjellen, denne er laget av Mirsa & Farhad*/

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
    button: {
        padding: '0',
        marginBottom: '3px',
    }

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
    const [dataSendt, setDataSendt] = useState([]);

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

    // ------ Farhad Start ------
    useEffect(() => {
        const interval = setInterval(() => {
            handleUpdate();
        }, 15000);
        return () => clearInterval(interval);
    }, []);
    // ------ Farhad Slutt ------

    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;

        handleUpdate();

    }, [open]);

    const getAcceptedRequests = () => {
        console.log("getAcceptedRequests", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/loanAccepted')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setDataAccept(response.data);
                }
            })
            .catch(error => console.log(error))
    };
    // ------ Farhad Start ------
    const handleUpdate = () => {
        getFriendsRequests();
        getSendtRequests();
        getAcceptedRequests();
        getDeniedRequests();
    };
    // ------ Farhad Slutt ------

    const getFriendsRequests = () => {
        axios.get('/user/' + userId + '/friendRequests')
            .then((response) => {
                if (response.status === 200) {
                    console.log('friendrequest');
                    console.log(response);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    };

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
    };
    const getSendtRequests = () => {
        console.log("getSendtRequests", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/loanSent')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setDataSendt(response.data);
                }
            })
            .catch(error => console.log(error))
    };


    return (
        <div className={classes.root}>
            <div>
                <Badge badgeContent={data.length + dataSendt.length + dataAccept.length + dataDenied.length}
                       color="secondary">
                    <IconButton
                        className={classes.button}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                        variant="contained"
                        onClick={handleToggle}>

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
                    <Paper style={{maxHeight: 300, overflow: 'auto'}}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow"
                                      onKeyDown={handleListKeyDown}>
                                <Box maxWidth="48ch">
                                    <Typography className={classes.typo} variant="h6" align="center" color="textPrimary"
                                                gutterBottom>

                                        Varsler
                                    </Typography>
                                    <Divider variant="li"/>
                                    {data && <FriendRequestList data={data}/>}
                                    {data && <NotificationLoanSendt data={dataSendt}/>}
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
