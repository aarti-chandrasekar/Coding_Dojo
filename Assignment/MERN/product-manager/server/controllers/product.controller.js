const Product = require('../models/product.model');
 
module.exports.readAll = (req, res) => {
    Product.find()
        .then((results) => {
            res.json({ products: results })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.read = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(result => {
            res.json({ product: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(result => {
            res.json({ product: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.update = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(result => {
            res.json({ product: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
