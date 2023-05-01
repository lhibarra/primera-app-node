// framework express
const express = require("express")
const PORT = 8080;
const bodyParser = require("body-parser");
const { login } = require("./middleware");
const {userRouter} = require('./routes');
const app = express();
app.use(bodyParser.json());
app.use(login);
app.use("/user", userRouter);
app.listen(PORT, ()=>{
    console.log(`Hola mundo este es nuestro primer servidor. Escuchando puerto: ${PORT}`);
})

