import React from 'react';
import { Typography,  ListItem, Grid } from '@mui/material';

const TimeBox = props => {
    return (
        <Grid className='block-time-dashboard' item xs={12}>
            <ListItem className='time'>
                <span>
                    {
                        props.timeCurrent
                    }
                </span>
            </ListItem>
            <ListItem className="date">
                <Typography className='inner-number'><span>{props.dateCurrent}</span></Typography>
            </ListItem>
      </Grid>
    );
}

export default TimeBox;
