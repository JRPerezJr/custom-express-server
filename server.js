const express = require('express');
const {
  getMessages,
  postMessage,
} = require('./controllers/messages.controllers');

const {
  getFriends,
  getFriendById,
  addFriend,
} = require('./controllers/friends.controllers');

const app = express();

const PORT = 3000;

// first middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', addFriend);
app.get('/friends', getFriends);
app.get('/friends/:friendId', getFriendById);

app.get('/messages', getMessages);
app.post('/messages', postMessage);

app.listen(PORT, () => {
  console.log(`🦄 Flying high on port ${PORT}`);
});
