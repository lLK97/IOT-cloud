import { List, ListItem, ListItemText, Grid } from '@mui/material';
import React from 'react';
import { sidebar, itemSidebar } from '../styleMIUI/styleMIUI';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PlaceIcon from '@mui/icons-material/Place';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link } from 'react-router-dom';
import '../../assets/css/component/sidebar.scss';

const Sidebar = () => {
    const dataMenu = [
        {
            name: 'Dashboard',
            route: '/Dashboard',
            icon: <HistoryToggleOffIcon></HistoryToggleOffIcon>
        },
        {
            name: 'My Device',
            route: '/myDevice',
            icon: <DevicesIcon></DevicesIcon>
        },
        {
            name: 'Map',
            route: '/map',
            icon: <PlaceIcon></PlaceIcon>
        },
        {
            name: 'Triggers',
            route: '/trigger',
            icon: <LeakAddIcon></LeakAddIcon>
        },
        {
            name: 'Reports',
            route: '/reports',
            icon: <AssignmentIcon></AssignmentIcon>
        },
        {
            name: 'Event Center',
            route: '/eventCenter',
            icon: <EmailIcon></EmailIcon>
        },
        {
            name: 'Sharing Center',
            route: '/shareCenter',
            icon: <FilterDramaIcon></FilterDramaIcon>
        },
        {
            name: 'Me',
            route: '/me',
            icon: <PersonOutlineIcon></PersonOutlineIcon>
        }
    ]
    return (
        <Grid className='contain-box sidebar-box'>
            <List sx={{ ...sidebar }} className='inner-sidebar'>
                {
                    dataMenu.map((item, index) => (
                        <Link to={item.route}>
                            <ListItem sx={{ ...itemSidebar }} key={index} className='item' >
                                {item.icon}
                                <ListItemText sx={{ ml: '10px' }}>{item.name}</ListItemText>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Grid>
    );
}

export default Sidebar;
