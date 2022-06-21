import React from 'react';
import Battery1BarRoundedIcon from '@mui/icons-material/Battery1BarRounded';
import { Select } from 'antd';
import { ListItem } from '@mui/material';
import { Checkbox } from 'antd';
const { Option } = Select;

const BlockDevice = props => {
    const {arrayOption} = props
        return(
            <div className="block-add-device">
                <ListItem>
                    <Checkbox></Checkbox>
                    <span>Battery</span>
                    <Select defaultValue='Battery' className='select'>
                        <Option value='Battery'><Battery1BarRoundedIcon></Battery1BarRoundedIcon>Battery</Option>
                    </Select>
                </ListItem>
                {
                    arrayOption.map((item, index)=>(
                        <ListItem>
                            <Checkbox></Checkbox>
                            <span>{item.title}</span>
                            <Select defaultValue={item.default} className='select'>
                                {
                                    item.innerOption.map((iteml, index)=>(
                                        <Option value={iteml.title}>{iteml.icon}{iteml.title}</Option>
                                    ))
                                }
                            </Select>
                        </ListItem>
                    ))
                }
            </div>
        )
}

export default BlockDevice;
