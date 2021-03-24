const validator = require('validator');

const validateTitle = (title) => {
  let seasonEpisodes = title.seasonEpisodes?.split(',');

  // grouping for optional validation on series-specific fields
  let result =
    !validator.isEmpty(title.name) &&
    !validator.isEmpty(title.releaseDate) &&
    validator.isDate(title.releaseDate) &&
    !validator.isEmpty(title.directors) &&
    !validator.isEmpty(title.genres);

  result =
    result &&
    (title.isMovie ||
      (!validator.isEmpty(title.seasonCount) &&
        validator.isInt(title.seasonCount, { min: 0 }) &&
        !validator.isEmpty(title.seasonEpisodes) &&
        seasonEpisodes.length == title.seasonCount &&
        seasonEpisodes.every((ep) => validator.isInt(ep, { min: 1 })) &&
        !validator.isEmpty(title.latestReleaseDate) &&
        validator.isDate(title.latestReleaseDate) &&
        !validator.isEmpty(title.nextReleaseDate) &&
        validator.isDate(title.nextReleaseDate)));

  return (
    result && !validator.isEmpty(title.plot) && !validator.isEmpty(title.imageUrl) && validator.isURL(title.imageUrl)
  );
};

const postTitle = (req, res) => {
  let title = {
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    directors: req.body.directors,
    genres: req.body.genres,
    isMovie: req.body.isMovie,
    seasonCount: req.body.seasonCount,
    seasonEpisodes: req.body.seasonEpisodes,
    latestReleaseDate: req.body.latestReleaseDate,
    nextReleaseDate: req.body.nextReleaseDate,
    plot: req.body.plot,
    imageUrl: req.body.imageUrl,
  };

  let response = validateTitle(title) ? title : { error: 'input validation failed' };

  res.end(JSON.stringify(response));
};

module.exports = {
  postTitle: postTitle,
};
