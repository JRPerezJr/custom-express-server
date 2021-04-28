function getMessages(req, res) {
  res.send('<h1>Here there be monsters.</h1>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
