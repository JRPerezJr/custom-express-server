const express = require('express');
const {
  getFriends,
  getFriendById,
  addFriend,
} = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});
friendsRouter.post('/', addFriend);
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriendById);

module.exports = friendsRouter;
