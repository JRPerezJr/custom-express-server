const express = require('express');
const app = express();
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000;

// first middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`🦄 ${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public/app')));
app.use('/music', express.static(path.join(__dirname, 'public/app2')));
app.use('/vue-music', express.static(path.join(__dirname, 'public/app3')));

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`🦄 Flying high on port ${PORT}`);
});
