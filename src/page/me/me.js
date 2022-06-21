import { Box, Grid, ListItem } from '@mui/material';
import React from 'react';
import Head from '../../component/head/head';
import Sidebar from '../../component/sidebar/sidebar';
import MemberCenter from './memberCenter/memberCenter';
import { buttonNext, mainContent } from '../../component/styleMIUI/styleMIUI';
import { Button, Tabs, Typography, Progress, List } from 'antd';
import '../../assets/css/component/me.scss'
import BasicInfor from './memberCenter/basicInfor';
import DateTimeTag from './memberCenter/dateTime';
import ChangePassword from './memberCenter/changePassword';
import GlobalSettings from './memberCenter/globalSettings';
import AlarmRecipient from './memberCenter/alarmRecipient';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const { TabPane } = Tabs;




//DATA TAG AND ADD DATA, COLUMN TABLE
const initialPanes = [
    { key: '1', title: 'Member Center', block: <MemberCenter />, button: true },
    { key: '2', title: 'Basic Information', block: <BasicInfor />, button: false },
    { key: '3', title: 'Date & Time', block: <DateTimeTag />, button: false },
    { key: '4', title: 'Change Password', block: <ChangePassword />, button: false },
    { key: '5', title: 'Alarm Recipient', block: <AlarmRecipient />, button: false },
    { key: '6', title: 'Global Settings', block: <GlobalSettings />, button: false }
];//END

class Me extends React.Component {
    newTabIndex = 0;
    dataStatusFilter = initialPanes[0].data;
    columnStatus = initialPanes[0].column;
    state = {
        activeKey: initialPanes[0].key,
        panes: initialPanes,
        loading: false,
        visible: false,
        loadingReject: false,
        visibleReject: false
    };
    //ADD AND REMOVE TAG
    onChange = activeKey => {
        this.setState({ activeKey });
    };


    render() {
        const { panes, activeKey } = this.state;
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
                    <FormatListBulletedIcon className='icon-bar-show'></FormatListBulletedIcon>
                    <FormatListBulletedIcon className='icon-bar-close'></FormatListBulletedIcon>
                    <Grid item xs={10} sx={{ ...mainContent }} className='content-tab'>
                        <Tabs
                            onChange={this.onChange}
                            activeKey={activeKey}
                            className='tab-parrent'
                        >
                            {
                                panes.map(pane => (
                                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                        {
                                            pane.block
                                        }
                                    </TabPane>
                                ))
                            }
                        </Tabs>
                    </Grid>
                </Grid>
            </div >
        )
    }
}
export default Me;
