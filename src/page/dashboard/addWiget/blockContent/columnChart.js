import { Box, Grid, ListItem } from '@mui/material';
import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography, Input, Select, AutoComplete, Checkbox } from 'antd';
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { SketchPicker } from 'react-color';
import rgbHex from "rgb-hex";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import BarChartIcon from '@mui/icons-material/BarChart';

import 'antd/dist/antd.css'
import Column from './block-column-chart/column';
const { Search } = Input;
const { Option } = Select;

const ColumnChart = () => {
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18, 19, 20, 21, 22, 23, 24]
    const device = ['Garden - N1', 'Garden - N2', 'Garden - N3', 'Garden - N4', 'Garden - N5'];
    const status = ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4', 'Channel 5'];
    const [disable, setdisable] = React.useState(false);
    //picker color pick
    const setActive= (e) =>{
        setdisable(e);
    }
    const [lineColor1, setlineColor1] = React.useState('#ea7613');
    const [lineColor2, setlineColor2] = React.useState('#3f2e1f');
    const [lineColor3, setlineColor3] = React.useState('#1296db');
    const [lineColor4, setlineColor4] = React.useState('#dd6572');
    const [lineColor5, setlineColor5] = React.useState('#9c59b8');
    const [lineColor6, setlineColor6] = React.useState('#313e4f');
    const [lineColor7, setlineColor7] = React.useState('#17a084');
  const overlay= (lineColor, setlineColor)=> (
    <SketchPicker 
    color={lineColor}
    onChange={c =>
        setlineColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
    }/>
  )


  const [plus1, setplus1] = React.useState(true);
  const [mini1, setmini1] = React.useState(false);
  const [plus2, setplus2] = React.useState(true);
  const [mini2, setmini2] = React.useState(false);
  const [plus3, setplus3] = React.useState(true);
  const [mini3, setmini3] = React.useState(false);
  const [plus4, setplus4] = React.useState(true);
  const [mini4, setmini4] = React.useState(false);
  const [plus5, setplus5] = React.useState(true);
  const [mini5, setmini5] = React.useState(false);
  const [plus6, setplus6] = React.useState(true);
  const [mini6, setmini6] = React.useState(false);
  const [mini7, setmini7] = React.useState(false);
  const [visible2, setvisible2] = React.useState(false);
  const [visible3, setvisible3] = React.useState(false);
  const [visible4, setvisible4] = React.useState(false);
  const [visible5, setvisible5] = React.useState(false);
  const [visible6, setvisible6] = React.useState(false);
  const [visible7, setvisible7] = React.useState(false);

  const visibleCondi= ()=>{
    const selectLineColor = document.getElementsByClassName('box-column');
        if(selectLineColor.length == 2 ) {
            setplus2(false); setmini2(false); setvisible2(false);
            setmini1(false); setplus1(true);
        } else  if(selectLineColor.length == 3 ) {
            setplus3(false); setmini3(false); setvisible3(false);
            setmini2(true); setplus2(true);
        }
        else  if(selectLineColor.length == 4) {
            setplus4(false); setmini4(false); setvisible4(false);
            setmini3(true); setplus3(true);
        }else  if(selectLineColor.length == 5 ) {
            setplus5(false); setmini5(false); setvisible5(false);
            setmini4(true); setplus4(true);
        } else  if(selectLineColor.length == 6 ) {
            setplus6(false); setmini6(false); setvisible6(false);
            setmini5(true); setplus5(true);
        } else  if(selectLineColor.length == 7 ) {
          setmini7(false); setvisible7(false);
            setmini6(true); setplus6(true);
        }
  }
  const setvisible=()=>{
    const selectLineColor = document.getElementsByClassName('box-column');
    if(selectLineColor.length == 1 ) {
        setplus1(false); setmini1(true); 
        setmini2(true); setplus2(true); setvisible2(true);
        console.log('ok');
    } else if(selectLineColor.length == 2 ) {
        setplus2(false); setmini2(true); 
        setmini3(true); setplus3(true); setvisible3(true);
    } else if(selectLineColor.length == 3 ) {
        setplus3(false); setmini3(true); 
        setmini4(true); setplus4(true); setvisible4(true);
    }else if(selectLineColor.length == 4 ) {
        setplus4(false); setmini4(true); 
        setmini5(true); setplus5(true); setvisible5(true);
    }else if(selectLineColor.length == 5 ) {
        setplus5(false); setmini5(true); 
        setmini6(true); setplus6(true); setvisible6(true);
    }else if(selectLineColor.length == 6) {
        setplus6(false); setmini6(true); 
        setmini7(true); setvisible7(true);
    }
  }
  const [valueSelect,setvalueSelect] = React.useState(1);
  const setSelectColumns =(e)=>{
    setvalueSelect(e);
    setplus1(true); setmini1(false);
    setplus2(false); setmini2(false); setvisible2(false);
    setplus3(false); setmini3(false); setvisible3(false);
    setplus4(false); setmini4(false); setvisible4(false);
    setplus5(false); setmini5(false); setvisible5(false);
    setplus6(false); setmini6(false); setvisible6(false);
    setmini7(false); setvisible7(false);
  }
return (
    <div className="content-widget">
        <Grid container spacing={1} className="column-chart">
            <Grid container spacing={4} item xs={12} lg={12} className='column'>
                <Grid item xs={12} lg={3} className='box box-first'>
                    <ListItem className="item">Name</ListItem>
                    <ListItem className="item">
                        <Input></Input>
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">X axis</ListItem>
                    <ListItem className="item">
                        <Select  defaultValue='24' className='select-device'>
                            {
                                hours.map((item, index)=>(
                                    <Option value={item} key={index}>
                                        {
                                            item
                                        }
                                    </Option>                            
                                ))
                            }
                        </Select>
                        <span className='unit'>Hour (s)</span>
                    </ListItem>
                </Grid>
            </Grid>
            <Grid container spacing={4} item xs={12} lg={12} className='column'>
                <Grid item xs={12} lg={3} className='box box-first'>
                    <ListItem className="item">The name of Y1 <span><InfoCircleOutlined /></span></ListItem>
                    <ListItem className="item">
                        <Input></Input>
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The minimum of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                            style={{ width: '100%' }}
                            options={[{ value: 'Auto' }, { value: 'Custom' }]}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The maximum of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                            style={{ width: '100%' }}
                            options={[{ value: 'Auto' }, { value: 'Custom' }]}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The unit of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                            style={{ width: '100%' }}
                      
                        />
                    </ListItem>
                </Grid>
            </Grid>
            <Grid container spacing={4} item xs={12} lg={12} className='column'>
                <Checkbox className="checkbox" onClick={(e)=> setActive(e.target.checked)}/>
                <Grid item xs={12} lg={3} className='box box-first'>
                    <ListItem className="item">The name of Y1 <span><InfoCircleOutlined /></span></ListItem>
                    <ListItem className="item">
                        <Input disabled={disable}></Input>
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The minimum of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                        disabled={disable}
                            style={{ width: '100%' }}
                            options={[{ value: 'Auto' }, { value: 'Custom' }]}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The maximum of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                        disabled={disable}
                            style={{ width: '100%' }}
                            options={[{ value: 'Auto' }, { value: 'Custom' }]}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={12} lg={3} className='box'>
                    <ListItem className="item">The unit of Y1</ListItem>
                    <ListItem className="item">
                        <AutoComplete
                        disabled={disable}
                            style={{ width: '100%' }}
                           
                        />
                    </ListItem>
                </Grid>
            </Grid>
         
       {/* Line Chart */}
            
                <Grid container spacing={2} item xs={12} className='top-column'>
                            <Grid className='left' item xs={8}>Columns</Grid>
                            <Grid className='right' item xs={4}>
                                Columns 
                                <Select  defaultValue='1' className='select-line' onChange={(e)=> setSelectColumns(e)}>
                                    <Option value='1'>1</Option>
                                    <Option value='2'>2</Option>
                                    <Option value='3'>3</Option>
                                    <Option value='4'>4</Option>
                                </Select>
                                <BarChartIcon />
                            </Grid>
                </Grid>
                <Grid container spacing={2} item xs={12} className='wrapper-column'>
                    <Grid container spacing={2} item xs={10} className='box-column'>
                        <Grid container spacing={3} item xs={12} lg={12} className='column'>
                            <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                                <Grid item xs={12} lg={1} className='box box-number'><span>1</span></Grid>
                                <Grid item xs={12} lg={3} className='box box-first'>
                                    <Input placeholder='The name of this label'></Input>
                                </Grid>
                            </Grid>
                            <Column keys='1' number='1.1' device={device} status={status} lineColor={lineColor1} 
                                setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                            <Column keys='2' number='1.2' device={device} status={status} lineColor={lineColor2} 
                                setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                            <Column keys='3' number='1.3' device={device} status={status} lineColor={lineColor3} 
                                setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                            <Column keys='4' number='1.4' device={device} status={status} lineColor={lineColor4} 
                                setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        </Grid>

                    </Grid>
                    <Grid item xs={1} className='box box-icon-column'>
                        {
                            mini1 == true ? (
                                <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                            ) : null
                        }
                        {
                            plus1 == true ? (
                                <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                            ) : null
                        }
                    </Grid>
                </Grid>
                {
                    visible2 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>2</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='2.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='2.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='2.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='2.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini2 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus2 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                </Grid>
                        </Grid>
                    ) : null
                }
                {
                    visible3 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>3</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='3.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='3.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='3.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='3.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini3 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus3 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                </Grid>
                        </Grid>
                    ) : null
                }
                {
                     visible4 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>4</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='4.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='4.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='4.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='4.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini4 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus4 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                </Grid>
                        </Grid>
                    ) : null
                }
                 {
                     visible5 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>5</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='5.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='5.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='5.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='5.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini5 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus5 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                </Grid>
                        </Grid>
                    ) : null
                }
                 {
                     visible6 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>6</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='6.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='6.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='6.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='6.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini6 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus6 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-first icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                </Grid>
                        </Grid>
                    ) : null
                }
                 {
                     visible7 == true ? (
                        <Grid container spacing={2} item xs={12} className='wrapper-column'>
                            <Grid container spacing={2} item xs={10} className='box-column'>
                    <Grid container spacing={3} item xs={12} lg={12} className='column'>
                        <Grid container spacing={4} item xs={12} lg={12} className='wrapper-box'>
                            <Grid item xs={12} lg={1} className='box box-number'><span>7</span></Grid>
                            <Grid item xs={12} lg={3} className='box box-first'>
                                <Input placeholder='The name of this label'></Input>
                            </Grid>
                        </Grid>
                        <Column keys='1' number='7.1' device={device} status={status} lineColor={lineColor1} 
                            setLineColor={setlineColor1} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='2' number='7.2' device={device} status={status} lineColor={lineColor2} 
                            setLineColor={setlineColor2} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='3' number='7.3' device={device} status={status} lineColor={lineColor3} 
                            setLineColor={setlineColor3} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                        <Column keys='4' number='7.4' device={device} status={status} lineColor={lineColor4} 
                            setLineColor={setlineColor4} disable={disable} overlay={overlay} valueColumn={valueSelect}/>
                    </Grid>

                </Grid>
                <Grid item xs={1} className='box box-icon-column'>
                    {
                        mini7 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-first icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                    
                </Grid>
                        </Grid>
                    ) : null
                }
        </Grid>
    </div>
);
}

export default ColumnChart;
