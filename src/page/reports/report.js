import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { mainContent } from '../../component/styleMIUI/styleMIUI';
import Head from '../../component/head/head';
import TopTable from '../myDevice/table/topTable';
import { Table, Space } from 'antd';
import '../../assets/css/component/tab.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// COLUMN
const columnsTab1 = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: icon =>
        (<div></div>
        )
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
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
        title: 'Enable',
        dataIndex: 'enable',
        key: 'enable',
        render: date => (<div></div>)
    },
    {
        title: 'Operation',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
            <div></div>
        )
    }
]


//DATA TAG AND ADD DATA, COLUMN TABLE
const initialPanes = [
    { column: columnsTab1, data: [], key: '1' }
];//END

class Reporter extends React.Component {
    state = {
        activeKey: initialPanes[0].key,
        panes: initialPanes,
    };

    render() {
        const { panes, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys
        };
        return (
            <div className="trigger contain">
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
                    <Grid item xs={10} sx={{ ...mainContent }}>
                        {
                            panes.map(pane => (
                                <div className="content-noTab">
                                    <TopTable
                                        filterData={this.filterDataToStatus}
                                        changeData={this.changeData}
                                        title='Add'
                                        icon='false'
                                        page='trigger'
                                        link='/reports/add'
                                    ></TopTable>
                                    <Table rowSelection={rowSelection}
                                        columns={pane.column}
                                        dataSource={pane.data}
                                        loading={false}
                                        locale={{
                                            emptyText: (<span>
                                                You have not added any devices.
                                            </span>)
                                        }} />
                                </div>
                            ))
                        }
                    </Grid>
                </Grid>
            </div >
        );
    }
}


export default Reporter;
