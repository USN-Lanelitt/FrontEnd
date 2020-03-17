import React from 'react';
import ListItem from "@material-ui/core/ListItem";

const ListItemLink = (props) => {
    return (
        <div>
            <ListItem button component="a" {...props} />
        </div>
    );
};

export default ListItemLink;