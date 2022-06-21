import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Tabs, Modal, Button } from 'antd';
import { Box, Grid, ListItem, TextField } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { mainContent, textFieldHorizontal, } from '../../component/styleMIUI/styleMIUI';
import { Table } from 'antd';

import '../../assets/css/component/tab.scss';
import '../../assets/css/component/table.scss';
import '../../assets/css/pages/eventCenter.scss';

import Head from '../../component/head/head';
import TopTable from '../myDevice/table/topTable';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const { TabPane } = Tabs;
// COLUMN AND DATA TABLE

// COLUMN
const columnsTab1 = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: icon =>
        (<div>
            {icon}
        </div>
        )
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: time => (<div>{time}</div>)
    }
]
const columnTab2 = [
    {
        title: 'Device Name',
        dataIndex: 'devicename',
        key: 'devicename',
        render: lists => (
            lists.map((item) => (
                <ul className='name-table-alarm'>
                    <li className='title'>{item.title}</li>
                    <li className='id'>{item.id}</li>
                </ul>
            ))
        )
    },
    {
        title: 'Permission',
        dataIndex: 'permission',
        key: 'permission',
        render: time => (<div>{time}</div>)
    },
    {
        title: 'Device Owner',
        dataIndex: 'owner',
        key: 'owner',
        render: time => (<div>{time}</div>)
    },
    {
        title: 'Visible on homepage',
        dataIndex: 'visible',
        key: 'visible',
        render: () => (
            <div><Checkbox></Checkbox></div>)
    },
    {
        title: '',
        dataIndex: 'delete',
        key: 'delete',
        render: () => (<DeleteOutlineOutlinedIcon sx={{ color: 'var( --primary-light-blue)' }} />)
    }
]

const columnTab3 = [
    {
        title: 'Device Name',
        dataIndex: 'devicename',
        key: 'devicename',
        render: icon =>
        (<div>
            {icon}
        </div>
        )
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
        render: time => (<div>{time}</div>)
    }
]
const columnTab4 = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: icon =>
        (<div>
            {icon}
        </div>
        )
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: time => (<div>{time}</div>)
    },
    {
        title: 'Messeage',
        dataIndex: 'me',
        key: 'me',
        render: lists => (
            lists.map((item) => (
                <ul className='name-table-alarm'>
                    <li className='title'>{item.title}</li>
                    <li className='id'>{item.id}</li>
                </ul>
            ))
        )
    },
    {
        title: '',
        dataIndex: 'delete',
        key: 'delete',
        render: () => (<DeleteOutlineOutlinedIcon sx={{ color: 'var( --primary-light-blue)' }} />)
    }
]
// END

//  DATA TABLE
const dataTableTab2 = [
    {
        key: '1',
        devicename: [{ title: 'AM104 - SP Region', id: '6128B0438832' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '2',
        devicename: [{ title: 'EM500-UDL', id: '6126B01504883000' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '3',
        devicename: [{ title: 'AM107 - RD Region 2', id: '6128A3909154' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '4',
        devicename: [{ title: 'AM104 - Meeting Room 3', id: '6128B0438832' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '5',
        devicename: [{ title: 'EM500 LGT', id: '6126A14100247005' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '6',
        devicename: [{ title: 'EM500 - NH3 MIDDLE', id: '6126A42194728107' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '7',
        devicename: [{ title: 'EC5', id: '6126A21163930039' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '8',
        devicename: [{ title: 'Valve M - UC511', id: '6126A42194728107' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '9',
        devicename: [{ title: 'Garden SMT - EM500', id: '6126A42194728107' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },
    {
        key: '10',
        devicename: [{ title: 'Valve S - UC512', id: '6126A42194728107' }],
        permission: 'View',
        owner: 'solutions@milesight.com',
        visible: [],
        delete: []
    },

]// END
const dataTableTab4 = [
    {
        key: '1',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    },
    {
        key: '2',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    },
    {
        key: '3',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    }, {
        key: '4',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    },
    {
        key: '5',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    },
    {
        key: '6',
        status: 'Read',
        time: '2022-03-16 14:12:21',
        me: [{
            title: 'Hi, solutions@milesight.com has removed the sharing of the following device(s): ',
            id: 'Garden SMTC - EM500(6126A23289152025)'
        }],
        delete: []
    }
]

// END


//DATA TAG AND ADD DATA, COLUMN TABLE
const initialPanes = [
    { key: '1', title: 'Shared by me', column: columnsTab1, data: [], button: true },
    { key: '2', title: 'Shared with me', column: columnTab2, data: dataTableTab2, button: false },
    { key: '3', title: 'Transfer Devices', column: columnTab3, data: [], button: false },
    { key: '4', title: 'Notification', column: columnTab4, data: dataTableTab4, button: false },
];//END







class SharingCenter extends React.Component {
    newTabIndex = 0;
    dataStatusFilter = initialPanes[0].data;
    columnStatus = initialPanes[0].column;
    state = {
        activeKey: initialPanes[0].key,
        panes: initialPanes,
        loading: false,
        visible: false,
        loadingReject: false,
        visibleReject: false
    };
    //ADD AND REMOVE TAG
    onChange = activeKey => {
        this.setState({ activeKey });
    };


    render() {
        const { panes, activeKey,
        } = this.state;
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
                    <FormatListBulletedIcon className='icon-bar-show'></FormatListBulletedIcon>
                    <FormatListBulletedIcon className='icon-bar-close'></FormatListBulletedIcon>
                    <Grid item xs={10} sx={{ ...mainContent }} className='content-tab'>


                        <Tabs
                            onChange={this.onChange}
                            activeKey={activeKey}
                            className='tab-parrent'
                        >
                            {
                                panes.map(pane => (
                                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                        <TopTable
                                            title='Add New Member'
                                            icon='true'
                                            page='shareCenter'
                                            button={pane.button}
                                            link=''
                                            data={pane.selectTabData}
                                            defaultNameSelect={pane.defaultName}
                                            labelInput1='Name'
                                            labelInput2='Email Address'>
                                        </TopTable>
                                        <Table
                                            columns={pane.column}
                                            dataSource={pane.data}
                                            loading={false}
                                            pagination={{ pageSize: 8 }}
                                            scroll={{ y: 420 }}
                                            locale={{
                                                emptyText: (<span>
                                                    Please add a new share member first
                                                </span>)
                                            }} />
                                    </TabPane>
                                ))
                            }
                        </Tabs>



                    </Grid>
                </Grid>
            </div >
        );
    }
}
export default SharingCenter;
