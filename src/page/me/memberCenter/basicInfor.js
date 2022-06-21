import { Box, ListItem, Button, TextField } from '@mui/material';
import React from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { buttonLogin, buttonNext, inputBasicInfor, textFieldHorizontal } from '../../../component/styleMIUI/styleMIUI';
import { Select } from 'antd';

const { Option } = Select;
const styleIcon = {
    color: 'var(--primary-light-blue)',
    position: 'relative',
    top: '5px'

}

const BasicInfor = () => {
    return (
        <Box className='basic-infor'>
            <ListItem>
                <div className='display-name-login'> Server <HelpOutlineOutlinedIcon sx={{ ...styleIcon }} /> : </div>
                <Select
                    defaultValue="Asia"
                    style={{ ...inputBasicInfor }}
                    disabled
                >
                    <Option value="Asia">Asia</Option>
                    <Option value="European">European</Option>
                </Select>
            </ListItem>
            <ListItem>
                <div className='display-name-login'><span className='dots'>*</span> Account email :</div>
                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
            </ListItem>
            <ListItem>
                <div className='display-name-login'><span className='dots'>*</span> Last Name :</div>
                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
            </ListItem>
            <ListItem>
                <div className='display-name-login'><span className='dots'>*</span> First Name :</div>
                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
            </ListItem>
            <ListItem>
                <div className='display-name-login'>Company Name :</div>
                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
            </ListItem>
            <ListItem>
                <div className='display-name-login'>Phone Number :</div>
                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, paddingRight: '0' }} />
            </ListItem>
            <ListItem>
                <Button button sx={{ ...buttonLogin, ...buttonNext, width: 100 }}>Save</Button>
            </ListItem>
        </Box>
    );
}

export default BasicInfor;
