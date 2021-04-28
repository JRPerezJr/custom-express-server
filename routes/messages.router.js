const express = require('express');

const {
  getMessages,
  postMessage,
} = require('../controllers/messages.controllers');

const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});
messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessage);

module.exports = messagesRouter;
