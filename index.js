const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
app.use(bodyParser.json());


const db = require('./app/config/db.config.js');
const passport = require('passport');
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./app/route/carbrand.route.js')(app);
require('./app/route/carModel.route.js')(app);
require('./app/route/authentication.route.js')(app);

app.use(passport.initialize());
app.use(passport.session());
require('./app/config/passport.js');


app.use(function(err,req,res,next){
    // error handlers
    // Catch unauthorised errors
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }

    res.status(422).send({error:err.message})
})
// process.env.port ||
app.listen( 4000,function () {

    console.log("App listening at http://%s:%s")
});