import React from 'react';
import { Typography,  ListItem, Grid } from '@mui/material';


const WeatherBox = props => {
    return (
        <Grid className='block-weather-dashboard' item xs={12}>
            <Typography className='title'>
                 {
                     props.title
                 }
            </Typography>
            <ListItem className='weather'>
                <span className='icon'>
                   {props.icon}
                </span>
                <span className='text'>
                <Typography className='inner-text'><span>{props.number}</span>{props.unit}</Typography>
                </span>
            </ListItem>
            
      </Grid>
    );
}

export default WeatherBox;
