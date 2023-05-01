const axios = require('axios');
const { response } = require('express');
const url = require('url');
axios.interceptors.request.use(config =>{
    console.log("Enviando url", config.url);
    return config;
}, (error)=>{
    return Promise.reject(error);
}) 


axios.interceptors.response.use(response =>{
    console.log("Lllamada con exito", response.data);
    return response;
}, (error)=>{
    console.error("error a la llamada", error);
});


//metodo get
async function makeRequest(){
    let payload = {name:"Lujan", email:"luji@gmail.com"}
    const params = new url.URLSearchParams(payload);

    let config ={
        method: 'get',
        url: `http://localhost:8080/user?${params}`
    };
    let response = await axios(config);
    console.log("Datos del server:" ,response.data)
};
makeRequest();

// axios.get('http://localhost:8080/user/123').then(rest=>{
//     console.log("Datos del server:" ,rest.data)
// })
//metodo post
async function makeRequest(){
    let payload = {name:"Lujan", email:"luji@gmail.com"}
    let config ={
        data: payload,
        method: 'post',
        url: `http://localhost:8080/user`
    };
    let response = await axios(config);
    console.log("Datos del server:" ,response.data)
};