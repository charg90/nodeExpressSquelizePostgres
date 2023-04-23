import { Tweets } from "../models/tweets.js";

export const getTweets = async (req, res) => {
  try {
    const tweet = Tweets.findAll();
    res.json(tweet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateTweets = async (req, res) => {
  try {
  } catch (err) {}
};
export const deleteTweets = async (req, res) => {
  try {
  } catch (err) {}
};
export const postTweets = async (req, res) => {
  const { text, userId } = req.body;
  try {
    const newTweet = await Tweets.create({ text, userId });

    res.json(newTweet);
  } catch (err) {}
};
