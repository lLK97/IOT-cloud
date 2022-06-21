import React from 'react';
import { Grid, List, ListItem } from '@mui/material';
import { Typography } from '@mui/material';



export const CanvasOffice = props =>{
    return(
        <Grid item xs={12} className='content-canvas'>
            <div className='left'>
                <Typography className="title">{props.title}</Typography>
                <div className='illustrator'>
                    <div className='wrapper-image'>
                        <img src={props.image} alt='Not Found'/>
                    </div>
                </div>
            </div>         
            <div className='right'>
                <List className="list-icon">
                    {
                        props.icon.map(item =>{
                            return(
                                <ListItem>
                                    {
                                        item
                                    }
                                </ListItem>
                            )
                        })
                    }
                  
                    
                </List>
            </div>   
        </Grid>
    )
}


