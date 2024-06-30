import React from 'react'
import { AppBar, Toolbar} from '@mui/material';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`

    background: #111111;
`
const Tab = styled(NavLink)`
    margin-right:10px;
    color:white;
    text-decoration:none;
`



const Navbar = () => {
    return (
        <Header position='static' >
            <Toolbar>

                <Tab to={"/"} >Home</Tab>
                <Tab to={"/all"} >All User</Tab>
                <Tab to={"/add"} >Add User</Tab>

            </Toolbar>
        </Header>
    );
}

export default Navbar;
