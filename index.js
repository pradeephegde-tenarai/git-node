const express = require('express');
const routes = require('./routes/routes');
const port = 8000;
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

routes(router)

app.use('/', router);

app.listen(port, function () {
    console.log("Listening " + port);
});