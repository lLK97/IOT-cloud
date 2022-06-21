import { Box, List, ListItem } from '@mui/material';
import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const AlarmList = () => {
    return (
        <div className='content-widget'>
           <div className='alarmWidget'>
                <ListItem className='title'>
                    <span className='text'>Record information content: </span>
                    <InfoCircleOutlined className='icon'/>
                    <Select defaultValue={'Record all devices in this account'}>
                        <Option value='Record all devices in this account'>
                            Record all devices in this account
                        </Option>
                        <Option value='Only record devices in this dashboard'>
                            Only record devices in this dashboard
                        </Option>
                    </Select>
                </ListItem>
                <List className='list'>
                    <ListItem className='list-item'>Alarm Message</ListItem>
                    <div className='list-item'>
                        <ListItem>
                            n1(641193115035)
                        </ListItem>
                        <ListItem>
                            Device is online.
                        </ListItem>
                        <ListItem>
                            2020-01-08 10:11:11
                        </ListItem>
                    </div>
                    <div className='list-item'>
                        <ListItem>
                            UC3452(641193116491)
                        </ListItem>
                        <ListItem>
                            Device is online.
                        </ListItem>
                        <ListItem>
                            2020-01-06 14:59:12
                        </ListItem>
                    </div>
                    <div className='list-item'>
                        <ListItem>
                            641193160948(641193160948)
                        </ListItem>
                        <ListItem>
                            Device is online.
                        </ListItem>
                        <ListItem>
                            2020-01-03 10:16:49
                        </ListItem>
                    </div>
                </List>
                <ListItem className='bottom-text'>
                    Note: this picture is a preview, please click Confirm" add this widget."
                </ListItem>
           </div>
        </div>
    );
}

export default AlarmList;
