const bodyParser = require('body-parser');
const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth/', require('./routes/auth.routes'));
app.use('/api/posts/', require('./routes/posts.routes'));
app.use('/api/users/', require('./routes/users.routes'));
app.use('/api/profile/', require('./routes/profile.routes'));
app.use('/api/link/', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const PORT = config.get('port') || 5000;
app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`));

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