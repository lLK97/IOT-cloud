import { Box, Grid } from '@mui/material';
import { Tabs, Modal, Button, Dropdown, Menu, Input, Typography } from 'antd';
import React from 'react';
import Head from '../../component/head/head';
import Sidebar from '../../component/sidebar/sidebar';
import { buttonDashboard, buttonDefault, mainContent } from '../../component/styleMIUI/styleMIUI';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CropFreeIcon from '@mui/icons-material/CropFree';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridLayout from 'react-grid-layout';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../../assets/css/component/tab.scss';
import '../../assets/css/component/add-dashboard.scss';
import 'antd/dist/antd.css';
import SmartOffice from './content/smartOffice';
import SmartAgriculture from './content/smartAgriculture';
import SmartCity from './content/smartCity';
import AddWiget from './addWiget/addWiget';
const { TabPane } = Tabs;
const { Search } = Input;
//DATA TAG AND ADD DATA, COLUMN TABLE

class Dashboard extends React.Component {
 
    tool = () =>{
        return(
            <Menu class="dropdowntab-dashboard"
            items={[
                {
                    key: '1',
                    label: (
                        <Box style={{width: 140}} className='tool-dropdown-dashboard'> 
                            <ShareOutlinedIcon />  <span>Share</span>
                        </Box>
                    )
                },
                {
                    key: '2', 
                    label: (
                        <Box style={{width: 140}} className='tool-dropdown-dashboard'> 
                            <DeleteOutlineOutlinedIcon className='delete'/>  <span>Delete</span>
                        </Box>
                    )
                }
            ]}
            />
        )
    }
    tabDashboard = title =>{
        return (
            <div className='tab-dashboard'>
                <span>{title}</span>
                <Dropdown overlay={this.tool} trigger={['click']}>
                        <MoreHorizIcon className={`icon`} onClick={(e) => e.preventDefault()}/>
                </Dropdown>
            </div>
        )
    }
    
    initialPanes = [
        { title: this.tabDashboard('Smart Office'),content: <SmartOffice />,  key: '1' },
        { title: this.tabDashboard('Smart Agriculture'), content: <SmartAgriculture /> , key: '2'},
        { title: this.tabDashboard('Smart City'), content: <SmartCity />, key: '3' },
    ];//END
   
    newTabIndex = 0;
    state = {
        activeKey: this.initialPanes[0].key,
        panes: this.initialPanes,
        loading: false,
        visible: false,
        selectedRowsKeys: [],
        modalAddWidget: false
    };
    setModalAddWidget(status){
        this.setState({
            modalAddWidget : status
        });
    }
  //ADD AND REMOVE TAG
  onChange = activeKey => {
    this.setState({ activeKey });
    };

onEdit = (targetKey, action) => {
    let permit = true;
    if (permit == false) {
        this[action](targetKey);
    }
    if (permit = true) {
        this.setState({
            visible: true
        })
    }
};

showModal = () =>{
    this.setState({
        visible: true
    })
}

add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    const newPanes = [...panes];
    newPanes.push({ title: 'New Tab', data: [], column: [], key: activeKey });
    this.setState({
        panes: newPanes,
        activeKey,
    });
};

remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
        if (lastIndex >= 0) {
            newActiveKey = newPanes[lastIndex].key;
        } else {
            newActiveKey = newPanes[0].key;
        }
    }
    this.setState({
        panes: newPanes,
        activeKey: newActiveKey,
    });
};//END

//SHOW HIDE ADD TAG 
handleCancel = () => {
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ loading: false, visible: false,   modalAddWidget: false });
    }, 1000);
};

handleAdd = () => {
    this.setState({ visible: false});
};//end



handleConfirm = () => {
    this.setState({ visibleReject: false });
};//   END

menu =()=> {
    return(
    <Menu 
    items={[
        {
            key: '1',
            label: (
                <Search placeholder="Name"  style={{ width: 200 }} className='search-box-dropdown-dashboard'/>
            )
        },
        {
            key: '2', 
            label: (
                <Button color="primary" className="bt-add-dropdown-dashboard"
                onClick={this.showModal}>+ Add</Button>
            )
        }
    ]}
    />)
}
    fullScreen = ()=>{
        let full = document.querySelector('.full-tab-dashboard');
        let body = document.getElementById('root');
        if(!full.classList.contains('active-full')){
            body.requestFullscreen()
            full.classList.add('active-full')
        } else{
            document.exitFullscreen();
            full.classList.remove('active-full')
        }
    }
        operations = (
        <div className="button-extentd-dashboard">
            <Dropdown  overlay={this.menu} trigger={['click']}>
                <Button onClick={(e) => e.preventDefault()} className='ant-tabs-nav-add dot-tag-dashboard'>
                    <MoreHorizIcon className={`icon`}/>
                </Button>
            </Dropdown>
            <div className="gr-button">
                <Button color="primary" className="add-tab-dashboard" 
                style={{...buttonDashboard, marginRight: '5px', transform: 'translateY(-5px)'}}
                onClick={()=>this.setModalAddWidget(true)}>
                    Add
                </Button>
                <Button color="primaty" className="edit-tab-dashboard" style={{...buttonDashboard, marginRight: '5px', transform: 'translateY(-5px)'}}>
                    Edit
                </Button>
                <Button color="primaty" className="full-tab-dashboard" onClick={this.fullScreen} style={{...buttonDashboard, transform: 'translateY(-2.5px)'}}>
                    <CropFreeIcon style={{ transform: 'translateY(2.5px)' }}/>
                </Button>
            </div>
     </div>
     )
    render(){
        const { panes, activeKey,
            visible, modalAddWidget
        } = this.state;
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
                <Grid sx={{ ...mainContent }} className='content-tab'>
                            <Tabs
                                type="editable-card"
                                onChange={this.onChange}
                                activeKey={activeKey}
                                onEdit={this.onEdit}
                                className='tab-parrent content-dashboard'
                                tabBarExtraContent={this.operations}
                            >
                                {
                                    panes.map(pane => (
                                        <TabPane tab={pane.title} 
                                        key={pane.key}
                                        >
                                            {
                                                pane.content
                                            }
                                        </TabPane>
                                    ))
                                }
                            </Tabs>
                            <Modal
                                visible={visible}
                                title=''
                                onOk={this.showModalReject}
                                onCancel={this.handleCancel}
                                className='modal-reject'
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}  className='button-model cancel'>
                                        Cancel
                                    </Button>,
                                    <Button key="submit" type="primary" onClick={this.handleCancel} className='button-model confirm'>
                                        Submit
                                    </Button>
                                ]}>
                                <p>Operation failed! This is a demo account which has no permission to operate</p>
                            </Modal>
                            <Modal
                                visible={modalAddWidget}
                                title='Add New Widget'
                                onOk={this.showModalReject}
                                onCancel={this.handleCancel}
                                className='modal-add'
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}  className='button-model cancel'>
                                        Cancel
                                    </Button>,
                                    <Button key="submit" type="primary" onClick={this.showModal} className='button-model confirm'>
                                        Confirm
                                    </Button>
                                ]}>
                                      <AddWiget />
                            </Modal>
                </Grid>
            </Grid>
        </div>
    );
}
}


export default Dashboard;
