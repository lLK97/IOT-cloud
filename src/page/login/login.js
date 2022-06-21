import { Box, FormControl, TextField, Grid, Typography, Button, ListItem, OutlinedInput, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import Foot from '../../component/foot/foot';
import { backgroundlogin, backgroundLogin, backgroundTextLogin, buttonLogin, content, formLogin, labelLogin, loginPageBg, noteLogin, textField, textTitle, titleLogin } from '../../component/styleMIUI/styleMIUI';
import '../../assets/css/component/foot.scss';
import { Link } from 'react-router-dom';
import '../../assets/css/component/login.scss'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Crop169RoundedIcon from '@mui/icons-material/Crop169Rounded';
import QRCode from "qrcode.react";
import FlipOutlinedIcon from '@mui/icons-material/FlipOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Head from '../../component/head/head';


const Login = () => {
    const sizeIcon = {
        'svg': {
            fontSize: '45px'
        },
        m: 'auto',
        textAlign: 'right',
        p: '0 !important'

    }
    const textSize = {
        textAlign: 'left',
        alignSelf: 'center',
        p: '0 0 0 15px !important',
        '>p': {
            fontWeight: '300 !important'
        }
    }
    const loginCenter = {
        textAlign: 'center',
        padding: '0 !important'
    }
    const [switchForm, setSwitch] = useState(false);
    const activeSwitchForm = () => {
        setSwitch(!switchForm)
    }
    const [showPassword, setShow] = useState(false)
    const handleClickShowPassword = () => {
        setShow(!showPassword)
    }
    return (
        <div>
            <div className='content_wrapper'>
                <Box>
                    <Head
                        userInfo='true' />
                </Box>
            </div>
            <Box className='login' >
                <Grid container spacing={2} item xs={12} sx={{ ...backgroundlogin, ...loginPageBg }} >
                    <Grid item xs={12} md={7} sx={{ ...backgroundTextLogin }} >
                        <Typography variant='h2' sx={{ ...textTitle }}>
                            ODM IoT Cloud
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ ...loginCenter }} >
                        <Box className='bg-login' sx={{ ...formLogin }}>
                            <button className='switch' onClick={activeSwitchForm}>
                                {
                                    switchForm == true ? (<Crop169RoundedIcon></Crop169RoundedIcon>) :
                                        (<QrCode2Icon></QrCode2Icon>)
                                }
                            </button>
                            <Box className='inner-bg-login'>

                                <FormControl className='formLogin' sx={{ p: '20px 0' }}>
                                    {
                                        switchForm == true ? (<Typography sx={{ ...titleLogin }} >Login with QR Code </Typography>) :
                                            (<Typography sx={{ ...titleLogin }} >   Login with Password </Typography>)
                                    }
                                    {
                                        switchForm == true ? (<div>
                                            <QRCode
                                                id='qrcode'
                                                value='https://www.youtube.com/'
                                                size={170}
                                                level={'H'}
                                                includeMargin={true}
                                                className='qrcode'
                                            />
                                            <Grid container spacing={2} item xs={12} sx={{ marginTop: '-10px' }}>
                                                <Grid item xs={3} sx={{ ...sizeIcon }}>
                                                    <FlipOutlinedIcon ></FlipOutlinedIcon>
                                                </Grid>
                                                <Grid item xs={9} sx={{ ...textSize }}>
                                                    <Typography>Start Milesight IoT Cloud App</Typography>
                                                    <Typography>Scan the QR Code to login in</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>) :
                                            (<div>
                                                <Typography sx={{ ...labelLogin }}><span>*</span> Email Address</Typography>
                                                <TextField sx={{ ...textField, width: '100%' }} className='login' />
                                                <Typography sx={{ ...labelLogin }}><span>*</span> Password</Typography>
                                                <OutlinedInput
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    sx={{ ...textField, width: '100%', border: '1px solid #d9d9d9 !important' }}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword == true ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />


                                                <Link to='/forgot'>
                                                    <Typography sx={{ ...noteLogin }}>Forgot Password?</Typography>
                                                </Link>
                                                <Link to='/dashboard'>
                                                    <Button sx={{ ...buttonLogin, fontSze: '16px' }}> Login</Button>
                                                </Link>
                                                <Link to='/register'>
                                                    <Typography sx={{ ...noteLogin, marginTop: '20px' }}>Register Now</Typography>
                                                </Link>
                                            </div>)

                                    }
                                </FormControl>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
                <Foot />
            </Box >
        </div>
    );
}

export default Login;
