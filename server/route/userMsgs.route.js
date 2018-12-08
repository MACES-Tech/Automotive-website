module.exports = function(app) {
 
    const userMsgs = require('../controller/user.msgs.controller.js');
 
    app.post('/api/msg', userMsgs.create);
    app.get('/api/msg/:typeId', userMsgs.findByType);
 
}