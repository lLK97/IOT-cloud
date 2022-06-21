import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../../assets/css/component/block-dashboard.scss';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ReactECharts from 'echarts-for-react';


import Canvas, { CanvasOffice } from '../box/canvas';
import BoxDashboard from '../box/box';
import { Grid, ListItem, Typography } from '@mui/material';
import TimeBox from '../box/timeBox';

const ResponsiveGridLayout = WidthProvider(Responsive);


const SmartOffice = () => {
    const contentBoxOffice = [
        {
            title: 'AM107 - RD Region 2-Activity Level (PIR)',
            icon: <AccessibilityNewIcon />,
            number: '0',
            unit: ''
         },
         {
            title: 'AM107 - RD Region 2-CO2',
            icon: <CloudQueueOutlinedIcon />,
            number: '372',
            unit: 'ppm'
         },
         {
            title: 'AM107 - RD Region 2-',
            icon: <WaterOutlinedIcon />,
            number: '0',
            unit: 'ppb'
         },
         {
            title: 'AM107 - RD Region 2-Humidity',
            icon: <OpacityOutlinedIcon />,
            number: '59.5',
            unit: '%'
         },
         {
            title: 'AM107 - RD Region 2-Barometric Pressure',
            icon: <WaterOutlinedIcon />,
            number: '1013.1',
            unit: 'hPa'
         },
         {
            title: 'EM300-ZLD-Status',
            icon: <LightModeOutlinedIcon />,
            number: '18',
            unit: 'lux'
         },
         {
            title: 'AM107 - RD Region 2-Illumination',
            icon: <PausePresentationOutlinedIcon />,
            number: 'Normal',
            unit: ''
         },
         {
            title: 'EM300-MCS-Status',
            icon: <MeetingRoomIcon />,
            number: 'Open',
            unit: ''
         },
         {
            title: 'EM300-MCS-Status',
            icon: <LocationSearchingIcon />,
            number: 'Open',
            unit: ''
         }
]
const icon = [
    <DeviceThermostatOutlinedIcon />,
    <OpacityOutlinedIcon />,
    <AccessibilityNewOutlinedIcon />, 
    <WbSunnyOutlinedIcon />, 
    <FilterDramaOutlinedIcon />,
    <LocationOnOutlinedIcon />
]

const optionsActivity = {
  title: {
    text: ''
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['PIR','Activity Level (PIR1)','Activity Level (PIR2)','Activity Level (PIR3)']
  },
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50
  },
  xAxis: {
      type: 'value',
      boundaryGap: true,
      data: (function (){
        let now = new Date();
        let res = [];
        let len = 50;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          now = new Date(now - 2000);
        }
        return res;
      })()
    },
  yAxis: {
    type: 'value',
    scale: true,
    max: 1,
    min: 0,
    boundaryGap: [0.2, 0.2]
  },
  series: [
    
    {
      name:'PIR',
      type:'line',
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'Activity Level (PIR1)',
      type:'line',
      data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
      name:'Activity Level (PIR2)',
      type:'line',
      data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
      name:'Activity Level (PIR3)',
      type:'line',
      data:[50, 250, 120, 180, 300, 280, 510]
    }
]
};

const optionsTemperature = {
  title: {
    text: ''
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['Temperature','Temperature(1)','Temperature(2)','Temperature(3)']
  },
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50
  },
  xAxis: {
      type: 'value',
      boundaryGap: true,
      data: (function (){
        let now = new Date();
        let res = [];
        let len = 50;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          now = new Date(now - 2000);
        }
        return res;
      })()
    },
  yAxis: {
    type: 'value',
    scale: true,
    max: 1000,
    min: 0,
    boundaryGap: [0, 20]
  },
  series: [
    
    {
      name:'Temperature',
      type:'line',
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'Temperature(1)',
      type:'line'
    
    },
    {
      name:'Temperature(2)',
      type:'line'
    }
]
};

const optionsIllumination = {
  title: {
    text: ''
  },
 
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['illumination','illumination(1)','illumination(2)','illumination(3)']
  },
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50
  },
  xAxis: {
      type: 'value',
      boundaryGap: true,
      data: (function (){
        let now = new Date();
        let res = [];
        let len = 50;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          now = new Date(now - 2000);
        }
        return res;
      })()
    },
  yAxis: {
    type: 'value',
    scale: true,
    max: 500,
    min: 0,
    boundaryGap: [0, 20]
  },
  series: [
    
    {
      name:'illumination',
      type:'line',
      data:[0, 500, 200, 400, 0]
    },
    {
      name:'illumination(1)',
      type:'line'
    
    },
    {
      name:'illumination(2)',
      type:'line'
    },
    {
      name:'illumination(3)',
      type:'line'
    }
]
};


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
      {value:335, name:'Overview'},
      {value:310, name:'Overview(1)'},
      {value:234, name:'Overview(2)'}
   
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


const [timeCurrent, settimeCurrent] = React.useState('');
let today = new Date();

let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const getTime = () => {
  let today = new Date();
  let hours = today.getHours() >10 ? (today.getHours()) : ('0'+today.getHours());
  let minutes = today.getMinutes() >10 ? (today.getMinutes()) : ('0'+today.getMinutes());
  let seconds = today.getSeconds() >10 ? (today.getSeconds()) : ('0'+today.getSeconds());
  let time = hours + ":" + minutes + ":" + seconds;
  settimeCurrent(time)
}
setTimeout(getTime, 1000)

    return (
        <Grid container spacing={2} className="contain-dashboard">
            <Grid container spacing={1} item lg={7} xs={12}>
                <Grid container item xs={12}>
                    <CanvasOffice 
                    title='Smart Office/Building'
                    icon= {icon}
                    image='https://img.freepik.com/vector-gratis/estudio-diseno-oficina-isometria-personas-que-trabajan_277904-150.jpg?w=2000'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} item lg={5} xs={12}>
                {
                    contentBoxOffice.map((item,index)=>(
                        <Grid container item lg={4} xs={12} key={index}>
                            <BoxDashboard 
                            title = {item.title}
                            icon = {item.icon}
                            number = {item.number}
                            unit = {item.unit}
                            />
                          </Grid>
                    ))
                }
             </Grid>
             <Grid container spacing={1} item lg={6} xs={12} className='chart'>
                <Grid container item xs={12} className= "inner-chart">
                  <Typography className="title">
                  Activity Level (PIR)
                  </Typography>
                  <ReactECharts option={optionsActivity} 
                  style={{ width: '100%', height: '80%' }}
                  />
                </Grid>
             </Grid>
             <Grid container spacing={3} item lg={6} xs={12}>
                <Grid item lg={6} xs={12}>
                  <TimeBox
                  timeCurrent={timeCurrent}
                  dateCurrent={date}
                  >
                  </TimeBox>
                </Grid>
                <Grid item lg={3} xs={12} className='box-bottom'>
                    <BoxDashboard 
                      title = 'EM300-TH-Humidity'
                      icon =  {<WaterOutlinedIcon />}
                      number = '97'
                      unit =  '%'
                    />
                  </Grid>
                  <Grid item lg={3} xs={12} className='box-bottom'>
                      <BoxDashboard 
                        title = 'EM300-TH-Humidity'
                        icon = {   <DeviceThermostatOutlinedIcon />}
                        number = '9.3'
                        unit = 'C'
                      />
                  </Grid>
                  <Grid container spacing={1} item xs={12} className='chart'>
                  <Grid container item xs={12}>
                    <Grid container item xs={12} className= "inner-chart" >
                   
                      <Typography className="title">
                        Temperature
                      </Typography>
                        <ReactECharts option={optionsTemperature} 
                        style={{ width: '100%' }}
                        />
                    
                    </Grid>
                  </Grid>
                </Grid>
             </Grid>
             <Grid container spacing={1} item lg={6} xs={12} className='chart'>
                <Grid container item xs={12} className= "inner-chart">
                  <Typography className="title">
                   illumination
                  </Typography>
                  <ReactECharts option={optionsIllumination} 
                  style={{ width: '100%' }}
                  />
                </Grid>
             </Grid>
             <Grid container spacing={1} item lg={6} xs={12} className='chart'>
                <Grid container item xs={12} className= "inner-chart">
                  <Typography className="title">
                  Overview
                  </Typography>
                 <ListItem className="title-bottom">
                   In this Dashboard 9
                 </ListItem>
                  <ReactECharts option={optionsOverview} 
                  style={{ width: '100%' }}
                  />
                </Grid>
             </Grid>
        </Grid>
    );
}

export default SmartOffice;
