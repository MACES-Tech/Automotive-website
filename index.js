const express = require('express');
const bodyParser = require('body-parser')

// set up express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
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
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.listen(process.env.port || 4000,function () {

    console.log("App listening at http://%s:%s")
});