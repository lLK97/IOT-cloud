import { Box, FormControl, Grid, TextField, ListItem, MenuItem, Select, Checkbox, Button, OutlinedInput, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import Foot from '../../component/foot/foot';
import { agreeTerm, backgroundlogin, buttonLogin, buttonNext, formRegister, formSizeLogin, registerPage, selectRegister, textField, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import TimeLine from './TimeLine';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';
import Head from '../../component/head/head';



const Register = () => {
    const [age, setAge] = useState('Asia');

    const handleChange = (e: SelectChangeEvent) => {
        setAge(e.target.value);
    };
    const [showPassword, setShow] = useState(false)
    const [confirmPassword, setShowConfirm] = useState(false)
    const handleClickShowPassword = () => {
        setShow(!showPassword)
    }
    const handleClickShowConfirmPassword = () => {
        setShowConfirm(!confirmPassword)
    }
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
                        />
                        <FormControl sx={{ ...formRegister }}>
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Email Address</div>
                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
                            </ListItem>
                            <ListItem>
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
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Confirm Password</div>
                                <OutlinedInput
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
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
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Server <HelpOutlineOutlinedIcon sx={{ fontSize: '14px' }} /> :</div>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{
                                        ...textFieldHorizontal,
                                        ...selectRegister,
                                        border: '1px solid #d9d9d9'
                                    }}
                                >
                                    <MenuItem value={10}>Asia</MenuItem>
                                    <MenuItem value={20}>European</MenuItem>
                                </Select>
                            </ListItem>
                            <ListItem>
                                <div className='display-name-login'> <Checkbox /></div>

                                <Box
                                    sx={{ ...textFieldHorizontal, ...agreeTerm }}>
                                    I agree to Milesight IoT Cloud's Terms and privacy policy and to receive information about Milesight's products.</Box>
                            </ListItem>
                            <Link to='/verifyEmail'>
                                <Button button sx={{ ...buttonLogin, ...buttonNext, width: 100 }}>Next</Button>
                            </Link>
                        </FormControl>
                    </Grid>

                </Grid>
                <Foot />
            </Box>
        </div>
    );
}

export default Register;
