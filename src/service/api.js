import axios from "axios";

const API_URL = 'http://localhost:3002/users'

//api to add user
export const addUser = async (data) => {

    try {
        return await axios.post(API_URL, data)

    } catch (error) {
        console.log("Error while adding the user", error.message);
    }




}

//api to get all users
export const getUser = async () => {

    try {

        return await axios.get(API_URL);

    } catch (error) {
        console.log("Failed to get User", error.message);
    }
}


export const getOneUser = async (data) => {

    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log("Failed to get One User", error.message);
    }
}

export const editUser = async (data, id) => {

    try {
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
        console.log("Failed to edit user".error.message);
    }
}

export const deleteUser = async (id) =>{

    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("Failed to delet     user".error.message);
    }
}