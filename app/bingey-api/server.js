const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const searchRoutes = require('$/routes/search');
const titleRoutes = require('$/routes/title');
const watchlistRoutes = require('$/routes/watchlist');

const { MONGODB_HOSTNAME, MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const uri = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOSTNAME}/bingey?authSource=admin`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  err ? console.info(err) : console.info('connected to database');
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', searchRoutes);
app.use('/titles', titleRoutes);
app.use('/watchlists', watchlistRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
