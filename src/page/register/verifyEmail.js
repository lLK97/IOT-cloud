import React, { Component } from 'react';
import { Box, FormControl, TextField, Grid, ListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Foot from '../../component/foot/foot';
import Head from '../../component/head/head';
import { backgroundlogin, buttonLogin, buttonNext, buttonResend, formRegister, formSizeLogin, registerPage, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import TimeLine from './TimeLine';


const VerifyEmail = () => {
    //Count Down
    let timeLeft = 60
    const countDown = () => {
        timeLeft--;
        const btResetPassword = document.getElementsByClassName('bt-count-down');
        btResetPassword[0].innerHTML = String(timeLeft) + 's';
        if (timeLeft > 0) {
            setTimeout(countDown, 1000);
        }
        if (timeLeft == 0) {
            btResetPassword[0].innerHTML = 'Resend';
            btResetPassword[0].classList.remove('bt-count-down');
        }
    }
    const send = () => {
        const btResetPassword = document.getElementsByClassName('bt-count');
        btResetPassword[0].classList.add('bt-count-down');
        timeLeft = 60;
        setTimeout(countDown, 1000);
    }
    setTimeout(countDown, 1000);
    //End Count Down
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
                            endFirst='true'
                            lineActiveFirst='lineActive'
                            second='active'
                        />
                        <FormControl sx={{ ...formRegister }}>
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Email Address</div>
                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal }} disabled={true} value='ODM IoT Cloud' className='textView' />
                            </ListItem>
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Verification Code</div>
                                <Box sx={{ ...textFieldHorizontal }}>
                                    <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, width: '60%', marginLeft: '0' }} className='textView' />
                                    <Button button sx={{ ...buttonLogin, ...buttonResend }} className='bt-count bt-count-down' onClick={send}>60s</Button>
                                </Box>
                            </ListItem>
                            <Link to='/finish'>
                                <Button button sx={{ ...buttonLogin, ...buttonNext, m: '24px auto', width: 100 }}>Next</Button>
                            </Link>
                        </FormControl>
                    </Grid>

                </Grid>
                <Foot />
            </Box>
        </div>
    );
}

export default VerifyEmail;
