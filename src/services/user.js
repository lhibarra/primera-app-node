const userProvider = require("../providers/userProvider")
const getUser = (id) =>{
    return {id, name: "John"};
};
const createUser = async(user) => {
    return await userProvider.createUser(user);
};
const updateUser = (id, user) => {
    //llamada al objeto provider con el objeto user
    return user;
};

const deleteUser = (id)=>{
    //lamada al provider con el id
    return `Adios usuario ${id}`;
};
const queryUser = (name)=>{};
module.exports = {getUser, createUser, updateUser, deleteUser}