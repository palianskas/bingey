const { check, oneOf, validationResult } = require('express-validator');

const Title = require('$/models/title');

const getTitleById = async (req, res) => {
  try {
    const title = await Title.findById(req.params.id);
    
    res.json(title);
  } catch (err) {
    res.json(err);
  }
};

const createTitle = async (req, res, next) => {
  try {
    const errors = validationResult(req).errors;

    if (errors && errors.length !== 0) {
      res.status(400).json({ errors: errors });

      return;
    }

    const title = parseTitle(req);

    title.save((err, title) => {
      if (err) {
        res.status(400).json({ errors: err });

        return;
      }

      res.json(title);
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
        check('directors').custom((value) => {
          if (value.length < 1) {
            throw new Error('Directors are required');
          }

          if (!value.every((director) => director.trim())) {
            throw new Error('Directors format is invalid');
          }

          return true;
        }),
        check('genres').custom((value) => {
          if (value.length < 1) {
            throw new Error('Genres are required');
          }

          if (!value.every((genre) => genre.trim())) {
            throw new Error('Genres format is invalid');
          }

          return true;
        }),
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
            if (value.length != req.body.seasonCount) {
              throw new Error('Season episodes mismatch seasons');
            }

            if (!value.every((ep) => parseInt(ep) != NaN)) {
              throw new Error('Season episode format incorrect');
            }

            return true;
          }),
        check('latestEpisode.season', 'Latest episode season is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('latestEpisode.season', 'Latest episode season format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isInt(),
        check('latestEpisode.number', 'Latest episode number is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('latestEpisode.number', 'Latest episode number format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isInt(),
        check('latestEpisode.releaseDate', 'Latest episode release date is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('latestEpisode.releaseDate', 'Latest episode release date format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isDate(),

        check('upcomingEpisode.season', 'Upcoming episode season is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('upcomingEpisode.season', 'Upcoming episode season format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isInt(),
        check('upcomingEpisode.number', 'Upcoming episode number is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('upcomingEpisode.number', 'Upcoming episode number format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isInt(),
        check('upcomingEpisode.releaseDate', 'Upcoming episode release date is required')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .notEmpty(),
        check('upcomingEpisode.releaseDate', 'Upcoming episode release date format is invalid')
          .if(check('isMovie').isIn(['false', 'False', '0']))
          .isDate(),

        check('plot', 'Plot is required').notEmpty(),
        check('imageUrl', 'Image URL is required').notEmpty(),
        check('imageUrl', 'Image URL format is invalid').isURL(),
        check('similars')
          .optional()
          .custom((value) => {
            if (value && !value.every((id) => id.trim() && id.match(/tt[0-9]+/))) {
              throw new Error('Similar titles format is invalid');
            }

            return true;
          }),
      ];
    }
  }
};

const parseTitle = (req) => {
  return new Title({
    isCustom: true,
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    directors: req.body.directors,
    genres: req.body.genres,
    isMovie: req.body.isMovie,
    seasonCount: req.body.seasonCount,
    seasonEpisodes: req.body.seasonEpisodes,
    latestEpisode: req.body.latestEpisode,
    upcomingEpisode: req.body.upcomingEpisode,
    plot: req.body.plot,
    imageUrl: req.body.imageUrl,
    similars: req.body.similars,
  });
};

module.exports = {
  validate: validate,
  createTitle: createTitle,
  getTitleById: getTitleById,
};
