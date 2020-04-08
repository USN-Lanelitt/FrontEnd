import React from 'react';
import Card from "@material-ui/core/Card";
import cx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const FriendProfileCard = (id,firstname, middlename, lastname, imageUrl,) => {



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
                <h3 className={styles.heading}>{firstname} {lastname}</h3>
                <span className={styles.subheader}>{"Epost: " + email}</span>
            </CardContent>
            <Divider light/>
            <Box display={"flex"}>
                <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={styles.statLabel}>{"Telefon: " + phone}</p>
                    <p className={styles.statValue}>{"Bruker ID: " + id}</p>
                </Box>
            </Box>
        </Card>
    );
};

export default FriendProfileCard;