import React from 'react';
import { Box, Grid, ListItem } from '@mui/material';
import { Button, Tabs, Typography, Progress, List, Input, Form, Table } from 'antd';
import { buttonNext } from '../../../component/styleMIUI/styleMIUI';

import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
const { Title } = Typography;


const sharedOnCell = (_, index) => {
    if (index === 0) {
        return { colSpan: 0, };
    }
    if (index === 2) {
        return { colSpan: 0, };
    }
    if (index === 5) {
        return { colSpan: 0, };
    }
    if (index === 7) {
        return { colSpan: 0, };
    }
    if (index === 10) {
        return { colSpan: 0, };
    }
    if (index === 13) {
        return { colSpan: 0, };
    }
    return {};
};

const MemberCenter = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'name',
            render: text => <div className='name-update-acc'>{text}</div>,
            onCell: (_, index) => ({
                colSpan: index == 0 ||
                    index == 2 || index == 5 || index == 7 || index == 10 || index == 13
                    ? 3 : 1,
            }),
        },
        {
            title: 'Free',
            dataIndex: 'free',
            render: text => <div>{text}</div>,
            onCell: sharedOnCell,
        },
        {
            title: 'Pro',
            dataIndex: 'pro',
            render: text => <div>{text}</div>,
            onCell: sharedOnCell,
        }
    ]
    const data = [
        {
            key: '1',
            name: 'Device'
        },
        {
            key: '2',
            name: 'Number of Devices',
            free: '10',
            pro: '50/100/300'
        },
        {
            key: '3',
            name: 'Dashboards',

        },

        {
            key: '4',
            name: 'Number of Dashboards',
            free: '2',
            pro: '10'
        },
        {
            key: '5',
            name: 'Number of Widgets on A Dashboard',
            free: '20',
            pro: '50'
        },
        {
            key: '6',
            name: 'Alarm Email',

        },
        {
            key: '7',
            name: 'Monthly Alarm Emails',
            free: '100',
            pro: '1000'
        },
        {
            key: '8',
            name: 'Reports',

        },
        {
            key: '9',
            name: 'Daily/Weekly/Monthly Report',
            free: <ClearIcon />,
            pro: <CheckIcon />
        },
        {
            key: '10',
            name: 'Number of Devices Supported Generating Report',
            free: <ClearIcon />,
            pro: <CheckIcon />
        },
        {
            key: '11',
            name: 'Triggers',

        },
        {
            key: '12',
            name: 'Number of Trigger Commands',
            free: '20',
            pro: '100/200/600'
        },
        {
            key: '13',
            name: 'Monthly Number of Trigger Execution Times',
            free: '1000',
            pro: '5000/10000/30000'
        },
        {
            key: '14',
            name: 'Device sharing contacts',

        },
        {
            key: '15',
            name: 'Device Sharing',
            free: <ClearIcon />,
            pro: <CheckIcon />
        },
        {
            key: '16',
            name: 'Number of Sharing Recipients',
            free: <ClearIcon />,
            pro: '10'
        }
    ]
    const [updateAccount, setupdateAccount] = React.useState(false);
    return (
        <div>
            {
                updateAccount == false ? (
                    <Box className='member-center'>
                        <Title level={3}>Membership Plan</Title>
                        <Box className='inner-member'>
                            <Grid container spacing={2} className='wrap-content'>
                                <Grid xs={8} className='pro-show'>
                                    <ListItem className='item'>
                                        <Typography className='title'>Pro 1 </Typography>
                                        <Typography className='title-child'>In Use</Typography>
                                    </ListItem>
                                    <ListItem className='item'>
                                        50 Devices
                                    </ListItem>
                                    <ListItem className='item'>
                                        Expiration Date: 2099-12-31
                                    </ListItem>
                                </Grid>
                                <Grid xs={4}>
                                    <Button style={{ ...buttonNext }} className='btn-update' onClick={() => setupdateAccount(true)}>Update Account</Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={1} className='progess-list'>
                            <Box className='inner-progess-list'>
                                <ListItem className='title'>Usage Overview</ListItem>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Alarm receivers</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            1/5
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={0} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Alarm e-mails</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            0/1000
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={0} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Devices</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            0/50
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={0} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Dashboards</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            3/10
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={30} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Device sharing contacts</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            0/10
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={0} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} xs={12} className='item-progess'>
                                    <Grid xs={8} className='right'>
                                        <ListItem className='text text--lable'>Reports</ListItem>
                                    </Grid>
                                    <Grid xs={4} className='left'>
                                        <Grid xs={12} className='text text--number'>
                                            0/10
                                        </Grid>
                                        <Grid xs={12}>
                                            <Progress percent={0} showInfo={false} />
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Box>

                        </Grid >
                    </Box >
                ) : (
                    <div className='upgradeAccount'>
                        <Typography className='bread-crumb'><span>Membership Plan</span> / Upgrade Account</Typography>
                        <Box className='update-account'>
                            <Title level={3}>Upgrade Account</Title>
                            <Grid container spacing={2} xs={12} className='content'>
                                <Grid xs={10} container className='right'>
                                    <Grid xs={9}>
                                        <Typography className='title'>
                                            Please enter the license to upgrade the account
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2} className='get-key'>
                                        <Typography >
                                            <a href=''>
                                        Get License >
                                            </a>
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Form.Item
                                            name="Title"
                                            label=""
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'This is a required field',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Please enter the license'></Input>
                                        </Form.Item>
                                    </Grid>
                                </Grid>
                                <Grid xs={2} className='left'>
                                    <Button>Actived</Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} className='table'>
                                <Grid xs={12}>
                                    <Typography className='title'>
                                        Plan Details
                                    </Typography>
                                </Grid>
                                <Grid xs={12}>
                                    <Table columns={columns} dataSource={data}
                                        pagination={{ pageSize: 33 }} bordered />
                                </Grid>
                            </Grid>
                        </Box>
                    </div >
                )
            }
        </div >

    );
}

export default MemberCenter;
