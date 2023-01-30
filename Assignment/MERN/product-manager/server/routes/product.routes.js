const ProductController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/products', ProductController.readAll);
    app.get('/api/products/:id', ProductController.read);
    app.put('/api/products/:id', ProductController.update);
    app.post('/api/products', ProductController.create);
    app.delete('/api/products/:id', ProductController.delete);
}
