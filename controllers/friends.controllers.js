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

function addFriend(req, res) {
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
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
}

module.exports = {
  getFriends,
  getFriendById,
  addFriend,
};
