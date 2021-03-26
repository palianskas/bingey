const Title = require('../models/title');

const searchTitle = (req, res) => {
    let name = req.params.name; //get title
    
   Title.findOne({name:name}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Title doesn't exist."});
    }
    else return res.json(data); 
    });
};

module.exports = {searchTitle};