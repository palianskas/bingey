const Title = require('$/models/title');

const searchTitle = async (req, res) => {
  let query = req.query.q; //get title

  Title.find({ name: { $regex: query, $options: 'i' } }, (err, docs) => {
    if (err) {
      res.status(400).json({ errors: err });

      return;
    }

    if (!docs.length > 0) {
      res.status(404).json({ error: 'No titles found' });

      return;
    }

    res.json({ titles: docs });
  });
};

module.exports = { searchTitle };
