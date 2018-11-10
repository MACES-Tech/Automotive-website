const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
app.use(bodyParser.json());


const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./app/route/carbrand.route.js')(app);
require('./app/route/carModel.route.js')(app);

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

app.listen(process.env.port || 4000,function () {

    console.log("App listening at http://%s:%s")
});