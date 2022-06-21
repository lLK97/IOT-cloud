import React from 'react'; import { Box, FormControl, Grid, Button, Typography } from '@mui/material';
import Foot from '../../component/foot/foot';
import { backgroundlogin, buttonSignInNow, checkIcon, formRegister, formSizeLogin, registerPage } from '../../component/styleMIUI/styleMIUI';
import TimeLine from './TimeLine';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import Head from '../../component/head/head';
const Finished = () => {
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
                            endSecond='true'
                            lineActiveSecond='lineActive'
                            thrid='active'
                        />
                        <FormControl sx={{ ...formRegister, transform: 'translateX(0)' }}>
                            <Typography sx={{ p: '24px' }}><b>Registeration Success</b> <CheckCircleOutlineIcon sx={{ ...checkIcon }} /></Typography>
                            <Link to='/'>
                                <Button button sx={{ ...buttonSignInNow }}>Sign In Now</Button>
                            </Link>
                        </FormControl>
                    </Grid>

                </Grid>
                <Foot />
            </Box>
        </div>
    );
}

export default Finished;
