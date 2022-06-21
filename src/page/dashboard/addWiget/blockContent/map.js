import { Table } from 'antd';
import Search from 'antd/lib/input/Search';
import React from 'react';

const Map = () => {
    const [selectRowKey, setselectRowKey] = React.useState();
    const rowSelection = {
        selectRowKey
    }
    const column = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model'
        },
        {
            title: 'SN',
            dataIndex: 'sn',
            key: 'sn' 
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        }
    ]
    const dataTable = [
        {
            key: '1', 
            name : 'Garden - N1', 
            model: 'UC501',
            sn: '6412A5350066',
            status: 'Unassigned' 
        },
        {
            key: '2', 
            name : 'EM500 LGT', 
            model: 'EM500-LGT-RY',
            sn: '	6126A14100247005',
            status: 'Unassigned' 
        },
        {
            key: '3', 
            name : 'EM500 - SMT', 
            model: 'EM500-SMTC',
            sn: '6126A39813542023',
            status: 'Unassigned' 
        },
        {
            key: '4', 
            name : 'Valve M - UC511', 
            model: 'UC511-DI',
            sn: '6414A50247120023',
            status: 'Unassigned' 
        },
        {
            key: '5', 
            name : 'Valve S - UC512', 
            model: 'UC512-DI',
            sn: '6415A51046560023',
            status: 'Unassigned' 
        },
        {
            key: '6', 
            name : 'EM500 PP', 
            model: 'EM500-PP-G1/4F-4780',
            sn: '6126A39202675029',
            status: 'Unassigned' 
        },
        {
            key: '7', 
            name : 'EM500 - SMTC', 
            model: 'EM500-SMTC',
            sn: '6126A21658902021',
            status: 'Unassigned' 
        },
        {
            key: '8', 
            name : 'AM104 - Meeting Room 3', 
            model: 'AM107',
            sn: '6128B0438832',
            status: 'Unassigned' 
        },
    ]
    return (
        <div className='content-widget widgetMap'>
            <Search placeholder='Search' className='search-box'></Search>
            <Table
            rowSelection={rowSelection}
            columns= {column}
            dataSource = {dataTable}
            ></Table>
        </div>
    );
}

export default Map;
