const Joke = require('../models/joke.model');

module.exports.readAll = (req, res) => {
    Joke.find()
        .then((results) => {
            res.json({ jokes: results })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.read = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(result => {
            res.json({ joke: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.readRandom = (req, res) => {
    Joke.aggregate([{ $sample: {size : 1} }])
        .then(result => {
            res.json({ joke: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(result => {
            res.json({ joke: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.update = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(result => {
            res.json({ joke: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.delete = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
