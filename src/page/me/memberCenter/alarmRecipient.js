import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Table, Space } from 'antd';
import Head from '../../../component/head/head';
import Sidebar from '../../../component/sidebar/sidebar';
import TopTable from '../../myDevice/table/topTable';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const styleIcon = {
    color: 'var(--primary-light-blue)',
    position: 'relative',
    top: '5px'
}
// COLUMN
const iconEnable = () => {
    return (
        <div>Enable <InfoOutlinedIcon sx={{ ...styleIcon }} /></div>
    )
}
const iconOperation = () => {
    return (
        <div>Operation <InfoOutlinedIcon sx={{ ...styleIcon }} /></div>
    )
}
const columnsTab1 = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: icon =>
        (<Space>
            {icon}
        </Space>
        )
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: icon =>
        (<Space>
            {icon}
        </Space>
        )
    },
    {
        title: iconEnable,
        dataIndex: 'enable',
        key: 'enable',
        render: date => (<div></div>)
    },
    {
        title: iconOperation,
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
class AlarmRecipient extends React.Component {
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
            <div className='alarm-recipient' >

                {
                    panes.map(pane => (
                        <div className="content-noTab">
                            <TopTable
                                filterData={this.filterDataToStatus}
                                changeData={this.changeData}
                                title='Alarm Recipient'
                                icon='true'
                                link=''
                                search='false'
                                page='meTagAlarmRecipient'
                                labelInput1='Name'
                                labelInput2='Email'
                            ></TopTable>
                            <Table
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

            </div >
        );
    }
}

export default AlarmRecipient;
