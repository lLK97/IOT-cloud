
import React from 'react';
import { Typography,  ListItem, Grid } from '@mui/material';

const BoxDashboard = props => {
    return (
        <Grid className='block-content-dashboard' item xs={12}>
            <ListItem className='title'>
                <span>{props.title}</span>
            </ListItem>
            <ListItem className='icon'>
                <span>
                    {
                        props.icon
                    }
                </span>
            </ListItem>
            <ListItem className="number">
                <Typography className='inner-number'><span>{props.number}</span>{props.unit}</Typography>
            </ListItem>
          </Grid>
    );
}

export default BoxDashboard;
