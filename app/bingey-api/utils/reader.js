// *** USAGE ***
// Upload a data.tsv file to api utils directory
// Run yarn import to upsert data from the file to the database
// Entries with ids that do not exist in the database will be created
// Entries with ids that already exist will be updated
const fs = require('fs');
const csv = require('csv-parser');
const Title = require('$/models/title');
const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.5naxt.mongodb.net/bingey?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  err ? console.info(err) : console.info('connected to database');
});

const acceptableRegions = ['US', 'GB'];
let titleBlock = [];

const getFilteredTitle = (titleBlock) => {
  const original = titleBlock.find((title) => title.types === 'original');
  const translated = titleBlock.find((title) => acceptableRegions.includes(title.region));
  if (original && translated && original.title !== translated.title) {
    return { titleId: original.titleId, title: original.title, alternativeTitle: translated.title };
  } else if (original) {
    return { titleId: original.titleId, title: original.title, alternativeTitle: null };
  } else {
    return { titleId: titleBlock[0].titleId, title: titleBlock[0].title, alternativeTitle: null };
  }
};

const writeToDB = async (block, isEnd = false) => {
  const filteredTitle = getFilteredTitle(block);
  try {
    await Title.updateOne(
      { imdb_id: filteredTitle.titleId },
      { imdb_id: filteredTitle.titleId, name: filteredTitle.title, alternativeName: filteredTitle.alternativeTitle },
      { upsert: true }
    );
    if (isEnd) console.info('finished importing!');
  } catch (err) {
    console.info(err);
  }
};

fs.createReadStream('./utils/data.tsv')
  .pipe(csv({ separator: '\t' }))
  .on('data', (row) => {
    if (titleBlock.length !== 0 && row.titleId !== titleBlock[0].titleId) {
      writeToDB(titleBlock);
      titleBlock = [];
    }
    if (titleBlock.length === 0 || titleBlock[0].titleId === row.titleId) {
      titleBlock = [...titleBlock, row];
    }
  })
  .on('end', () => {
    writeToDB(titleBlock, true);
  })
  .on('error', (err) => {
    console.info(err);
  });
