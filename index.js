const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

app.listen(process.env.port || 4000,function () {
    console.log('App Started');
});