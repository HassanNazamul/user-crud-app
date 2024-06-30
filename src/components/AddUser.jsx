import React from 'react'
import { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, styled } from '@mui/material'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'


//styling the group
const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0  auto;
    & > div {
        margin-top: 20px;
    }
`
//creating a user object to store data
const userObject = {

    name: '',
    username: '',
    email: '',
    phone: ''
}


function AddUser() {

    const navi = useNavigate();

    const [user, setUser] = useState(userObject);

    const onNameChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetail = async () => {
        await addUser(user);
        navi("/user-crud-app/all");   
    }

    return (

        <Container>
            <Typography variant='h3' >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onNameChange(e)} name='name' />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onNameChange(e)} name='username' />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onNameChange(e)} name='email' />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onNameChange(e)} name='phone' />
            </FormControl>

            <FormControl><Button variant='contained' onClick={() => addUserDetail()} >Add User</Button></FormControl>
        </Container>

    )
}

export default AddUser
