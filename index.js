const express = require('express');
const path = require('path');
const bodyParse = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3977;

app.use(bodyParse.urlencoded({extended : true}));
app.use(bodyParse.json());


app.listen(PORT,()=>{
    console.log(`Tu server esta listo en el puerto ${PORT}`);

});