const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('$/routes.js');

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.5naxt.mongodb.net/bingey?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.info('connected to database');
});

// titleController.postTitle();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
