
module.exports = (app) => {
    require('../api/routes/auth.server.routes')(app);
    require('../api/routes/user.routes')(app);

    return app;
};