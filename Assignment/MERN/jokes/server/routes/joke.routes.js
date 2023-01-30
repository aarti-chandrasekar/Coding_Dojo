const JokeController = require('../controllers/joke.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.readAll);
    app.get('/api/jokes/random', JokeController.readRandom);
    app.get('/api/jokes/:id', JokeController.read);
    app.put('/api/jokes/update/:id', JokeController.update);
    app.post('/api/jokes/new', JokeController.create);
    app.delete('/api/jokes/delete/:id', JokeController.delete);
}
