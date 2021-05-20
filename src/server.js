const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')

require('dotenv').config()

const app = express();

app.listen(process.env.PORT, () => {
    console.log("app is online");
});