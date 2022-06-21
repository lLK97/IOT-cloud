import { Box, FormControl, Grid, ListItem, Button, OutlinedInput, IconButton, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import Foot from '../../component/foot/foot';
import { backgroundlogin, buttonLogin, buttonNext, buttonResend, distantTextField, formRegister, formSizeLogin, registerPage, selectRegister, textField, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import TimeLine from './TimeLine';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import Head from '../../component/head/head';
const ResetPassword = () => {
    const [showPassword, setShow] = useState(false)
    const [confirmPassword, setShowConfirm] = useState(false)
    const handleClickShowPassword = () => {
        setShow(!showPassword)
    }
    const handleClickShowConfirmPassword = () => {
        setShowConfirm(!confirmPassword)
    }
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
            btResetPassword[0].innerHTML = 'Send';
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
                            forgot='true'
                        />
                        <FormControl sx={{ ...formRegister }}>
                            <ListItem sx={{ ...distantTextField }}>

                                <div className='display-name-login'><span className='dots'>*</span> Verification Code</div>
                                <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                    <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, width: '60%' }} className='textView' />
                                    <Button button sx={{ ...buttonLogin, ...buttonResend }} className='bt-count bt-count-down' onClick={send}>60s</Button>
                                </Box>
                            </ListItem>
                            <ListItem sx={{ ...distantTextField }}>
                                <div className='display-name-login'><span className='dots'>*</span> Password</div>

                                <OutlinedInput
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    sx={{ ...textField, ...textFieldHorizontal, marginBottom: '0' }}
                                    className='passWordField'
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
                            </ListItem>
                            <ListItem sx={{ ...distantTextField }}>
                                <div className='display-name-login'><span className='dots'>*</span> Confirm Password</div>
                                <OutlinedInput
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='password'
                                    type={confirmPassword ? "text" : "password"}
                                    sx={{ ...textField, ...textFieldHorizontal, marginBottom: '0' }}
                                    className='passWordField'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                edge="end"
                                            >
                                                {confirmPassword == true ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </ListItem>

                            <Link to='/finish'>
                                <Button button sx={{ ...buttonNext, m: '24px auto', width: 100 }}>Next</Button>
                            </Link>
                        </FormControl>
                    </Grid>

                </Grid>
                <Foot />
            </Box>
        </div>
    );
}

export default ResetPassword;
