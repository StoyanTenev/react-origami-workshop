const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@test.p5a42.mongodb.net/origami?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];