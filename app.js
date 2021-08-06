const bodyParser = require('body-parser');
const express = require ('express');
const config = require('config');
const mongoose = require('mongoose');

//Routes
//const postsRoutes = require ('./routes/posts.routes');
//const usersRoutes = require ('./routes/users.routes');

const app = express();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth/', require('./routes/auth.routes'));
app.use('/api/posts/', require('./routes/posts.routes'));
app.use('/api/users/', require('./routes/users.routes'));
app.use('/api/link/', require('./routes/link.routes'));



mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

    const PORT = config.get('port') || 5000;
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`));

    //User routes
    //app.use('/api/posts', postsRoutes);
    //app.use('/api/users', usersRoutes);

/*
async function start() {
    try {
        
        await mongoose.connect(config.get('mongoUri'), 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        );
        const PORT = config.get('port') || 5000;
        
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`));
    } catch (e) {
        console.log('Server error', e.mongoose);
        process.exit(1);
    }
}*/

//start();