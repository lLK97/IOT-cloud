import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Modal, Button } from 'antd';
import { Box, Grid, ListItem, TextField, Typography } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { mainContent, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Table, Space, Switch } from 'antd';

import '../../assets/css/component/tab.scss';
import '../../assets/css/component/table.scss'
import TopTable from './table/topTable';
import SignalCellularConnectedNoInternet0BarOutlined from '@mui/icons-material/SignalCellularConnectedNoInternet0BarOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Head from '../../component/head/head';
const { TabPane } = Tabs;


// COLUMN AND DATA TABLE

// COLUMN
const columnsTab1 = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: icon =>
        (<Space>
            {icon}
        </Space>
        )
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: lists => (
            lists.map((item) => (
                <ul className='name-table'>
                    <li className='title'>{item.title}</li>
                    <li className='id'>{item.id}</li>
                </ul>
            ))
        )
    },
    {
        title: 'Interface Status',
        dataIndex: 'interface',
        key: 'interface',
        render: lists => (
            lists.map((el) => (
                <Grid className='interface-wrap' container spacing={5}>{
                    el.listInterface.map((item) => (
                        <Grid className='interface-table' item xs={3}>
                            <Grid className='item left' item xs={12}>
                                <Typography className='title'>{item.title}</Typography>
                                <Typography className='des'>{item.des}</Typography>
                            </Grid>
                            <Grid className='item right' item xs={12}>
                                <Typography>{item.icon}</Typography>
                            </Grid>
                        </Grid>
                    ))
                }
                </Grid>
            )))
    },
    {
        title: 'Update Time',
        dataIndex: 'update',
        key: 'update',
        render: date => (<div>{date}</div>)
    },
    {
        title: '',
        dataIndex: 'tool',
        key: 'tool',
        render: () => (
            <ul className='list-tool'>
                <li><SettingsApplicationsSharpIcon></SettingsApplicationsSharpIcon></li>
                <li><ShowChartSharpIcon></ShowChartSharpIcon></li>
                <li><InfoOutlinedIcon></InfoOutlinedIcon></li>
            </ul>
        )
    }
]
const columnTab2 = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: icon =>
        (<Space>
            {icon}
        </Space>
        )
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: lists => (
            lists.map((item) => (
                <ul className='name-table'>
                    <li className='title'>{item.title}</li>
                    <li className='id'>{item.id}</li>
                </ul>
            ))
        )
    },
    {
        title: 'Associated Devices (Joined/Not Joined/Failed)',
        dataIndex: 'associated',
        key: 'associated',
        render: lists => (
            lists.map((el) => (
                <Grid className='interface-wrap' container spacing={5}>{
                    el.listInterface.map((item) => (
                        <Grid className='interface-table' item xs={3}>
                            <Grid className='item left' item xs={12}>
                                <Typography className='title'>{item.title}</Typography>
                                <Typography className='des'>{item.des}</Typography>
                            </Grid>
                            <Grid className='item right' item xs={12}>
                                <Typography>{item.icon}</Typography>
                            </Grid>
                        </Grid>
                    ))
                }
                </Grid>
            )))
    },
    {
        title: 'Last Updated',
        dataIndex: 'update',
        key: 'update',
        render: date => (<div>{date}</div>)
    },
    {
        title: '',
        dataIndex: 'tool',
        key: 'tool',
        render: () => (
            <ul className='list-tool'>
                <li><SettingsApplicationsSharpIcon></SettingsApplicationsSharpIcon></li>
                <li><ShowChartSharpIcon></ShowChartSharpIcon></li>
                <li><InfoOutlinedIcon></InfoOutlinedIcon></li>
            </ul>
        )
    }
]
// END

//  DATA TABLE
const dataTableTab1 = [{
    key: '1',
    status: <SignalCellular4BarIcon sx={{ color: '#76d9af' }} />,
    statusDevice: 'online',
    name: [{ title: 'Garden - N1', id: '6412A5350066' }],
    interface: [
        {
            listInterface: [
                { title: '4.71', des: 'C', icon: '' },
                { title: '7104ux', des: 'illumination', icon: '' },
                { title: '12,9%', des: 'Soil Moisture', icon: '' },
                { title: '80℃', des: 'Temperature', icon: '' },
                { title: '4mg/kg', des: 'N', icon: '' },
                { title: '2mg/kg', des: 'P', icon: '' },
                { title: '11mg/kg', des: 'P', icon: '' },
            ]
        }
    ],
    update: '2021-08-21 08:38',
    tool: ''
},
{
    key: '2',
    status: <AccessAlarmsOutlinedIcon sx={{ color: '#fa737c', marginRight: '5px' }} />,
    statusDevice: 'alarm',
    name: [{ title: 'Garden - N1', id: '6412A5350066' }],
    interface: [
        {
            listInterface: [
                { title: '4.71', des: 'C', icon: '' },
                { title: '7104ux', des: 'illumination', icon: '' },
                { title: '12,9%', des: 'Soil Moisture', icon: '' },
                { title: '80℃', des: 'Temperature', icon: '' },
                { title: '4mg/kg', des: 'N', icon: '' },
                { title: '2mg/kg', des: 'P', icon: '' },
                { title: '11mg/kg', des: 'P', icon: '' },
            ]
        }
    ],
    update: '2021-08-21 08:38',
    tool: ''
},
{
    key: '3',
    status: <SignalCellularConnectedNoInternet0BarOutlined sx={{ marginRight: '5px' }} />,
    statusDevice: 'offline',
    name: [{ title: 'Garden - N1', id: '6412A5350066' }],
    interface: [
        {
            listInterface: [
                { title: '4.71', des: 'C', icon: '' },
                { title: '7104ux', des: 'illumination', icon: '' },
                { title: '12,9%', des: 'Soil Moisture', icon: '' },
                { title: '80℃', des: 'Temperature', icon: '' },
                { title: '4mg/kg', des: 'N', icon: '' },
                { title: '2mg/kg', des: 'P', icon: '' },
                { title: '11mg/kg', des: 'P', icon: '' },
            ]
        }
    ],
    update: '2021-08-21 08:38',
    tool: ''
},
{
    key: '4',
    status: <HighlightOffOutlinedIcon sx={{ marginRight: '5px' }} />,
    statusDevice: 'inactive',
    name: [{ title: 'Garden - N1', id: '6412A5350066' }],
    interface: [
        {
            listInterface: [
                { title: '4.71', des: 'C', icon: '' },
                { title: '7104ux', des: 'illumination', icon: '' },
                { title: '12,9%', des: 'Soil Moisture', icon: '' },
                { title: '80℃', des: 'Temperature', icon: '' },
                { title: '4mg/kg', des: 'N', icon: '' },
                { title: '2mg/kg', des: 'P', icon: '' },
                { title: '11mg/kg', des: 'P', icon: '' },
            ]
        }
    ],
    update: '2021-08-21 08:38',
    tool: ''
}
]// END




//DATA BUTTON 
const buttonDevice = [
    { status: 'online', title: 'Normal', icon: <CheckCircleOutlinedIcon sx={{ color: '#76d9af', marginRight: '5px' }} />, statusbutton: 'active-check' },
    { status: 'alarm', title: 'Alarm', icon: <AccessAlarmsOutlinedIcon sx={{ color: '#fa737c', marginRight: '5px' }} />, statusbutton: 'active-alarm' },
    { status: 'offline', title: 'Offine', icon: <SignalCellularConnectedNoInternet0BarOutlined sx={{ marginRight: '5px' }} />, statusbutton: 'active-gray' },
    { status: 'inactive', title: 'Inactive', icon: <HighlightOffOutlinedIcon sx={{ marginRight: '5px' }} />, statusbutton: 'active-gray' }
]
const buttonGateways = [
    { status: 'online', title: 'Normal', icon: <CheckCircleOutlinedIcon sx={{ color: '#76d9af', marginRight: '5px' }} />, statusbutton: 'active-check' },
    { status: 'offline', title: 'Offine', icon: <SignalCellularConnectedNoInternet0BarOutlined sx={{ marginRight: '5px' }} />, statusbutton: 'active-gray' },
    { status: 'inactive', title: 'Inactive', icon: <HighlightOffOutlinedIcon sx={{ marginRight: '5px' }} />, statusbutton: 'active-gray' }
]
// END
//DATA TAG AND ADD DATA, COLUMN TABLE
const initialPanes = [
    { title: 'Device', column: columnsTab1, data: dataTableTab1, key: '1', button: buttonDevice },
    { title: 'Gateways', column: columnTab2, data: [], key: '2', button: buttonGateways }
];//END
class MyDevice extends React.Component {
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

    onEdit = (targetKey, action) => {
        let permit = true;
        if (permit == false) {
            this[action](targetKey);
        }
        if (permit = true) {
            this.setState({
                visible: true
            })
        }
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: 'New Tab', data: [], column: [], key: activeKey });
        this.setState({
            panes: newPanes,
            activeKey,
        });
    };

    remove = targetKey => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        this.setState({
            panes: newPanes,
            activeKey: newActiveKey,
        });
    };//END

    //SHOW HIDE ADD TAG 
    handleCancel = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 1000);
    };

    handleAdd = () => {
        this.setState({ visible: false });
    };//end

    //SHOW HIDE ADD TAG REJECT
    showModalReject = () => {
        this.setState({
            visibleReject: true
        })
    }
    handleCancelReject = () => {
        this.setState({ loadingReject: true });
        setTimeout(() => {
            this.setState({
                loadingReject: false,
                visibleReject: false
            });
        }, 1000);
    };

    handleConfirm = () => {
        this.setState({ visibleReject: false });
    };//   END

    /// SELECTED 

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };//END

    filterDataToStatus = (status) => {
        let dataFilterr;
        if (status == '') {
            dataFilterr = initialPanes[0].data;
            this.dataStatusFilter = dataFilterr;
        } else {
            dataFilterr = initialPanes[0].data.find((el) => el.statusDevice == status);
            this.dataStatusFilter = [dataFilterr];

        }
    }
    changeData = () => {
        const dataFilter = [
            { title: 'Device', column: this.columnStatus, data: this.dataStatusFilter, key: '1', button: buttonDevice },
            { title: 'Gateways', column: this.columnStatus, data: [], key: '2', button: buttonGateways }
        ]
        this.setState({ panes: dataFilter })
        // console.log(initialPanes);zxdva
        // console.log(dataFilter);
    }

    render() {
        const { panes, activeKey,
            visible, loading,
            loadingReject, visibleReject, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };

        return (
            <div>
                <div className='content_wrapper'>
                    <Box>
                        <Head
                            userInfo='false' />
                    </Box>
                </div>
                <Grid container spacing={2} item xs={12} className='contain-box' >
                    <Sidebar />
                    <FormatListBulletedIcon className='icon-bar-show'></FormatListBulletedIcon>
                    <FormatListBulletedIcon className='icon-bar-close'></FormatListBulletedIcon>
                    <Grid sx={{ ...mainContent }} className='content-tab'>
                        <Tabs
                            type="editable-card"
                            onChange={this.onChange}
                            activeKey={activeKey}
                            onEdit={this.onEdit}
                            className='tab-parrent'
                        >

                            {
                                panes.map(pane => (
                                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                        <TopTable
                                            dataButton={pane.button}
                                            filterData={this.filterDataToStatus}
                                            changeData={this.changeData}
                                            title='New Device'
                                            icon='true'
                                            page='myDevice'
                                            hiddenList='true'
                                            button={true}
                                            labelInput1='SN'
                                            labelInput2='Name'
                                            number={pane.key}
                                        ></TopTable>
                                        <Table rowSelection={rowSelection}
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

                        {/* MODAL */}

                        <Modal
                            visible={visible}
                            title='Add New Group'
                            onOk={this.handleAdd}
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="back" onClick={this.handleCancel} className='button-model cancel'>
                                    Return
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={this.showModalReject} className='button-model confirm'>
                                    Add
                                </Button>
                            ]}
                        >
                            <ListItem>
                                <div className='display-name-login'><span className='dots'>*</span> Email Address</div>
                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal }} />
                            </ListItem>
                        </Modal>
                        {/* END MODAL */}
                        
                        {/* //MODAL REJECT  */}
                        <Modal
                            visible={visibleReject}
                            title=''
                            onOk={this.showModalReject}
                            onCancel={this.handleCancelReject}
                            className='modal-reject'
                            footer={[
                                <Button key="back" onClick={this.handleCancelReject} className='button-model cancel'>
                                    Cancel
                                </Button>,
                                <Button key="submit" type="primary" loading={loadingReject} onClick={this.handleConfirm} className='button-model confirm'>
                                    Submit
                                </Button>
                            ]}>
                            <p>Operation failed! This is a demo account which has no permission to operate</p>

                        </Modal>



                    </Grid >

                </Grid >
            </div >
        );
    }
}



export default MyDevice;
