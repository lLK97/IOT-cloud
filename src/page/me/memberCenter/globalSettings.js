import React from 'react';
import { Box, ListItem, Button } from '@mui/material';
import { Select } from 'antd';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { buttonNext, inputBasicInfor } from '../../../component/styleMIUI/styleMIUI';
const { Option } = Select;

const styleIcon = {
    color: 'var(--primary-light-blue)',
    position: 'relative',
    top: '5px'

}
const GlobalSettings = () => {
    const proVince = [
        {
            label: 'Main Switch', value: 'Main Switch'
        },
        {
            label: 'Single Switch', value: 'Single Switch'
        }
    ]
    const mode = [
        {
            label: 'English', value: 'English'
        },
        {
            label: 'Vietnam', value: 'Vietnam'
        }
    ]
    return (
        <Box className='global-setting'>
            <ListItem>
                <div className='display-name-login name-large'> Switch Panel Display <HelpOutlineOutlinedIcon /> : </div>
                <Select
                    defaultValue='Main Switch'
                    style={{ ...inputBasicInfor }}
                >
                    {
                        proVince.map((item) => (
                            <Option value={item.label}>{item.value}</Option>
                        ))
                    }

                </Select>
            </ListItem>
            <ListItem>
                <div className='display-name-login name-large'> System Language <HelpOutlineOutlinedIcon sx={{ ...styleIcon }} /> : </div>
                <Select
                    defaultValue='English'
                    style={{ ...inputBasicInfor }}
                >
                    {
                        mode.map((item) => (
                            <Option value={item.label}>{item.value}</Option>
                        ))
                    }

                </Select>
            </ListItem>
            <ListItem>
                <Button button sx={{ ...buttonNext, m: '24px auto', width: 100 }}>Save</Button>
            </ListItem>
        </Box>
    );
}

export default GlobalSettings;
