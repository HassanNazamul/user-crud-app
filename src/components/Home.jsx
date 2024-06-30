import { Typography } from '@mui/material'
import React from 'react'

function Home() {
    return (
        <div>
            <Typography variant="h2">
                Welcome to User Manager
            </Typography>

            <Typography>Click on All user above link to view user list</Typography>
            <Typography>Click on Add User above link to add new user</Typography>

        </div>
    );
}

export default Home
