const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(` Hello, Server is listening to port ${PORT}`)
})