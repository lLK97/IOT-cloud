import React, { useState } from 'react';
import { Box, FormControl, Grid, ListItem, Button, OutlinedInput, IconButton, TextField, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { buttonLogin, buttonNext, buttonResend, distantTextField, formRegister, textField, textFieldHorizontal } from '../../../component/styleMIUI/styleMIUI';

const ChnagePassword = () => {
    const [showPassword, setShow] = useState(false)
    const [confirmPassword, setShowConfirm] = useState(false)
    const [oldPassword, setoldPassword] = useState(false)
    const handleClickOldPassword = () => {
        setoldPassword(!oldPassword)
    }
    const handleClickShowPassword = () => {
        setShow(!showPassword)
    }
    const handleClickShowConfirmPassword = () => {
        setShowConfirm(!confirmPassword)
    }
    return (
        <Box className='change-password'>
            <FormControl sx={{ ...formRegister }} className='inner-change'>
                <ListItem sx={{ ...distantTextField }}>
                    <div className='display-name-login'><span className='dots'>*</span> Old Password :</div>

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
                                    onClick={handleClickOldPassword}
                                    edge="end"
                                >
                                    {oldPassword == true ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>
                <ListItem sx={{ ...distantTextField }}>
                    <div className='display-name-login'><span className='dots'>*</span> New Password :</div>

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
                    <div className='display-name-login'><span className='dots'>*</span> Confirm Password :</div>
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


                <Button button sx={{ ...buttonNext, m: '24px auto', width: 100 }}>Save</Button>

            </FormControl>
        </Box>
    );
}

export default ChnagePassword;
