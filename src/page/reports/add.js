
import '../../assets/css/pages/add.scss'
import '../../assets/css/component/tab.scss';
import React from 'react';
import { Grid, Box, Typography, ListItem, Button, TextField } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { buttonDefault, inputError, mainContent, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import Head from '../../component/head/head';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Form, Select, Table, TimePicker, } from 'antd';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Input from 'antd/lib/input/Input';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { lastDayOfWeek } from 'date-fns';
import Search from 'antd/lib/input/Search';
const { Option } = Select;

const AddReports = () => {
    const [form] = Form.useForm();
    const noPadding = {
        p: 0,
    }
    const daily = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' }
    ]
    const dayOfWeek = [
        { label: 'Sun', value: 'Sun' },
        { label: 'Mon', value: 'Mon' },
        { label: 'Tues', value: 'Tues' },
        { label: 'Wed', value: 'Wed' },
        { label: 'Thur', value: 'Thur' },
        { label: 'Fri', value: 'Fri' },
        { label: 'Sat', value: 'Sat' }
    ]
    const dayOfMonth = [
        { label: '1st', value: '1st' },
        { label: '2nd', value: '2nd' },
        { label: '3rd', value: '3rd' },
        { label: '4th', value: '4th' },
        { label: '5th', value: '5th' },
        { label: '6th', value: '6th' },
        { label: '7th', value: '7th' },
        { label: '8th', value: '8th' },
        { label: '9th', value: '9th' },
        { label: '10th', value: '10th' },
        { label: '11th', value: '11th' },
        { label: '12th', value: '12th' },
        { label: '13th', value: '13th' },
        { label: '14h', value: '14th' },
        { label: '15th', value: '15th' },
        { label: '16th', value: '16th' },
        { label: '17th', value: '17th' },
        { label: '18th', value: '18th' },
        { label: '19th', value: '19th' },
        { label: '20th', value: '20th' },
        { label: '21th', value: '21th' },
        { label: '22th', value: '22th' },
        { label: '23th', value: '23th' },
        { label: '24th', value: '24th' },
        { label: '25th', value: '25th' },
        { label: '26th', value: '26th' },
        { label: '27th', value: '27th' },
        { label: '28th', value: '28th' },
        { label: '29th', value: '29th' },
        { label: '30th', value: '30th' },
        { label: '31th', value: '31th' },
        { label: 'Last Day of the Month', value: 'Last Day of the Month' }
    ]
    const devices = [{ label: 'All Devices', value: 'All Devices' }]

    //COLUMN, DATA TABLE
    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: name => (<div>{name}</div>)
        },

        {
            title: 'SN',
            dataIndex: 'sn',
            key: 'sn',
            render: date => (<div>{date}</div>)
        },

        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            render: model => (<div>{model}</div>)
        },
    ]
    const dataTables = [
        {
            key: '1',
            name: 'Garden - N1',
            sn: '6412A5350066',
            model: 'UC501'
        },
        {
            key: '2',
            name: 'EM500 LGT',
            sn: '6126A39813542023',
            model: 'EM500-LGT-RY'
        },
        {
            key: '3',
            name: 'EM500 - SMT',
            sn: '6126A14100247005',
            model: 'EM500-SMTC'

        },
        {
            key: '4',
            name: 'Valve M - UC511',
            sn: '6414A50247120023',
            model: 'UC511-DI'

        },
        {
            key: '5',
            name: 'Valve S - UC512',
            sn: '6415A51046560023',
            model: 'UC512-DI'

        },
        {
            key: '6',
            name: 'AM104 - Meeting Room 3',
            sn: '6128B0438832',
            model: 'AM107'

        },
        {
            key: '7',
            name: 'EM300-TH',
            sn: '6136A47299401004',
            model: 'EM300-TH'

        }, {
            key: '8',
            name: 'AM104 - SP Region',
            sn: '6127A1747982',
            model: 'AM104'

        }
    ]

    const account = [];
    for (let i = 10; i < 36; i++) {
        account.push(<Option key={i.toString(36) + i}>iot.demo@milesight{i}.com</Option>);
    }
    const btBottom = {
        width: '100px',
        height: '35px',
        backgroundColor: 'var(--primary-light-blue)',
        color: 'var(--primary-white)',
        '&:hover': {
            color: '#bccfdb'
        }

    }
    const [dailyChange, setdailyChange] = React.useState();
    //ERROR TEXTFIELD
    const textReport = {
        width: '100%', p: '0', marginInline: '0'
    }
    const textErrorReport = {
        width: '115%',
        p: '0',
        marginInline: '0',
        '>p': {
            color: 'red',
            m: '0'
        }
    }
    const [textValue, settextValue] = React.useState('');
    const [errorText, setErrorText] = React.useState('');
    const showTextField = () => {
        if (textValue == '') {
            setErrorText('This is a required field');
        }
    }

    return (
        <div>
            <div className='content_wrapper'>
                <Box>
                    <Head
                        userInfo='false' />
                </Box>
            </div>
            <Grid container spacing={2} item xs={12} className='contain-box'>
                <Sidebar />
                <Grid item xs={10} sx={{ ...mainContent }}>
                    <div className="content-noTab">
                        <Link to='/reports'><ArrowBackIosNewIcon></ArrowBackIosNewIcon></Link>
                        <Form form={form} name='' className='report-pageAdd'>
                            <Box className='top-label'>
                                <Typography className='label'>Title</Typography>
                                <TextField
                                    onChange={(e) => settextValue(e.target.value)}
                                    sx={errorText == '' ?
                                        { ...textFieldHorizontal, ...textReport } : { ...inputError, ...textErrorReport }}
                                    helperText={errorText}></TextField>
                            </Box>
                            {/* REPORTS */}
                            <ListItem className='label label--report' sx={{ ...noPadding }}>
                                <Typography className='label'>Reporting Frequency </Typography>
                                <InfoOutlinedIcon />
                            </ListItem>
                            {/* END */}
                            {/* //DAILY */}
                            <ListItem sx={{ ...noPadding, marginBottom: '15px' }}>
                                <Select defaultValue='Daily' options={daily} showSearch className='daily' onChange={(e) => setdailyChange(e)} />
                                {
                                    dailyChange == 'Weekly' ? (<Select defaultValue='Sun' options={dayOfWeek} showSearch className='weekly' />) : null
                                }
                                {
                                    dailyChange == 'Monthly' ? (<Select defaultValue='1st' options={dayOfMonth} showSearch className='monthly' />) : null
                                }


                            </ListItem>
                            {/* END */}
                            {/* REPORTS */}
                            <ListItem className='label label--device' sx={{ ...noPadding }}>
                                <Typography className='label'>Device </Typography>
                                <InfoOutlinedIcon />
                                <Box className='right'>
                                    <Select defaultValue='All Devices' options={devices} showSearch className='weekly' />
                                    <Search
                                        placeholder="Search"
                                        style={{ width: 200 }}
                                    />
                                </Box>
                            </ListItem>
                            {/* END */}
                            {/* //TABLE_DEVICES */}
                            <Table rowSelection
                                columns={columns}
                                dataSource={dataTables}
                                loading={false}
                                pagination={{ pageSize: 100 }}
                                scroll={{ y: 420 }}
                                locale={{
                                    emptyText: (<span>
                                        You have not added any devices.
                                    </span>)
                                }} />
                            {/* //TABLE_DEVICES */}
                            {/* REPORTS */}
                            <Box className='Recipe'>
                                <ListItem className='label label--report' sx={{ ...noPadding }}>
                                    <Typography className='label'>Recipients</Typography>
                                    <InfoOutlinedIcon />
                                </ListItem>
                                <Select mode="multiple"
                                    allowClear
                                    style={{ width: '100%' }} showSearch>
                                    {account}
                                </Select>
                            </Box>
                            {/* END */}
                            <ListItem className='bottom-button' sx={{ textAlign: 'center' }}>
                                <div className='inner-button'>
                                    <Button key="back" type="primary" className='button-model cancel' sx={{ ...btBottom }}>
                                        Return
                                    </Button>,
                                    <Button key="submit" type="primary" className='button-model confirm'
                                        sx={{ ...btBottom, marginLeft: '30px' }}
                                        onClick={() => showTextField()}>
                                        Add
                                    </Button>
                                </div>
                            </ListItem>
                        </Form>


                    </div>
                </Grid>
            </Grid>

        </div >
    );
}

export default AddReports;
