const { check, oneOf, validationResult } = require('express-validator');

const createTitle = async (req, res, next) => {
  try {
    const errors = validationResult(req).errors;

    if (errors && errors.length != 0) {
      res.status(400).json({ errors: errors });

      return;
    }

    // TODO: insert object into db

    res.json({
      id: req.body.id,
      isCustom: true,
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
      similars: req.body.similars,
    });
  } catch (error) {
    return next(error);
  }
};

const validate = (method) => {
  switch (method) {
    case 'createTitle': {
      return [
        check('name', 'Name is required').trim().notEmpty(),
        check('releaseDate', 'Release date is required').trim().notEmpty(),
        check('releaseDate', 'Release date format is invalid').isDate(),
        check('directors', 'Directors are required').notEmpty(),
        check('genres', 'Genres are required').notEmpty(),
        check('seasonCount', 'Season count is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('seasonCount', 'Season count format invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isInt({ min: 1 }),
        check('seasonEpisodes', 'Season episodes are required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('seasonEpisodes')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .custom((value, { req }) => {
            seasonEpisodes = value.split(',');
            if (seasonEpisodes.length != req.body.seasonCount) {
              throw new Error('Season episodes mismatch seasons');
            }

            if (!seasonEpisodes.every((ep) => parseInt(ep) != NaN)) {
              throw new Error('Season episode format incorrect');
            }

            return true;
          }),
        check('latestReleaseDate', 'Latest release date is requried')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('latestReleaseDate', 'Latest release date format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isDate(),
        check('nextReleaseDate', 'Next release date is requried')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('nextReleaseDate', 'Next release date format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isDate(),
        check('plot', 'Plot is required').notEmpty(),
        check('imageUrl', 'Image URL is required').notEmpty(),
        check('imageUrl', 'Image URL format is invalid').isURL(),
        check('similars')
          .optional()

          .custom((value) => {
            similars = value.split(',');
            if (!similars.every((id) => id.match(/tt[0-9]+/))) {
              throw new Error('Similars format incorrect');
            }

            return true;
          }),
      ];
    }
  }
};

module.exports = {
  validate: validate,
  createTitle: createTitle,
};
