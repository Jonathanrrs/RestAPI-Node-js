const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json')


router.get('/', (req, res) => {
    res.json(movies);
});
router.post('/', (req, res) => {
    const {title, year } = req.body;
    if(title && year) {
        const id = movies.length +1;
        const newMovie = {...req.body, id}
        console.log(newMovie);
        movies.push(newMovie)
        res.json(movies)
    }
    else{
        res.send('No recibido');
    }
});

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {title, year} = req.body;
    if(title && year) {
        _.each(movies, (movie, i) => {
            if(movie.id == id) {
                movie.title = title;
                movie.year = year;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'No existen los campos'})
    }
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id) {
            movies.splice(i,1)
        }
    })
    res.send(movies);
    
});

module.exports = router;