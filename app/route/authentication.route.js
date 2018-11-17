module.exports = function(app) {
 
    const authentication = require('../controller/authentication.js');
    
    app.post('/api/register', authentication.register);
    
    app.post('/api/login', authentication.login);

}