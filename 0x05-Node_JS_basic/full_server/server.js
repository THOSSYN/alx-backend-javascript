const express = require('express');

const app = express();
const routes = require('./routes/index');

const port = 1245;
const host = 'localhost';
app.use('/', routes);
app.listen(port, host);

export default app;
