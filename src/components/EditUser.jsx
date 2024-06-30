import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, getOneUser } from '../service/api'


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


function EditUser() {

    const [user, setUser] = useState(userObject);

    const navi = useNavigate();
    const { id } = useParams();

    console.log(id);

    useEffect(() => {

        getUserData();
    }, []);

    const getUserData = async () => {
        let response = await getOneUser(id);
        // console.log(response);
        setUser(response.data);
    }

    const onNameChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetail = async () => {
        await editUser(user, id);
        navi("/user-crud-app/all");   
    }
    return (

        <Container>
            <Typography variant='h3' >Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input
                    onChange={(e) => onNameChange(e)}
                    name='name'
                    value={user.name}
                />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input
                    onChange={(e) => onNameChange(e)}
                    name='username'
                    value={user.username}
                />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input
                    onChange={(e) => onNameChange(e)}
                    name='email'
                    value={user.email}
                />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input
                    onChange={(e) => onNameChange(e)}
                    name='phone'
                    value={user.phone}
                />
            </FormControl>

            <FormControl><Button variant='contained' onClick={() => addUserDetail()} >Edit User</Button></FormControl>
        </Container>

    )
}

export default EditUser
