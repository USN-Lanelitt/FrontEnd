import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const Progress = props => {
    return (
        <Box m={2} display="flex" justifyContent="center" width={1}><CircularProgress size={50}/></Box>
    );
};



export default Progress;