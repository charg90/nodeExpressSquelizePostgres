import { Tweets } from "../models/tweets.js";
import { Users } from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const postUser = async (req, res) => {
  const { name, lastName, email } = req.body;
  try {
    const newUser = await Users.create({
      name: name,
      lastName: lastName,
      email: email,
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, email } = req.body;
  try {
    const user = await Users.findByPk(id);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const reponse = await Users.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserTweets = async (req, res) => {
  const { id: userId } = req.params;
  const tweets = await Tweets.findAll({
    where: {
      userId: userId,
    },
  });

  res.json(tweets);
};
