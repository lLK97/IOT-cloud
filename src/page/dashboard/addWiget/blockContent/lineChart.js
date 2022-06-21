import { Grid, ListItem } from '@mui/material';
import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography, Input, Select, AutoComplete, Checkbox } from 'antd';
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { SketchPicker } from 'react-color';
import rgbHex from "rgb-hex";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css'
const { Search } = Input;
const { Option } = Select;


const LineChart = () => {
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
        const selectLineColor = document.getElementsByClassName('select-line-color');
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
        const selectLineColor = document.getElementsByClassName('select-line-color');
        if(selectLineColor.length == 1 ) {
            setplus1(false); setmini1(true); 
            setmini2(true); setplus2(true); setvisible2(true);
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
    return (
        <div className="content-widget">
            <Grid container spacing={1} className="line-chart">
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
                <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                        <ListItem className="item">Line Chart</ListItem>
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                        <ListItem className="item" sx={{ opacity: '0'}}> space </ListItem>
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                        <ListItem className="item" sx={{ opacity: '0'}}> space </ListItem>
                        <Select defaultValue='Y1' className='select-line-color' disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor1 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor1, setlineColor1)}>
                            <Button style={{ background: lineColor1 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
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
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                     
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                       
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    
                        <Select  defaultValue='Y1' className='select-line-color'  disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor2 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor2, setlineColor2)}>
                            <Button style={{ background: lineColor2 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini2 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus2 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                    </Grid>
                </Grid>
                    ) : null
                }



                
{
                    visible3 == true ? (
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                     
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                 
                        <Select  defaultValue='Y1' className='select-line-color'  disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor3 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor3, setlineColor3)}>
                            <Button style={{ background: lineColor3 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini3 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus3 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                    </Grid>
                </Grid>
                    ) : null
                }



{
                    visible4 == true ? (
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                    
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                      
                        <Select  defaultValue='Channel 1' className='select-line'  >
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                       
                        <Select  defaultValue='Y1' className='select-line-color' disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor4 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor4, setlineColor4)}>
                            <Button style={{ background: lineColor4 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini4 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus4 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                    </Grid>
                </Grid>
                    ) : null
                }

{
                    visible5 == true ? (
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                     
                        <Select  defaultValue='Garden - N1' className='select-line' >
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                       
                        <Select  defaultValue='Y1' className='select-line-color'  disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor5 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor5, setlineColor5)}>
                            <Button style={{ background: lineColor5 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini5 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus5 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                    </Grid>
                </Grid>
                    ) : null
                }


{
                    visible6 == true ? (
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                  
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                     
                        <Select  defaultValue='Y1' className='select-line-color'  disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor6 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor6, setlineColor6)}>
                            <Button style={{ background: lineColor6 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini6 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
                        ) : null
                    }
                     {
                        plus6 == true ? (
                            <PlusCircleOutlined className='icon-add-dashboard icon-plus' onClick={() => setvisible()} />
                        ) : null
                    }
                    </Grid>
                </Grid>
                    ) : null
                }


{
                    visible7 == true ? (
                        <Grid container spacing={4} item xs={12} lg={12} className='column'>
                    <Grid item xs={12} lg={3} className='box box-first'>
                    
                        <Select  defaultValue='Garden - N1' className='select-line'>
                                {
                                    device.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                 
                        <Select  defaultValue='Channel 1' className='select-line'>
                                {
                                    status.map((item, index)=>(
                                        <Option value={item} key={index}>
                                            {
                                                item
                                            }
                                        </Option>                            
                                    ))
                                }
                            </Select>
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                  
                        <Select  defaultValue='Y1' className='select-line-color'  disabled={disable}>
                            <Option value='Y1'></Option>
                            <Option value='Y2'></Option>                   
                        </Select>
                        <Input
                        value={lineColor7 || ""}
                        className='picker-color'
                        suffix={
                        <Dropdown trigger={["click"]} overlay={overlay(lineColor7, setlineColor7)}>
                            <Button style={{ background: lineColor7 }}> </Button>
                          </Dropdown>
                        }
                        ></Input>
                       
                    </Grid>
                    <Grid item xs={12} lg={3} className='box'>
                    {
                        mini7 == true ? (
                            <MinusCircleOutlined className='icon-add-dashboard icon-minus' onClick={() => visibleCondi()} />
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

export default LineChart;
