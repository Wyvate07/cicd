'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World, Hope you are doing well !! ${process.env.USER_NAME} ${process.env.PROD_PYTHON_BACKEND_CASHFREE_PUBLIC_KEY}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
