import { Box, FormControl, TextField, Grid, Typography, ListItem, Button } from '@mui/material';
import React from 'react';
import Foot from '../../component/foot/foot';
import { backgroundlogin, buttonNext, formRegister, formSizeLogin, registerPage, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import TimeLine from './TimeLine';

import { Link } from 'react-router-dom';
import Head from '../../component/head/head';


const ForgotPassword = () => {
    return (
        <div>
            <div className='content_wrapper'>
                <Box>
                    <Head
                        userInfo='true' />
                </Box>
            </div>
            <Box>
                <Grid container spacing={2} item xs={12} sx={{ ...backgroundlogin, ...registerPage }} className='register'>
                    <Grid item xs={12} sx={{ ...formSizeLogin }}>
                        <TimeLine first='active'
                            forgot='true'
                        />
                        <Typography sx={{ m: '48px 0 0 0' }}> Please enter the email address of the account to retrieve your password.</Typography>
                        <FormControl sx={{ ...formRegister }}>
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Email Address</div>
                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal }} />
                            </ListItem>
                            <Link to='/resetPassword'>
                                <Button button sx={{ ...buttonNext, m: '24px 0', width: 100 }}>Submit</Button>
                            </Link>
                        </FormControl>
                    </Grid>

                </Grid>
                <Foot />
            </Box>
        </div>
    );
}

export default ForgotPassword;
