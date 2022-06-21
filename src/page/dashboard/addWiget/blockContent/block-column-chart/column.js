import { Box, Grid, ListItem } from '@mui/material';
import { Typography, Input, Select } from 'antd';
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import React from 'react';
const { Option } = Select;
const Column = props => {
    const {keys, number, device, status, lineColor, setlineColor, disable, overlay, valueColumn} = props;
    return (
        <Grid container spacing={4} xs={12} className={`wrapper-box wrapper-box-column ${keys <= valueColumn  ? (''): ('box-none')}`}> 
            <Grid item xs={12} lg={1} className='box box-number'><span>{number}</span></Grid>
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
            <Grid item xs={12} lg={4} className='box'>
                <Select defaultValue='Y1' className='select-line-color' disabled={disable}>
                    <Option value='Y1'></Option>
                    <Option value='Y2'></Option>                   
                </Select>
                <Input
                value={lineColor || ""}
                className='picker-color'
                suffix={
                <Dropdown trigger={["click"]} overlay={overlay(lineColor, setlineColor)}>
                    <Button style={{ background: lineColor }}> </Button>
                </Dropdown>
                }
                ></Input>
            
            </Grid>
        </Grid>

    );
}

export default Column;
