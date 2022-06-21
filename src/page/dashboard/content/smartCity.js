import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../../assets/css/component/block-dashboard.scss';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ReactECharts from 'echarts-for-react';


import Canvas, { CanvasOffice } from '../box/canvas';
import BoxDashboard from '../box/box';
import { Grid, ListItem, Typography } from '@mui/material';
import TimeBox from '../box/timeBox';
import WeatherBox from '../box/weatherBox';

const ResponsiveGridLayout = WidthProvider(Responsive);


const SmartCity = () => {
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



  const optionsHumidity = {
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
    xAxis: {
       
      },
    yAxis: {
      type: 'value',
      scale: true
    },
    series: [
     
  ]
  };


  
  const optionsCO2 = {
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
    xAxis: {
       
      },
    yAxis: {
      type: 'value',
      scale: true
    },
    series: [
     
  ]
  };

    
  const optionsPressure = {
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
    xAxis: {
       
      },
    yAxis: {
      type: 'value',
      scale: true
    },
    series: [
     
  ]
  };



    
  const optionsSpeedRain = {
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
    xAxis: {
       
      },
    yAxis: {
      type: 'value',
      scale: true
    },
    series: [
     
  ]
  };


  

const [timeCurrent, settimeCurrent] = React.useState('');
let today = new Date();

let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const getTime = () => {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  settimeCurrent(time)
}
setTimeout(getTime, 1000)

    return (
        <Grid container spacing={2} className="contain-dashboard">
            <Grid container spacing={1} item lg={6} xs={12}>
                <Grid container item xs={12}>
                    <CanvasOffice 
                    title='Smart City'
                    icon= {icon}
                    image='https://i.imgur.com/80ReF3X.jpg'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} item lg={6} xs={12}>
                {
                    contentBoxOffice.map((item,index)=>(
                        <Grid container item lg={3} xs={12} key={index}>
                            <BoxDashboard 
                            title = {item.title}
                            icon = {item.icon}
                            number = {item.number}
                            unit = {item.unit}
                            />
                          </Grid>
                    ))
                }
                <Grid item lg={6} xs={12}>
                  <TimeBox
                  timeCurrent={timeCurrent}
                  dateCurrent={date}
                  >
                  </TimeBox>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <WeatherBox
                  title='AM107 - Meeting Room 1-Illumination'
                  icon= {<WbSunnyOutlinedIcon />}
                  number='49'
                  unit='lux'
                  >   
                  </WeatherBox>
                </Grid>
             </Grid>
             
            <Grid container spacing={1} item lg={6} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                      Humidity
                      </Typography>
                        <ReactECharts option={optionsHumidity} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
            <Grid container spacing={1} item lg={6} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                        CO2
                      </Typography>
                        <ReactECharts option={optionsCO2} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
            <Grid container spacing={1} item lg={6} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                      Barometric Pressure
                      </Typography>
                        <ReactECharts option={optionsPressure} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
            <Grid container spacing={1} item lg={6} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                      Wind Speed/Rain
                      </Typography>
                        <ReactECharts option={optionsSpeedRain} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
          
        </Grid>
    );
}

export default SmartCity;

