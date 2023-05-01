const { response } = require("express");
const express = require("express");
const router = express.Router();
router.get('/:userId', (req, res)=>{
    const userId = req.params.userId;
    
    res.send({userId})
});
// //devuelve el nombre en objeto
router.get('/',(req, res)=>{
    const {name, email} = req.query;
    res.send({name, email})
});

// el objeto toma los valores de un jsonn que se le pasa y muestra los datos
//le pasamos el json y muestra el mensaje Los datos que enviaste son: con  los valores del json
router.post("/", async(req, res) =>{
    const {nombre,apellido, email, password} = req.body;
    try{
        //res.send({name, email, password: "****"})
        const newUser = await userService.createUser({
            nombre,
            apellido, 
            email, 
            password});
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    res.send(response);

});
//modificar un usuario
router.put("/:userId", (req, res)=>{
    const userId = req.params.userId;
    const {name, email, password} = req.body;
    res.send({id: userId, name, email, password: "****"})
});

//eliminar un usuario
router.delete("/:userId", (req, res)=>{
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`)
});
module.exports = router;

