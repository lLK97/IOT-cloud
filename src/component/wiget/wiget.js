import { Box, ClickAwayListener, Grow, List, ListItem, MenuItem, MenuList, Paper, Popper, Typography } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { buttonDefault, iconLogin, iconUserHead, textDropdown } from '../styleMIUI/styleMIUI';
const Wiget = props => {
    const loginDropdown = [
        {
            name: 'English'
        },
        {
            name: 'Vietnamese'
        }
    ]
    const userDropdown = [
        {
            name: 'Update Account'
        },
        {
            name: 'English'
        },
        {
            name: 'Me'
        }
    ]
    const [open, setOpen] = useState(false);
    const prevOpen = useRef(open);
    const anchorRef = useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const handleClose = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    }
    const handleListKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            setOpen(false);
        } else if (e.key === 'Escape') {
            setOpen(false);
        }
    }




    const icon = {
        padding: '4px 24px 0 0',
        cursor: 'pointer'
    }
    const popper = {
        zIndex: '100',
        marginTop: '8px !important',
        marginLeft: '10px !important',
        '>ul': {
            p: 0
        }
    }

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;


    }, [open])
    return (
        <List sx={{ width: '100%' }}>
            {
                props.userInfo == 'true' ? (
                    <Box>
                        <ListItem
                            className='info-right'
                            ref={anchorRef}
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            onMouseEnter={handleToggle}
                            sx={{ ...icon }}
                        >
                            <PublicOutlinedIcon sx={{ ...iconLogin }} />
                            <Typography className='head-info-right'>English</Typography>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: 'white' }} />
                        </ListItem>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement='bottom-start'
                            transition
                            disablePortal
                            sx={{ ...popper }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'right top' : 'right bottom',
                                    }}
                                >
                                    <Paper >
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onMouseOver={handleListKeyDown}

                                            >
                                                {
                                                    loginDropdown.map((item, index) => (
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ ...textDropdown }}>{item.name}</Typography>
                                                        </MenuItem>
                                                    ))
                                                }
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Box>
                ) :
                    (
                        <Box>
                            <ListItem
                                className='info-right'
                                ref={anchorRef}
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                onMouseEnter={handleToggle}>
                                <Typography className='head-info-right'>iot.demo@milesight.com</Typography>
                                <PersonRoundedIcon sx={{ ...iconUserHead, width: '32px', height: '32px' }} />
                            </ListItem>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                                sx={{ ...popper }} >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'right top' : 'right bottom',
                                        }}
                                    >
                                        <Paper >
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onMouseOver={handleListKeyDown}
                                                >

                                                    {
                                                        userDropdown.map((item, index) => (
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ ...textDropdown }}>{item.name}</Typography>
                                                            </MenuItem>
                                                        ))
                                                    }
                                                    <MenuItem button sx={{ ...buttonDefault }}>
                                                        <Typography sx={{ ...textDropdown }}>Log Out</Typography>
                                                    </MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Box>
                    )
            }

        </List >
    );
}

export default Wiget;
