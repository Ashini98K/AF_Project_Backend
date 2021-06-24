const User = require("../models/user-model");

const createUser = async (req, res) => {
  if (req.body) {
    const user = new User(req.body);
    await user
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const updateUser = async (req, res) => {
  const typeadd = req.body.type;
  console.log(typeadd);
  await User.findByIdAndUpdate(
    req.params.id,
    { $set: { type: req.body.type } },
    { upsert: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  createUser,
  updateUser,
};
