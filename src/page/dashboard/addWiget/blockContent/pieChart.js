import React from 'react';
import { Box, List, ListItem, Grid,  Typography } from '@mui/material';
import { InfoCircleOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { Select } from 'antd';
const { Option } = Select;
const PieChart = () => {
    const optionsOverview = {
        title: {
          text: ''
        },
       
        tooltip : {
          trigger: 'axis'
        },
        grid: {
          top: 40,
          left: 50,
          right: 40,
          bottom: 50
        },
        series : [
          {
          name: '',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
            {value:335, name:'Online: 8'},
            {value:310, name:'Alarm: 3'},
            {value:634, name:'Ofline: 2'},
            {value:234, name:'Inactive 2'}
          ],
          itemStyle: {
            emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
          }
        ]
      };
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
                <Grid container spacing={1} item lg={6} xs={12} className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                    <Typography className="title">
                    Overview
                    </Typography>
                    <ListItem className="title-bottom">
                    Total 15
                    </ListItem>
                    <ReactECharts option={optionsOverview} 
                    style={{ width: '65%' }} 
                    />
                    </Grid>
             </Grid>
                <ListItem className='bottom-text'>
                    Note: this picture is a preview, please click Confirm" add this widget."
                </ListItem>
           </div>
        </div>
    );
}

export default PieChart;
