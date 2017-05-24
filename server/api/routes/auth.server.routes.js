var authCtrlr = require('../controllers/auth.server.controller');

module.exports = (app) => {
    app.route('/auth/signup')
        .post(authCtrlr.signup);

}