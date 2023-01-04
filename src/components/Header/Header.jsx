import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
const Header = () => {
    return (
        <AppBar position="static" className='appbar'>
            <Toolbar className='toolbar'>
                <Typography variant='p' component='div' sx={{ flexGrow: 1 }}>
                    Travel Advisor
                </Typography>
                <Box display="flex" className='right'>
                    <Typography variant='p' component='div' mt='5px'>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                    <Box className='search'>
                        <Box className='iconContainer'>
                            <SearchIcon className='searchIcon' />
                        </Box>
                        <InputBase placeholder='Search...' />
                    </Box>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
