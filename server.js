const express = require('express');
const {
  getMessages,
  postMessage,
} = require('./controllers/messages.controllers.js');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Keiko Yamada',
  },
  {
    id: 1,
    name: 'Yuki Kashiwagi',
  },
  {
    id: 2,
    name: 'Yurina Matsuri',
  },
];

// first middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
});

app.get('/messages', getMessages);
app.post('/messages', postMessage);

app.listen(PORT, () => {
  console.log(`🦄 Flying high on port ${PORT}`);
});
