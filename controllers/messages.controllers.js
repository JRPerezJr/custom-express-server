const path = require('path');

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/images', 'live-stage.jpg'));

  //   res.send('<h1>Here there be monsters.</h1>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
