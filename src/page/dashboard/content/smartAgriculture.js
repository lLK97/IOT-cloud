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
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ReactECharts from 'echarts-for-react';


import Canvas, { CanvasOffice } from '../box/canvas';
import BoxDashboard from '../box/box';
import { Grid, ListItem, Typography } from '@mui/material';
import TimeBox from '../box/timeBox';

const ResponsiveGridLayout = WidthProvider(Responsive);


const SmartAgriculture = () => {
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


const optionsMoisture = {
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
      type: 'category',
      boundaryGap: true,
      data: ['Apple', 'Pear']
    },
  yAxis: {
    type: 'value',
    scale: true,
    max: 200,
    min: 0,
   
  },
  series: [
    {
      name:'Apple',
      type:'bar',
      data:[60, 132]
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
    data:['illumination','illumination(1)']
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
    
    }
]
};


const optionsConductivity = {
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
        type: 'value',
        data: [0, 20, 40, 60, 80, 100]
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
        name:'conductivity',
        type:'line',
        data: [0, 20, 40, 60, 80, 100]
      },
      {
        name:'conductivity(1)',
        type:'line'
      
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
      scale: true,
      max: 1000,
      min: 0,
      boundaryGap: [0, 20]
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
      scale: true,
      max: 1000,
      min: 0,
      boundaryGap: [0, 20]
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
            <Grid container spacing={1} item lg={7} xs={12}>
                <Grid container item xs={12}>
                    <CanvasOffice 
                    title='Agriculture'
                    icon= {icon}
                    image= 'https://img.freepik.com/free-vector/rural-3d-farm-isometric-template-with-garden-field-farmer-house-greenhouse-game-app-illustration_88272-1441.jpg?w=2000'
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
                <Grid item lg={8} xs={12}>
                  <TimeBox
                  timeCurrent={timeCurrent}
                  dateCurrent={date}
                  >
                  </TimeBox>
                </Grid>
             </Grid>
             <Grid container spacing={1} item lg={3} xs={12} className='chart'>
                <Grid container item xs={12} className= "inner-chart">
                  <Typography className="title">
                  Activity Level (PIR)
                  </Typography>
                  <ReactECharts option={optionsMoisture} 
                  style={{ width: '100%' }}
                  />
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
             <Grid container spacing={1} item lg={3} xs={12} className='chart'>
                <Grid container item xs={12} className= "inner-chart">
                  <Typography className="title">
                  Conductivity
                  </Typography>
                  <ReactECharts option={optionsConductivity} 
                  style={{ width: '100%' }}
                  />
                </Grid>
             </Grid>
           
             <Grid container spacing={1} item lg={4} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                        Temperature
                      </Typography>
                        <ReactECharts option={optionsTemperature} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
            <Grid container spacing={1} item lg={4} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                      Humidity
                      </Typography>
                        <ReactECharts option={optionsHumidity} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
            <Grid container spacing={1} item lg={4} xs={12}  className='chart'>
                    <Grid container item xs={12} className= "inner-chart">
                      <Typography className="title">
                        CO2
                      </Typography>
                        <ReactECharts option={optionsCO2} 
                        style={{ width: '100%' }}
                        />
                    </Grid>
            </Grid>
          
        </Grid>
    );
}

export default SmartAgriculture;

