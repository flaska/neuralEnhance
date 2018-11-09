const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('../data/result'))

app.listen(port, ()=> console.log('WebServer listening on port ' + port));
