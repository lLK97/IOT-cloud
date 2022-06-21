import React from 'react';
import '../../assets/css/component/head.scss';
import { Grid, ListItem, Typography } from '@mui/material';
import Wiget from '../wiget/wiget';
const Head = props => {

    return (
        <Grid container spacing={4} item xs={12} className='section__head'>
            <Grid className='logo' item xs={6} md={4}>
                <ListItem className='inner-logo'>
                    <img src='https://i.imgur.com/F77ljAM.png' alt='img-logo' />
                    <Typography variant='p'>ODM IoT Cloud</Typography>
                </ListItem>
            </Grid>
            <Grid className='acc-info' item xs={6} md={8}>
                <Wiget
                    userInfo={props.userInfo}
                ></Wiget>
            </Grid>
        </Grid>
    );
}

export default Head;
