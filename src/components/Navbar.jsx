import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material';


const Header = styled(AppBar)`

    background: #111111;
`
const Tab = styled(Typography)`
    margin-right:10px;
`



const Navbar = () => {
    return (
        <Header position='static' >
            <Toolbar>
                <Tab>Home</Tab>
                <Tab>All User</Tab>
                <Tab>Add User</Tab>
            </Toolbar>
        </Header>
    );
}

export default Navbar;
