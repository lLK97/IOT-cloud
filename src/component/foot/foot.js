import { ListItem, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../assets/css/component/foot.scss'
import { listVertical, listVerticalSmall } from '../styleMIUI/styleMIUI';


const Foot = () => {
    const dataMenuFootLeft = [
        {
            name: 'About Us'
        },
        {
            name: 'Contact Us'
        },
        {
            name: 'Products'
        }
    ]
    const dataMenuFootRight = [
        {
            name: 'Cookie'
        },
        {
            name: 'Privacy Policy'
        },
        {
            name: 'Terms of Use'
        },
        {
            name: 'Subscribe'
        }
    ]
    return (
        <Grid container spacing={3} item xs={12} className='section__foot'>
            <Grid className='menu-foot-left' item xs={12}>
                {
                    dataMenuFootLeft.map((item, index) => (
                        <Typography sx={{ ...listVertical }} key={index}>{item.name}</Typography>
                    ))
                }
            </Grid>
            <Grid className='menu-foot-bottom' container spacing={2} item xs={12}>
                <Grid item xs={12} md={6} className='foot-copyright' >
                    <ListItem sx={{ fontSize: '13px', p: '0 24px' }}>Copyright 2021 Xiamen Milesight IoT Co., Ltd.</ListItem>
                </Grid>
                <Grid item xs={12} md={6} className='right'>
                    {
                        dataMenuFootRight.map((item, index) => (
                            <Typography className='item-right' sx={{ ...listVerticalSmall }} key={index}>{item.name}</Typography>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Foot;
