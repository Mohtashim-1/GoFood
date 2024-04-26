// const express = require('express')
// const app = express()
// const port = 4000
// const mongodb = require('./db')
// mongodb();
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     next()
// })
// app.use(express.json())
// app.use('/api', require('./Routes/CreateUser'));


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./db');

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Parse JSON bodies
app.use(express.json());

// Route middleware
app.use('/api', require('./Routes/CreateUser'));

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
