const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const jwt = require('../utils/jwt');

module.exports = {
    get: (req, res, next) => {
        models.User.find().populate('posts')
            .then((users) => res.send(users))
            .catch(next)
    },

    verifyUser: async (req, res) => {
        const token = req.headers.authorization

        try {
            const verify = await jwt.verifyToken(token)
            const userID = verify.id

            if (verify) {
                const user = await models.User.findById(userID).populate('posts')
                res.send(user)
            }
        } catch {
            res.send(false)
        }
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            models.User.create({ username, password })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header('Authorization', token).send(createdUser);
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username }).populate('posts')
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header('Authorization', token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};