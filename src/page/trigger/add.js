import React from 'react';
import { Grid, Box, Typography, ListItem, Button, TextField } from '@mui/material';
import Sidebar from '../../component/sidebar/sidebar';
import { buttonDefault, inputError, mainContent, textFieldHorizontal } from '../../component/styleMIUI/styleMIUI';
import Head from '../../component/head/head';
import { Form, Select, TimePicker, } from 'antd';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Input from 'antd/lib/input/Input';
import moment from 'moment';




import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Link } from 'react-router-dom';



import '../../assets/css/component/tab.scss';
import '../../assets/css/pages/add.scss';

const areas = [
    { label: 'When the device ...', value: 'When the device ...' },
    { label: 'When the time is ...', value: 'When the time is ...' },
];
const nodata = [
    { label: '', value: '' }

];
const action = [
    { label: 'Trigger device(s) to ...', value: 'Trigger device(s) to ...' },
    { label: 'Send an alarm notification', value: 'Send an alarm notification' },
];
const bools = [
    { label: 'AND', value: 'AND' },
    { label: 'OR', value: 'OR' },
];
const buttonDay = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']
const btDay = {
    backgroundColor: 'var(--primary-light-blue)',
    color: 'var(--primary-white)',
    borderRadius: '0',
    border: '1px solid #bccfdb',
    width: '22px',
    height: '36px',
    '&:hover': {
        color: 'var(--primary-white)',
        backgroundColor: 'var(--primary-light-blue)'
    }
}
const btBottom = {
    width: '100px',
    height: '35px',
    backgroundColor: 'var(--primary-light-blue)',
    color: 'var(--primary-white)',
    '&:hover': {
        color: '#bccfdb'
    }
}
const AddTrigger = () => {
    const [valueConditionA, setvalueConditionA] = React.useState('');
    const [valueConditionB, setvalueConditionB] = React.useState('');
    const [valueConditionC, setvalueConditionC] = React.useState('');
    const [plusA, setplusA] = React.useState(true);
    const [miniA, setminiA] = React.useState(false);
    const [visibleB, setvisibleB] = React.useState(false);
    const [visibleC, setvisibleC] = React.useState(false);
    const [plusAcA, setplusAcA] = React.useState(true);
    const [miniAcA, setminiAcA] = React.useState(false);
    const [visibleAcB, setvisibleAcB] = React.useState(false);
    const [visibleAcC, setvisibleAcC] = React.useState(false);
    const [plusB, setplusB] = React.useState(false);
    const [plusAcB, setplusAcB] = React.useState(false);
    const [checkBox, setcheckBox] = React.useState('');
    const [valueActionA, setvalueActionA] = React.useState('');
    const [valueActionB, setvalueActionB] = React.useState('');
    const [valueActionC, setvalueActionC] = React.useState('');
    const [form] = Form.useForm();
    const setDefault = () => {
        if (valueConditionA == 'When the time is ...' ||
            valueConditionB == 'When the time is ...' ||
            valueConditionC == 'When the time is ...') {
            setcheckBox(false);
        }
        ///CHANGE BUTTON A
        if (visibleB == true) {
            setplusA(false);
            setminiA(true);
        }
        if (visibleB == false) {
            setplusA(true);
            setminiA(false);
            setvalueConditionB('');
        }
        if (visibleC == false) {
            setvalueConditionC('');
        }
        if (visibleAcB == true) {
            setplusAcA(false);
            setminiAcA(true);
        }
        if (visibleAcB == false) {
            setplusAcA(true);
            setminiAcA(false);
            setvalueActionB('')
        }
        if (visibleAcC == false) {
            setvalueActionC('')
        }
        ///CHANGE BUTTON B
        if (visibleC == true) {
            setplusB(false);
        }
        if (visibleC == false) {
            setplusB(true);
        }
        if (visibleAcC == true) {
            setplusAcB(false);
        }
        if (visibleAcC == false) {
            setplusAcB(true);
        }
    }
    const visibleCondi = () => {
        if (visibleC == true) {
            setvisibleC(false);
        }
        if (visibleB == true && visibleC == false) {
            setvisibleB(false);
        }

    }
    const visibleAction = () => {

        if (visibleAcC == true) {
            setvisibleAcC(false);
        }
        if (visibleAcB == true && visibleAcC == false) {
            setvisibleAcB(false);
        }
    }
    const [textB, settextB] = React.useState('AND');
    const [textC, settextC] = React.useState('AND');
    const setTextCondition = () => {
        if (visibleB == true) {
            if (textB == 'AND') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : A & B'
            }
            if (textB == 'OR') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : A | B'
            }
        }
        if (visibleC == true) {
            if (textB == 'AND' && textC == 'AND') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : ( A & B ) & C'
            }
            if (textB == 'AND' && textC == 'OR') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : ( A & B ) | C'
            }
            if (textB == 'OR' && textC == 'OR') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : ( A | B ) | C'
            }
            if (textB == 'OR' && textC == 'AND') {
                document.getElementsByClassName('label-condition')[0].innerHTML = 'Relationship : A | ( B & C )'
            }
        }
        //CONDITION 
    }

    const setactiveButton = () => {
        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains('active-bt-trigger')) {
                e.target.classList.add('active-bt-trigger')
            } else {
                e.target.classList.remove('active-bt-trigger')
            }
        })
    }
    // //ERROR TEXTFIELD
    const textTitle = {
        width: '35%', p: '0', marginInline: '0'
    }
    const textErrorTitle = {
        width: '35%',
        p: '0',
        marginInline: '0',
        '>p': {
            color: 'red',
            m: '0'
        }
    }
    const textSelect = {
        width: '40%', p: '0', marginInline: '0'
    }
    const textErrorSelect = {
        width: '40%',
        p: '0',
        marginInline: '0',
        '>p': {
            color: 'red',
            m: '0'
        }
    }
    const [textValue, settextValue] = React.useState('');
    const [errorText, setErrorText] = React.useState('');
    const showTextField = () => {
        if (textValue == '') {
            setErrorText('This is a required field');
        }
    }

    React.useEffect(() => {
        setDefault()
        setTextCondition()

    })
    const format = 'HH:mm';
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

                    <div className="content-noTab">
                        <Link to='/trigger'><ArrowBackIosNewIcon></ArrowBackIosNewIcon></Link>
                        <Form form={form} name='' className='trigger-pageAdd'>
                            <Box className='top-label'>
                                <Typography className='label'>Title</Typography>

                                <Form.Item
                                    name="Title"
                                    label=""
                                    rules={[
                                        {
                                            required: true,
                                            message: 'This is a required field',
                                        },
                                    ]}
                                >
                                    <TextField
                                        onChange={(e) => settextValue(e.target.value)}

                                        sx={errorText == '' ?
                                            { ...textFieldHorizontal, ...textTitle } : { ...inputError, ...textErrorTitle }}
                                    ></TextField>
                                </Form.Item>
                            </Box>
                            <Box className='conditions'>
                                <ListItem>
                                    <Typography className='label'>
                                        Conditions
                                        <span className='label label--child label-condition'>
                                            Relationship : A
                                        </span>
                                    </Typography>
                                </ListItem>
                                <Typography className='item'>
                                    {/* CONDITION */}
                                    {/* A */}
                                    <div className='inner-item condiA'>
                                        <ListItem >
                                            <div className='space'></div>
                                            <span className='label label--small'>Condition A :</span>



                                            {/* <Select options={areas} onChange={(e) => setvalueConditionA(e)} /> */}
                                            <Form.Item
                                                name="deviceA"
                                                label=""
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'This is a required field',
                                                    },
                                                ]}
                                            >
                                                <Select options={areas} onChange={(e) => setvalueConditionA(e)} />
                                            </Form.Item>


                                            {
                                                miniA == true ? (
                                                    <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleCondi()} />
                                                ) : null
                                            }
                                            {
                                                plusA == true ? (
                                                    <PlusCircleOutlined className='icon icon-plus' onClick={() => setvisibleB(true)} />
                                                ) : null
                                            }
                                        </ListItem>
                                        {
                                            valueConditionA == 'When the device ...' ? (
                                                <div>
                                                    <ListItem className="select-child">
                                                        <div className='space space--selectGr grA'></div>
                                                        <Form.Item
                                                            name="deviceA1"
                                                            label=""
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This is a required field',
                                                                },
                                                            ]}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </ListItem>
                                                    <ListItem className="select-child">
                                                        <div className='space space--selectGr grA'></div>
                                                        <Form.Item
                                                            name="deviceA2"
                                                            label=""
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This is a required field',
                                                                },
                                                            ]}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </ListItem>
                                                    <ListItem className="select-child">
                                                        <div className='space space--selectGr grA'></div>
                                                        <Form.Item

                                                            name="deviceA3"
                                                            label=""
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This is a required field',
                                                                },
                                                            ]}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </ListItem>
                                                </div>
                                            ) : (
                                                valueConditionA == 'When the time is ...' ? (<div className='time-time timeA'>
                                                    <ListItem >
                                                        <div className='space'></div>
                                                        <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                                    </ListItem>
                                                    <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                        {
                                                            buttonDay.map((item, index) => (
                                                                <Button sx={{ ...btDay }}
                                                                    className='bt-trigger'
                                                                >
                                                                    {item}
                                                                </Button>
                                                            ))
                                                        }
                                                    </ListItem>
                                                    <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                        <Typography className='label label--time'>Effective Time: 00:00 - 23:59</Typography>
                                                    </ListItem>
                                                </div>) : null
                                            )
                                        }
                                    </div>
                                    {/* END */}
                                    {/* B */}
                                    {
                                        visibleB == true ? (
                                            <div className='inner-item condiB'>

                                                <ListItem className='condi-after'>
                                                    <Select options={bools} className='bools' defaultValue="AND" onChange={(e) => settextB(e)} />
                                                    <span className='label label--small'>Condition B :</span>
                                                    <Form.Item
                                                        name="deviceB"
                                                        label=""
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'This is a required field',
                                                            },
                                                        ]}
                                                    >
                                                        <Select options={areas} onChange={(e) => setvalueConditionB(e)} />
                                                    </Form.Item>

                                                    <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleCondi()} />
                                                    {
                                                        plusB == true ? (
                                                            <PlusCircleOutlined className='icon icon-plus' onClick={() => setvisibleC(true)} />
                                                        ) : null
                                                    }
                                                </ListItem>
                                                {
                                                    valueConditionB == 'When the device ...' ? (
                                                        <div>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grB'></div>
                                                                <Form.Item
                                                                    name="deviceB1"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grB'></div>
                                                                <Form.Item
                                                                    name="deviceB2"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grB'></div>
                                                                <Form.Item

                                                                    name="deviceB3"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                        </div>
                                                    ) : (
                                                        valueConditionB == 'When the time is ...' ? (<div className='time-time timeB'>
                                                            <ListItem >
                                                                <div className='space'></div>
                                                                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                                            </ListItem>
                                                            <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                                {
                                                                    buttonDay.map((item, index) => (
                                                                        <Button sx={{ ...btDay }}
                                                                            className='bt-trigger'
                                                                        >
                                                                            {item}
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </ListItem>
                                                            <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                                <Typography className='label label--time'>Effective Time: 00:00 - 23:59</Typography>
                                                            </ListItem>
                                                        </div>) : null
                                                    )
                                                }
                                            </div>
                                        ) : null
                                    }

                                    {/* END */}
                                    {/* C */}

                                    {
                                        visibleC == true ? (
                                            <div className='inner-item condiC'>
                                                <ListItem className='condi-after'>
                                                    <Select options={bools} className='bools' defaultValue="AND" onChange={(e) => settextC(e)} />
                                                    <span className='label label--small'>Condition C :</span>
                                                    <Form.Item
                                                        name="deviceC"
                                                        label=""
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'This is a required field',
                                                            },
                                                        ]}
                                                    >
                                                        <Select options={areas} onChange={(e) => setvalueConditionC(e)} />
                                                    </Form.Item>
                                                    <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleCondi()} />
                                                </ListItem>
                                                {
                                                    valueConditionC == 'When the device ...' ? (
                                                        <div>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grC'></div>
                                                                <Form.Item
                                                                    name="deviceC1"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grC'></div>
                                                                <Form.Item
                                                                    name="deviceC2"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr grC'></div>
                                                                <Form.Item

                                                                    name="deviceC3"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                        </div>
                                                    ) : (
                                                        valueConditionC == 'When the time is ...' ? (<div className='time-time timeC'>
                                                            <ListItem >
                                                                <div className='space'></div>
                                                                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                                            </ListItem>
                                                            <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                                {
                                                                    buttonDay.map((item, index) => (
                                                                        <Button sx={{ ...btDay }}
                                                                            className='bt-trigger'>
                                                                            {item}
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </ListItem>
                                                            <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                                <Typography className='label label--time'>Effective Time: 00:00 - 23:59</Typography>
                                                            </ListItem>
                                                        </div>) : null
                                                    )
                                                }
                                            </div>
                                        ) : null
                                    }

                                    {/* END */}
                                    {
                                        valueConditionA == 'When the time is ...' ||
                                            valueConditionB == 'When the time is ...' ||
                                            valueConditionC == 'When the time is ...' ? null : (
                                            <ListItem className='inner-item set-time'>
                                                <div className='space space--note'></div>
                                                <span>Set a time period </span>
                                                <InfoOutlinedIcon />
                                                <Checkbox className='box-time'
                                                    onChange={(e) => setcheckBox(e.target.checked == undefined ? null : e.target.checked)}
                                                />
                                            </ListItem>
                                        )
                                    }

                                    {/* TIME BOX */}
                                    {/* DEVICE */}
                                    {
                                        checkBox == true ? (
                                            valueConditionA == 'When the time is ...' ||
                                                valueConditionB == 'When the time is ...' ||
                                                valueConditionC == 'When the time is ...' ? null : (
                                                <div className='time-device'>
                                                    <ListItem >
                                                        <div className='space'></div>
                                                        <TimePicker format={format} />
                                                        <span className='line-only'>——</span>
                                                        <TimePicker defaultValue={moment('23:59', format)} format={format} />
                                                    </ListItem>
                                                    <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                        {
                                                            buttonDay.map((item, index) => (
                                                                <Button sx={{ ...btDay }}
                                                                    className='bt-trigger'
                                                                    onClick={() => setactiveButton()}
                                                                >
                                                                    {item}
                                                                </Button>
                                                            ))
                                                        }
                                                    </ListItem>
                                                    <ListItem sx={{ pl: '0', m: '6px 0 6px 95px' }}>
                                                        <Typography className='label label--time'>Effective Time: 00:00 - 23:59</Typography>
                                                    </ListItem>
                                                </div>)
                                        )
                                            : null
                                    }
                                    {/* ACTIONS */}
                                    <Box className='conditions'>
                                        <ListItem>
                                            <Typography className='label'>
                                                ACTIONS
                                            </Typography>
                                        </ListItem>
                                        <Typography className='item'>
                                            {/* ACTION */}
                                            {/* A */}
                                            <div className='inner-item actionA'>
                                                <ListItem>
                                                    <div className='space'></div>
                                                    <span className='label label--small'>Action A :</span>
                                                    <Form.Item
                                                        name="deviceAcA"
                                                        label=""
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'This is a required field',
                                                            },
                                                        ]}
                                                    >
                                                        <Select options={action} onChange={(e) => setvalueActionA(e)} />
                                                    </Form.Item>

                                                    {
                                                        miniAcA == true ? (
                                                            <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleAction()} />
                                                        ) : null
                                                    }
                                                    {
                                                        plusAcA == true ? (
                                                            <PlusCircleOutlined className='icon icon-plus' onClick={() => setvisibleAcB(true)} />
                                                        ) : null
                                                    }
                                                </ListItem>
                                                {
                                                    valueActionA == 'Trigger device(s) to ...' ? (
                                                        <div>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr'></div>
                                                                <Form.Item
                                                                    name="deviceAcA1"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr'></div>
                                                                <Form.Item
                                                                    name="deviceAcA2"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                            <ListItem className="select-child">
                                                                <div className='space space--selectGr'></div>
                                                                <Form.Item

                                                                    name="deviceAcA3"
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'This is a required field',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select />
                                                                </Form.Item>
                                                            </ListItem>
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                            {/* END */}
                                            {/* B */}
                                            {
                                                visibleAcB == true ? (
                                                    <div className='inner-item actionB'>
                                                        <ListItem>
                                                            <div className='space'></div>
                                                            <span className='label label--small'>Action B :</span>

                                                            <Form.Item
                                                                name="deviceAcB"
                                                                label=""
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'This is a required field',
                                                                    },
                                                                ]}
                                                            >
                                                                <Select options={action} onChange={(e) => setvalueActionB(e)} />
                                                            </Form.Item>
                                                            <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleAction()} />
                                                            {
                                                                plusAcB == true ? (
                                                                    <PlusCircleOutlined className='icon icon-plus' onClick={() => setvisibleAcC(true)} />
                                                                ) : null
                                                            }
                                                        </ListItem>
                                                        {
                                                            valueActionB == 'Trigger device(s) to ...' ? (
                                                                <div>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item
                                                                            name="deviceAcB1"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item
                                                                            name="deviceAcB2"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item

                                                                            name="deviceAcB3"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                </div>
                                                            ) : null
                                                        }
                                                    </div>
                                                ) : null
                                            }

                                            {/* END */}
                                            {/* C */}
                                            {
                                                visibleAcC == true ? (
                                                    <div className='inner-item actionC'>
                                                        <ListItem>
                                                            <div className='space'></div>
                                                            <span className='label label--small'>Action C :</span>

                                                            <Form.Item
                                                                name="deviceAcC"
                                                                label=""
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'This is a required field',
                                                                    },
                                                                ]}
                                                            >
                                                                <Select options={action} onChange={(e) => setvalueActionC(e)} />
                                                            </Form.Item>
                                                            <MinusCircleOutlined className='icon icon-minus' onClick={() => visibleAction()} />
                                                        </ListItem>
                                                        {
                                                            valueActionB == 'Trigger device(s) to ...' ? (
                                                                <div>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item
                                                                            name="deviceAcC1"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item
                                                                            name="deviceAcC2"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                    <ListItem className="select-child">
                                                                        <div className='space space--selectGr'></div>
                                                                        <Form.Item

                                                                            name="deviceAcC3"
                                                                            label=""
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'This is a required field',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select />
                                                                        </Form.Item>
                                                                    </ListItem>
                                                                </div>
                                                            ) : null
                                                        }
                                                    </div>
                                                ) : null
                                            }

                                            {/* END */}
                                        </Typography>
                                        <ListItem className='bottom-button' sx={{ textAlign: 'center' }}>
                                            <div className='inner-button'>
                                                <Button key="back" type="primary" className='button-model cancel' sx={{ ...btBottom }}>
                                                    Return
                                                </Button>,
                                                <Button key="submit" type="primary" className='button-model confirm'
                                                    sx={{ ...btBottom, marginLeft: '30px' }}
                                                    onClick={() => showTextField()}>
                                                    Add
                                                </Button>
                                            </div>
                                        </ListItem>
                                    </Box>
                                </Typography>

                            </Box>
                        </Form>
                    </div>
                </Grid>

            </Grid>
        </div >
    );
}

export default AddTrigger;

