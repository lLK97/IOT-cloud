import { List, Tabs } from 'antd';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import { ListItem } from '@mui/material';
import Search from 'antd/lib/input/Search';
import Clock from './blockContent/clock';
import Map from './blockContent/map';

import CustomImage from './blockContent/customImage';
import LineChart from './blockContent/lineChart';
import ColumnChart from './blockContent/columnChart';
import AlarmList from './blockContent/alarmList';
import PieChart from './blockContent/pieChart';
import Battery1BarRoundedIcon from '@mui/icons-material/Battery1BarRounded';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import { Select } from 'antd';
import BlockDevice from './blockContent/blockDevice/blockDevice';
const { TabPane } = Tabs;

const { Option } = Select;


const AddWiget = () => {
    const tabSystem =[{
        icon: <AccessTimeIcon />,
        name: 'Clock', 
        content: <Clock />
    },
    {   
        icon: <AddLocationAltIcon />,
        name: 'Map',
        content: <Map />
    },
    {
        icon: <BrokenImageOutlinedIcon />,
        name: 'Custom Image',
        content: <CustomImage />
    },
    {
        icon: <ShowChartOutlinedIcon />,
        name: ' Line Chart', 
        content: <LineChart />
    },
    {
        icon: <BarChartOutlinedIcon />,
        name: ' Column Chart',
        content: <ColumnChart />
    },
    {
        icon: <AccessAlarmOutlinedIcon />,
        name: ' Alarm List',
        content: <AlarmList />
    },
    {
        icon: <PieChartOutlineOutlinedIcon />,
        name: ' Pie Chart',
        content: <PieChart />
    }
]
    const blockDevice1 = [
        {
            title: 'Channel 1',
            default: 'Temperature',
            innerOption: [{
              title: 'Temperature', 
              icon: <Battery1BarRoundedIcon />
            },
            {
                title: 'Humidity', 
                icon: <OpacityIcon />
            },
            {
                title: 'illumination', 
                icon: <WbSunnyOutlinedIcon />
            },
            {
                title: 'Others',
                icon: <ViewCompactOutlinedIcon />
            }]

        },
        {
            title: 'Channel 2', 
            default: 'Temperature',
            innerOption: [{
              title: 'Temperature', 
              icon: <Battery1BarRoundedIcon />
            },
            {
                title: 'Humidity', 
                icon: <OpacityIcon />
            },
            {
                title: 'illumination', 
                icon: <WbSunnyOutlinedIcon />
            },
            {
                title: 'Others',
                icon: <ViewCompactOutlinedIcon />
            }]

        },
        {
            title: 'Channel 3',
            default: 'Temperature',
            innerOption: [{
              title: 'Temperature', 
              icon: <Battery1BarRoundedIcon />
            },
            {
                title: 'Humidity', 
                icon: <OpacityIcon />
            },
            {
                title: 'illumination', 
                icon: <WbSunnyOutlinedIcon />
            },
            {
                title: 'Others',
                icon: <ViewCompactOutlinedIcon />
            }]

        },
        {
            title: 'Channel 4',
            default: 'Temperature',
            innerOption: [{
              title: 'Temperature', 
              icon: <Battery1BarRoundedIcon />
            },
            {
                title: 'Humidity', 
                icon: <OpacityIcon />
            },
            {
                title: 'illumination', 
                icon: <WbSunnyOutlinedIcon />
            },
            {
                title: 'Others',
                icon: <ViewCompactOutlinedIcon />
            }]

        }
    ]
    
    const blockDevice2 = [
        {
            title: 'Channel 1',
            default: 'Temperature',
            innerOption: [{
              title: 'Temperature', 
              icon: <Battery1BarRoundedIcon />
            }]

        }]
    const blockDevice3 = [
        {
            title: 'Channel 1',
            default: 'Humidity',
            innerOption: [ {
                title: 'Humidity', 
                icon: <OpacityIcon />
            }]

        }]
    const blockDevice4 = [
        {
            title: 'Channel 1',
            default: 'illumination',
            innerOption: [ {
                title: 'illumination', 
                icon: <WbSunnyOutlinedIcon />
            }]

        }]
    const Device = [
        {
            title: 'Garden - N1',id: '6412A5350066', content: <BlockDevice arrayOption={blockDevice1} />
        },
        {
            title: 'EM500 LGT', id: '6126A14100247005', content: <BlockDevice arrayOption={blockDevice2} />
        },
        {
            title: 'EM500 - SMT', id: '6126A39813542023', content: <BlockDevice arrayOption={blockDevice3} />
        },
        {
            title: 'Valve M - UC511', id: '6414A50247120023', content: <BlockDevice arrayOption={blockDevice4} />
        }
    ]
    return (
        <div className="tab-content">
            <Tabs
            defaultActiveKey='1'
            >
                <TabPane tab='System Widget' key ='1'>
                    <Tabs
                    defaultActiveKey='2'
                    tabPosition='left'
                    className='tab-system'>
                        {
                            tabSystem.map((item, index) =>(
                                <TabPane
                                key={index}
                                className='item-content-widget'
                                tab={
                                    <ListItem>
                                    {item.icon}
                                        <span> {item.name}</span>
                                    </ListItem>
                                }>
                                  {
                                    item.content
                                  }
                                </TabPane>
                            ))
                        }
                    </Tabs>
                </TabPane>
                <TabPane tab='Device List' key='2'>
                    <Tabs
                    defaultActiveKey='3'
                    tabPosition='left'
                    className='tab-device'>
                        <TabPane
                        tab={
                            <Search placeholder="input search text" style={{marginLeft: -20}}></Search>
                        }
                        >
                        </TabPane>
                        {
                            Device.map((item,index)=>(
                                <TabPane
                                key={index}
                                tab={
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.id}</p>
                                    </div>
                                }>
                                    {
                                    item.content
                                  }
                                </TabPane>
                            ))
                        }
                    </Tabs>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default AddWiget;
