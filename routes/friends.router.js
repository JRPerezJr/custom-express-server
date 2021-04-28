const express = require('express');
const {
  getFriends,
  getFriendById,
  addFriend,
} = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.post('/', addFriend);
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriendById);

module.exports = friendsRouter;
