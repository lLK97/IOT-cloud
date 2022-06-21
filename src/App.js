import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Head from './component/head/head';
import Routers from './Routers';
import 'mapbox-gl/dist/mapbox-gl.css';



const App = () => {
    const sidebar = document.getElementsByClassName('sidebar-box');
    const icon_bar_show = document.getElementsByClassName('icon-bar-show');
    const icon_bar_close = document.getElementsByClassName('icon-bar-close');
    const sidebarActive = document.getElementsByClassName('sidebar-active');
    const show_sidebar = () => {
        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('icon-bar-show')) {
                sidebar[0].classList.add('sidebar-active');
                icon_bar_show[0].style.display = 'none';
                icon_bar_close[0].style.display = 'block';
            }
        })
    }
    const hide_sidebar = () => {
        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('icon-bar-close')) {
                sidebar[0].classList.remove('sidebar-active');
                icon_bar_show[0].style.display = 'block';
                icon_bar_close[0].style.display = 'none';
            }
        })
    }
    const outside_sidebar = () => {
        document.addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains('inner-sidebar') &&
                !e.target.classList.contains('icon-bar-close') &&
                !e.target.classList.contains('icon-bar-show')) {
                if (sidebarActive != undefined
                    && icon_bar_close[0] != undefined
                    && icon_bar_close[0].style.display == 'block') {
                    sidebarActive[0].classList.remove('sidebar-active');
                    icon_bar_show[0].style.display = 'block';
                    icon_bar_close[0].style.display = 'none';
                    console.log(icon_bar_close[0].style.display)
                }
            }
        })
    }
    React.useEffect(() => {
        show_sidebar()
        hide_sidebar()
        outside_sidebar()
    })
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
}

export default App;
