import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import { getUser, deleteUser } from '../service/api'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const StyleTable = styled(Table)`
    width: 80%;
    margin:50px auto 0 auto;
`

const StyledThead = styled(TableRow)`

    background: #000;
    & > th{
        color: white;
        font-size:20px;
    }

`

const StyledTbody = styled(TableRow)`

    & > td{
        font-size:20px;
    }

`

function AllUser() {

    const [user, setUser] = useState([]);


    useEffect(() => {

        getUserDetails();

    }, []);

    const handleDelete = async (id) => {
        let respone = await deleteUser(id);

        if (respone.statusText === "OK") {

            setUser(prev => prev.filter((item) =>
                item.id !== id
            ))
        }
    }

    const getUserDetails = async () => {
        let response = await getUser();
        console.log(response);
        setUser(response.data);
    }


    return (


        <StyleTable>
            <TableHead>
                <StyledThead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </StyledThead>
            </TableHead>

            <TableBody>

                {
                    user.map(item => (
                        <StyledTbody key={item.id} >
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.name} </TableCell>
                            <TableCell> {item.username} </TableCell>
                            <TableCell> {item.email} </TableCell>
                            <TableCell> {item.phone} </TableCell>
                            <TableCell>
                                <Button
                                    variant='contained'
                                    sx={{ marginRight: "6px" }}
                                    component={Link}
                                    to={`/edit/${item.id}`}
                                >
                                    edit</Button>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => handleDelete(item.id)}
                                >delete</Button>
                            </TableCell>
                        </StyledTbody>
                    ))
                }

            </TableBody>
        </StyleTable>
    )
}

export default AllUser
