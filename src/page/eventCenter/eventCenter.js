import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Box, Grid, } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { mainContent, } from '../../component/styleMIUI/styleMIUI';
import { Table } from 'antd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import '../../assets/css/component/tab.scss';
import '../../assets/css/component/table.scss';
import '../../assets/css/pages/eventCenter.scss';

import Head from '../../component/head/head';
import TopTable from '../myDevice/table/topTable';
const { TabPane } = Tabs;

// COLUMN AND DATA TABLE

// COLUMN
const columnsTab1 = [
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
        title: 'Readings',
        dataIndex: 'reading',
        key: 'reading',
        render: item => (<div>{item}</div>)
    }
]
const columnTab2 = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: icon =>
        (<div>
            {icon}
        </div>
        )
    },
    {
        title: 'Trigger command title',
        dataIndex: 'trigger command title',
        key: 'trigger',
        render: item => (<div>{item}</div>)
    },

    {
        title: 'Trigger results',
        dataIndex: 'results',
        key: 'results',
        render: res => (<div>{res}</div>)
    }
]

const columnTab3 = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: icon =>
        (<div>
            {icon}
        </div>
        )
    },
    {
        title: 'Report title',
        dataIndex: 'Report title',
        key: 'report',
        render: item => (<div>{item}</div>)
    },

    {
        title: 'Recipients',
        dataIndex: 'recipients',
        key: 'recipients',
        render: res => (<div>{res}</div>)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: res => (<div>{res}</div>)
    }
]
// END

//  DATA TABLE
const dataTableTab1 = [
    {
        key: '1',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'AM104 - Meeting Room 3', id: '6128B0438832' }],
        reading: 'The value of battery is 10%, which is under threshold 20%.'
    },
    {
        key: '2',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'Refrigerator T1', id: '6128B0438832' }],
        reading: 'The device is online.'
    },
    {
        key: '3',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'Refrigerator T1', id: '6128B0438832' }],
        reading: 'The device is online.'
    },
    {
        key: '4',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'AM104 - Meeting Room 3', id: '6128B0438832' }],
        reading: 'The value of battery is 10%, which is under threshold 20%.'
    },
    {
        key: '5',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'EM300-ZLD', id: '6128B0438832' }],
        reading: 'The device is online.'
    },
    {
        key: '6',
        status: 'Unread',
        time: '2022-05-20 12:37:18',
        name: [{ title: 'EM300-ZLD', id: '6128B0438832' }],
        reading: 'The device is online.'
    }

]// END


// END

const device = [
    { label: 'Device Name', value: 'Device Name' },
    { label: 'Serial Number', value: 'Serial Number' },
    { label: 'Command Title', value: 'Command Title' }
]
const triggerLog = [
    { label: 'Command Title', value: 'Command Title' }
]
const recipient = [
    { label: 'Recipients', value: 'Recipients' }
]
//DATA TAG AND ADD DATA, COLUMN TABLE
const initialPanes = [
    { key: '1', title: 'Alarm Reporting', column: columnsTab1, data: dataTableTab1, selectTabData: device, defaultName: 'Device Name' },
    { key: '2', title: 'Trigger Log', column: columnTab2, data: [], selectTabData: triggerLog, defaultName: 'Command Title' },
    { key: '3', title: 'Reporting Records', column: columnTab3, data: [], selectTabData: recipient, defaultName: 'Recipients' }
];//END




class EventCenter extends React.Component {
    newTabIndex = 0;
    dataStatusFilter = initialPanes[0].data;
    columnStatus = initialPanes[0].column;
    state = {
        activeKey: initialPanes[0].key,
        panes: initialPanes,
        loading: false,
        visible: false,
        loadingReject: false,
        visibleReject: false,
        selectedRowsKeys: []
    };
    //ADD AND REMOVE TAG
    onChange = activeKey => {
        this.setState({ activeKey });
    };






    render() {
        const { panes, activeKey } = this.state;
        return (
            <div>
                <div className='content_wrapper'>
                    <Box>
                        <Head
                            userInfo='false' />
                    </Box>
                </div>
                <Grid container spacing={2} item xs={12} className='contain-box '>

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

                                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable} >
                                        <TopTable
                                            title='Dowload'
                                            icon='false'
                                            page='eventCenter'
                                            link=''
                                            data={pane.selectTabData}
                                            defaultNameSelect={pane.defaultName}
                                            name='top-event-center'
                                        >
                                        </TopTable>
                                        <Table
                                            columns={pane.column}
                                            dataSource={pane.data}
                                            loading={false}
                                            pagination={{ pageSize: 8 }}
                                            scroll={{ y: 420 }}
                                            locale={{
                                                emptyText: (<span>
                                                    You have not added any devices.
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
export default EventCenter;
