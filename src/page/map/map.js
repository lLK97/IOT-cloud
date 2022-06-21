import { Box, Button, Grid, ListItem} from '@mui/material';
import React from 'react';
import Head from '../../component/head/head';
import Sidebar from '../../component/sidebar/sidebar';
import { mainContent } from '../../component/styleMIUI/styleMIUI';
import { Gmaps, Marker} from 'react-gmaps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../assets/css/pages/map.scss';
import { Dropdown, Menu, Input, Select } from 'antd';
const { Search } = Input;
const { Option } = Select;
const position = [
    {
      id: 1,
      name: 'marker-online',
      x: "20.9943777",
      y: "105.8635175"
    },
    {
      id: 2,
      name: 'marker-alarm',
      x: "21.023999904",
      y: "105.851496594"
    },
    {
      id: 3,
      name: 'marker-offine',
      x: "21.02931200000003",
      y: "105.77480099999998"
    },
    {
        id: 4,
        name: 'marker-inactive',
        x: "21.060072000000016",
        y: "105.833555"
    }
  ];
  const button = [
    {
        key: 0,
        clas: 'icon-control--online', 
	    color: '#8ed7b7',
        title: 'Online'
    },
    {
        key: 1,
        clas: 'icon-control--offline', 
        color: '#fcabb0',
        title: 'Offine'
    },
    {
        key: 2,
        clas: 'icon-control--alarm', 
        color: '#b2ccde', 
        title: 'Alarm'
    },
    {
        key: 3,
        clas: 'icon-control--inactive', 
        color: '#8ab5d1',
        title: 'Inactive'
    }
  ];
  const inforDevice = [
      {
          status: 'Unassigned',
          group: 'Gateways',
          name: 'Garden - N1',
          id: '6412A5350066',
          color: '#ff7070',
          x: null,
          y: null
      },
      {
        status: 'Unassigned',
        group: 'Gateways',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: '#ff7070',
        x: null,
          y: null
      },
      {
        status: 'Assigned',
        group: 'Gateways',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: 'var(--primary-light-blue)',
        x: '40.730610',
        y: '-73.935242'
      },
      {
        status: 'Unassigned',
        group: 'Ungrouped',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: '#ff7070',
        x: null,
        y: null
      },
      {
        status: 'Unassigned',
        group: 'Ungrouped',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: '#ff7070',
        x: null,
          y: null
      },
      {
        status: 'Unassigned',
        group: 'Ungrouped',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: '#ff7070',
        x: null,
        y: null
      },
      {
        status: 'Unassigned',
        group: 'Ungrouped',
        name: 'EM500 LGT',
        id: '6126A14100247005',
        color: '#ff7070',
        x: null,
        y: null
      }
  ]
  
const params = [{ v: '3.exp', urlToken: 'AIzaSyBeOb MHrtHD_xPNTNbksXPZ7wjLPsdW8k4' }];
const activeMarker = (clas,key)=>{
    const status = ['icon-control--online', 'icon-control--offline', 'icon-control--alarm', 'icon-control--inactive'];
    const listImgMarker = document.querySelector('[aria-label="Map"]').getElementsByTagName('img');
    if(status.includes(clas)){
        listImgMarker[key].style.display != 'none' ? listImgMarker[key].style.display ="none" : listImgMarker[key].style.display ="";
       
    }
}
 const BoxItem = props => {
    return (
        <Grid container spacing={2} className='list-item'>
            <Grid item xs={4} className='status' sx={{color: `${props.color}`}}>
                {props.status}
            </Grid>
            <Grid item xs={8} className = 'text'>
                <Grid item xs={12} className='name'>
                    {props.name}
                </Grid>
                <Grid item xs={12} className='id'>
                    {props.id}
                </Grid>
            </Grid>
        </Grid>
    )
}

class MapGoogle extends React.Component {
    state = {
        visible: false,
        selectValue: null,
        lat: position[0].x,
        lng: position[0].y
      };

      handleMenuClick = e => {
        if (e.key === '') {
          this.setState({ visible: false });
        }
        
      };
    
      handleVisibleChange = flag => {
        this.setState({ visible: flag });
      };
    onSelect(selectVal) {
        if(selectVal=='All Devices'){
            this.setState({
                selectValue: [...inforDevice]
            })
        } else{
            this.setState({
                selectValue: inforDevice.filter(el => el.group == selectVal)
            })
        }
    }
    listDevice = () =>{
        return(
            <Menu
            onClick={this.handleMenuClick}
            className='dropdown-bar'
            >
                <Menu.Item>
                    <ListItem className="searchbox-map">
                        <Select defaultValue='All Devices' onChange = {(value)=>this.onSelect(value)}>
                            <Option value='All Devices'>All Devices</Option>
                            <Option value='Gateways'>Gateways</Option>
                            <Option value='Ungrouped'>Ungrouped</Option>
                        </Select>
                        <Search placeholder="Device Name/SN" />
                    </ListItem>
                </Menu.Item>
                <Menu.Item className='contain-device'>
                {
                 this.state.selectValue != null ? (this.state.selectValue.map((item, index)=>(
                        <BoxItem key={index}
                            status={item.status}
                            name= {item.name}
                            id = {item.id}
                            color = {item.color}
                            // onClick={this.onLocationDevice(item.x, item.y)}
                        />
                    ))) : (inforDevice.map((item, index)=>(
                        <BoxItem key={index}
                            status={item.status}
                            name={item.name}
                            id = {item.id}
                            color = {item.color}
                            // onClick={this.onLocationDevice(item.x, item.y)} 
                        />
                    )))
                }
                </Menu.Item>
            </Menu>
        )
    }
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log("onDragEnd", e);
    }

    onCloseClick() {
        console.log("onCloseClick");
    }

    onClick(e) {
        console.log("onClick", e);
    }
   
    render() {
        return (
            <div>
                <div className='content_wrapper'>
                    <Box>
                        <Head
                            userInfo='false' />
                    </Box>
                </div>
                <Grid container spacing={2} item xs={12} className='contain-box'>

                    <Sidebar />

                    <Grid item xs={10} sx={{ ...mainContent }}>
                        <FormatListBulletedIcon className='icon-bar-show'></FormatListBulletedIcon>
                        <FormatListBulletedIcon className='icon-bar-close'></FormatListBulletedIcon>
                        <Gmaps
                            lat={this.state.lat}
                            lng={this.state.lng}
                            zoom={12}
                            loadingMessage={"Waitting ....."}
                            params={params}
                            onMapCreated={this.onMapCreated}
                            options={{
                                gestureHandling: "greedy",
                                zoomControl: true
                            }}
                            className='gmaps'>
                             {position.map((item, i) => {
                                 return (
                                        <Marker
                                            title={item.name}
                                            lat={item.x}
                                            lng={item.y}
                                        />
                                 )
                             })
                            }
                            <div className="container-control">
                            {
                                  button.map((item, index)=>(
                                    <Button className={`icon-control icon-position ${item.clas}`} onClick={()=>activeMarker(item.clas, item.key)} key={index}>
                                        <LocationOnIcon sx={{ color: item.color, fontSize: '48px' }} />
                                        <p>{item.title}</p>
                                    </Button>
                                  ))
                              }
                            </div>
                            <Button color='inherit' className='icon-control icon-control--navbar'>
                                <Dropdown overlay={this.listDevice} 
                                trigger = {['click']} 
                                onVisibleChange={this.handleVisibleChange}
                                visible={this.state.visible}
                                >
                                    <FormatListBulletedIcon sx={{ fontSize: '40px' }} />
                                </Dropdown>
                            </Button>
                        </Gmaps>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default MapGoogle;
