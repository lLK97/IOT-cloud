import { Box, ListItem, Typography } from '@mui/material';
import { Select } from 'antd';
import React from 'react';
import { inputBasicInfor } from '../../../component/styleMIUI/styleMIUI';
const { Option } = Select;

const DateTimeTag = () => {
    const [timeCurrent, settimeCurrent] = React.useState('');
    const [toDay, settoDay] = React.useState('');
    const dayOfWeek = day => {
        switch (day) {
            case 1:
                settoDay('Mon')
                break;
            case 2:
                settoDay('Tue')
                break;
            case 3:
                settoDay('Wed')
                break;
            case 4:
                settoDay('Thu')
                break;
            case 5:
                settoDay('Fri')
                break;
            case 6:
                settoDay('Sat')
                break;
            case 0:
                settoDay('Sun')
                break;
            default:
                break;
        }
    }
    const getTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let day = today.getDay();
        dayOfWeek(day);
        let dateTime = date + ' ' + time + ' ' + toDay;
        settimeCurrent(dateTime)

    }
    setTimeout(getTime, 1000)
    const proVince = [
        {
            label: '1 Poland (Warsaw)', value: '1 Poland (Warsaw)'
        },
        {
            label: '2 Egypt (Cairo)', value: '2 Egypt (Cairo)'
        },
        {
            label: '3 Russia (Moscow)', value: '3 Russia (Moscow)'
        },
        {
            label: '4 Oman (Muscat)', value: '4 Oman (Muscat)'
        },
        {
            label: '5 Kazakstan (Aqtau)', value: '5 Kazakstan (Aqtau)'
        },
        {
            label: '6 Vietnam (Hanoi)', value: '6 Vietnam (Hanoi)'
        },
        {
            label: '7 Russia (Moscow)', value: '7 Russia (Moscow)'
        },
        {
            label: '8 China (Bejjing)', value: '8 China (Bejjing)'
        }
    ]
    const mode = [
        {
            label: 'Automatic', value: 'Automatic'
        },
        {
            label: 'Disable', value: 'Disable'
        }
    ]
    return (
        <Box className='date-time'>
            <ListItem className='current-time'>
                <div className='display-name-login'> Current Time : </div>
                <Typography className='label'>{timeCurrent}</Typography>
            </ListItem>
            <ListItem>
                <div className='display-name-login'> Time Zone : </div>
                <Select
                    defaultValue='8 China (Bejjing)'
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
                <div className='display-name-login'> DST : </div>
                <Select
                    defaultValue='Automatic'
                    style={{ ...inputBasicInfor }}

                >
                    {
                        mode.map((item) => (
                            <Option value={item.label}>{item.value}</Option>
                        ))
                    }

                </Select>
            </ListItem>
        </Box>
    );
}

export default DateTimeTag;
