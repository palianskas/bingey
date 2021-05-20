const Title = require('$/models/title');

const parseSearchResults = (results) => {
  return results.map(parseTitle);
};

const parseTitle = (resultTitle) => {
  return {
    _id: resultTitle._id,
    isCustom: resultTitle.isCustom,
    name: resultTitle.name,
    releaseDate: resultTitle.releaseDate?.toLocaleString('lt-LT').split(' ')[0],
    directors: resultTitle.directors,
    genres: resultTitle.genres,
    isMovie: resultTitle.isMovie,
    seasonCount: resultTitle.seasonCount,
    seasonEpisodes: resultTitle.seasonEpisodes,
    latestEpisode: {
      ...resultTitle.latestEpisode,
      releaseDate: resultTitle.latestEpisode.releaseDate?.toLocaleString('lt-LT').split(' ')[0],
    },
    upcomingEpisode: {
      ...resultTitle.upcomingEpisode,
      releaseDate: resultTitle.upcomingEpisode.releaseDate?.toLocaleString('lt-LT').split(' ')[0],
    },
    plot: resultTitle.plot,
    imageUrl: resultTitle.imageUrl,
    similars: resultTitle.similars,
  };
};

const searchTitle = async (req, res) => {
  let query = req.query.q;

  Title.find({ name: { $regex: query, $options: 'i' } }, (err, docs) => {
    if (err) {
      res.status(400).json({ errors: err });

      return;
    }

    if (!docs.length > 0) {
      res.status(404).json({ error: 'No titles found' });

      return;
    }

    res.json({ results: parseSearchResults(docs.splice(0, 10)) });
  });
};

module.exports = { searchTitle };
