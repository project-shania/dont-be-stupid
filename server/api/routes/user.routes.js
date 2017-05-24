var userCtrlr = require('../controllers/user.controller');

module.exports = (app) => {
    app.route('/user/:id')
        .get(userCtrlr.findUserById)
        .put(userCtrlr.updateUser)
        .delete(userCtrlr.deleteUser);
}