import React from 'react';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {useTranslation} from "react-i18next";

/*Laget av Mirsa*/

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const LoanRequestNotification = ({id, firstname, middlename, imageUrl, lastname, loanStatus, selectedDate, selectedDate2, reply}) => {
    const {t} = useTranslation();
    return (
        <React.Fragment>

            <StyledMenuItem>

                <Divider variant="li"/>
                <Grid>

                    <ListItemAvatar>
                        <Avatar ml={2} alt="Remy Sharp" src={imageUrl}/>
                    </ListItemAvatar>

                    <Box display='flex' flexDirection="column">
                        <Box display='flex' flexDirection="column">
                            <ListItemText gutterBottom variant="h4" component="h7" display={"flex"}>
                                {firstname} {middlename} {lastname}
                            </ListItemText>
                            <ListItemText gutterBottom variant="h4" component="h7" display={"flex"}>
                                {loanStatus} {t('loan-request-notification.1')}
                            </ListItemText>
                        </Box>
                        <Box display='flex' flexDirection="row">
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {selectedDate} - {selectedDate2}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Divider variant="li"/>
                <ListItemSecondaryAction>
                    <Button onClick={reply}>
                        <CloseIcon/>
                    </Button>
                </ListItemSecondaryAction>


            </StyledMenuItem>
            <Divider variant="li"/>
        </React.Fragment>


    );
};

export default LoanRequestNotification;