import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { Box, ListItem, TextField } from '@mui/material';
// import { Modal, Button } from 'antd'
import { DatePicker, Input, Select, Button } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { distantTextField, inputError, textFieldHorizontal } from '../../../component/styleMIUI/styleMIUI'
import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Link } from 'react-router-dom';
import '../../../assets/css/component/topTable.scss'

const { Search } = Input;
const { RangePicker } = DatePicker;

const TopTable = props => {
    const [activeButton, setactiveButton] = React.useState(null);

    let status = 0;
    const filterDataStatus = (index) => {
        if (activeButton == index) {
            setactiveButton(null);
            status = '';
            props.filterData(status);
        } else {
            setactiveButton(index);
            status = props.dataButton[index].status;
            props.filterData(status);
        }
        props.changeData();
    }

    // SHOW, HIDE MODAL
    const [visible, setvisible] = React.useState(false);
    const [loading, setloading] = React.useState(false);
    const [visibleReject, setvisibleReject] = React.useState(false);
    const [loadingReject, setloadingReject] = React.useState(false);
    const showModal = () => {
        setvisible(true)
    }


    //INVALIDATE NUMBER SN
    const [textValue, settextValue] = React.useState('');
    const [errorText, setErrorText] = React.useState('');
    const showTextField = () => {
        const max_serial = 9;
        let listInput = document.getElementsByClassName('item-hide');
        if (!isNaN(textValue) == true
            && textValue != ''
            && textValue.length > max_serial) {

            for (let i = 0; i < listInput.length; i++) {
                listInput[i].classList.remove('hide');
            }
            setErrorText('');
        } else {
            if (textValue == '') {
                setErrorText('');
            } else {
                setErrorText('Please enter the correct SN');
            }
        }
    }

    //HIDE, SHOW TEXTFIELD
    const hideTextField = () => {
        if (props.hiddenList == 'true') {
            let modal_warp = document.getElementsByClassName('ant-modal-wrap');
            let listInput = document.getElementsByClassName('item-hide');
            if (modal_warp.length != 0) {
                if (modal_warp[0].style.display == 'none'
                    && !listInput[0].classList.contains('hide')) {
                    for (let i = 0; i < listInput.length; i++) {
                        listInput[i].classList.add('hide');
                    }
                }
            }

        }
    }


    //SHOW HIDE ADD TAG 
    const handleCancel = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
            setvisible(false);
        }, 1000);
    };

    const handleAdd = () => {
        setvisible(false)
    };//end
    const handleConfirm = () => {
        setvisibleReject(false)
    }

    //SHOW HIDE ADD TAG REJECT
    const showModalReject = () => {
        setvisibleReject(true)
    }
    const handleCancelReject = () => {
        setloadingReject(true);
        setTimeout(() => {
            setloadingReject(false);
            setvisibleReject(false);
        }, 1000);
    };




    // DATA SELECT
    const time = [
        { label: 'Custom', value: 'Custom' },
        { label: 'Today', value: 'Today' },
        { label: 'Yesterday', value: 'Yesterday' },
        { label: 'Last 24 hours', value: 'Last 24 hours' },
        { label: 'This week', value: 'This week' },
        { label: 'Previous week', value: 'Previous week' },
        { label: 'Last 7 days', value: 'Last 7 days' },
        { label: 'This month', value: 'This month' },
        { label: 'Previous month', value: 'Previous month' },
        { label: 'Last 30 days', value: 'Last 30 days' }
    ]


    const btSearch = {
        marginLeft: '10px',
        width: '80px',
        color: '#ffffff',
        backgroundColor: 'var(--primary-light-blue)',
        '&:hover': {
            backgroundColor: 'var(--primary-dark-blue)',
        }
    }


    //SHOW, HIDE GROUP BUTTON MOBILE
    const gr_button = document.getElementsByClassName(`gr-button-${props.number}`);
    const add_device_bt = document.getElementsByClassName('add-device');
    const icon_show = document.getElementsByClassName(`icon-open-toptable-${props.number}`);
    const icon_close = document.getElementsByClassName(`icon-close-toptable-${props.number}`);
    const show_grbutton = () => {
        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains(`icon-open-toptable-${props.number}`)) {
                gr_button[0].classList.add('show_button');
                add_device_bt[0].classList.add('show_button');
                icon_show[0].style.display = 'none';
                icon_close[0].style.display = 'block';
            }
        })
    }
    const hide_grbutton = () => {
        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains(`icon-close-toptable-${props.number}`)) {
                gr_button[0].classList.remove('show_button');
                add_device_bt[0].classList.remove('show_button');
                icon_show[0].style.display = 'block';
                icon_close[0].style.display = 'none';
            }
        })
    }
    // END

    React.useEffect(() => {
        showTextField();
        hideTextField();
        show_grbutton();
        hide_grbutton();
    })
    return (
        <div>
            <Form
                layout='inline'
                className={`top-table ${props.name}`}
            >
                {
                    props.page == 'eventCenter' ? (
                        <FormItem className='search-box'>
                            <ListItem sx={{ p: 0 }}>
                                <Select options={time}
                                    defaultValue='Custom'
                                    style={{ width: 150 }} />
                                <RangePicker showTime style={{ width: 350, marginLeft: 10 }} />
                                <Select options={props.data}
                                    defaultValue={props.defaultNameSelect}
                                    style={{ width: 150, marginLeft: 10 }} />
                                <Input style={{ width: 150, marginLeft: 10 }} placeholder='Search' />
                                <Button button style={{ ...btSearch }}>Search</Button>
                            </ListItem>
                        </FormItem>
                    ) : (

                        props.search == 'false' ? null : (
                            < FormItem className='search-box'>
                                <ListItem sx={{ p: 0 }}>
                                    <Search
                                        placeholder="Search"
                                        style={{ width: 150 }}
                                    />
                                </ListItem>
                            </FormItem>
                        )
                    )
                }


                <FormItem className={`gr-button gr-button-${props.number}`}>
                    {
                        props.dataButton != undefined ? (props.dataButton.map((item, index) => (
                            <Button onClick={() => filterDataStatus(index)} className={activeButton == index ? `${item.statusbutton} bt-top-table` : `bt-top-table`} >{item.icon} {item.title}</Button>
                        ))) : null
                    }
                </FormItem>

                <FormItem className='add-device'>
                    {
                        props.page == 'myDevice' ||
                            props.page == 'shareCenter' ? (
                            props.button == true ? (
                                <Button className='bt-top-right' onClick={showModal}>
                                    {props.icon == 'true' ? (<AddIcon></AddIcon>) : null}
                                    {props.title}
                                </Button>
                            ) : null
                        ) : (
                            <Link to={props.link}>
                                <Button className={props.icon == 'true' ? 'bt-top-right' : 'bt-top'} onClick={showModal}>
                                    {props.icon == 'true' ? (<AddIcon></AddIcon>) : null}
                                    {props.title}
                                </Button>
                            </Link>
                        )
                    }
                </FormItem>
                <FormItem className={`bar-toptable bar-toptable-${props.number}`}>
                    <ArrowDropDownIcon className={`icon-open-toptable icon-open-toptable-${props.number}`}></ArrowDropDownIcon>
                    <ArrowDropUpIcon className={`icon-close-toptable icon-close-toptable-${props.number}`}></ArrowDropUpIcon>
                </FormItem>
            </Form >
            {/* MODAL NEW DEVICE*/}
            {
                props.page == 'myDevice'
                    || props.page == 'shareCenter'
                    || props.page == 'meTagAlarmRecipient' ? (
                    <div>
                        <Modal
                            visible={visible}
                            title='Add Device'
                            onOk={handleAdd}
                            onCancel={handleCancel}
                            className='modal-adddevice'
                            footer={[
                                <Button key="back" onClick={handleCancel} className='button-model cancel'>
                                    Cancel
                                </Button>,
                                <Button loading={loading} key="submit" type="primary" onClick={showModalReject} className='button-model confirm'>
                                    Confirm
                                </Button>
                            ]}>

                            <ListItem sx={{ ...distantTextField }} className='item'>
                                <div className={errorText == '' ? 'display-name-login' : 'display-name-login error'}><span className='dots'>*</span> {props.labelInput1} :</div>
                                <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                    <TextField id="outlined-basic" variant="outlined"
                                        className='textView serial' onChange={(e) => settextValue(e.target.value)}
                                        sx={errorText == '' ? { ...textFieldHorizontal } : { ...inputError }}
                                        helperText={errorText}
                                    />
                                </Box>
                            </ListItem>

                            <ListItem sx={{ ...distantTextField }} className='item'>
                                <div className='display-name-login'><span className='dots'>*</span>  {props.labelInput2}  :</div>
                                <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                    <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal }} className='textView' />
                                </Box>
                            </ListItem>

                            {/* HIDE LISTITEM  */}
                            {
                                props.hiddenList == 'true' ? (
                                    <div>
                                        <ListItem sx={{ ...distantTextField }} className='item item-hide hide'>
                                            <div className='display-name-login'><span className='dots'>*</span> Associated Gateway:</div>
                                            <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, }} className='textView' />
                                            </Box>
                                        </ListItem>
                                        <ListItem sx={{ ...distantTextField }} className='item item-hide hide'>
                                            <div className='display-name-login'><span className='dots'>*</span> Device EUI:</div>
                                            <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal, }} className='textView' />
                                            </Box>
                                        </ListItem>
                                        <ListItem sx={{ ...distantTextField }} className='item item-hide hide'>
                                            <div className='display-name-login'><span className='dots'>*</span> Application Key:</div>
                                            <Box sx={{ ...textFieldHorizontal, marginLeft: '0' }}>
                                                <TextField id="outlined-basic" variant="outlined" sx={{ ...textFieldHorizontal }} className='textView' />
                                            </Box>
                                        </ListItem>
                                    </div>
                                ) : null
                            }

                            {/* HIDE LISTITEM  */}
                        </Modal>
                        <Modal
                            visible={visibleReject}
                            title=''
                            onOk={showModalReject}
                            onCancel={handleCancelReject}
                            className='modal-reject'
                            footer={[
                                <Button key="back" onClick={handleCancelReject} className='button-model cancel'>
                                    Cancel
                                </Button>,
                                <Button key="submit" type="primary" loading={loadingReject} onClick={handleConfirm} className='button-model confirm'>
                                    Submit
                                </Button>
                            ]}>
                            <p>Operation failed! This is a demo account which has no permission to operate</p>
                        </Modal>
                    </div>
                ) : null
            }

        </div >

    );
}


export default TopTable;
