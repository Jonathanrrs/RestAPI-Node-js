const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuracionoes
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Rutas
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
//Empezando el server
app.listen(app.get('port'), () => {
    console.log('Running on port 3000');
    
});