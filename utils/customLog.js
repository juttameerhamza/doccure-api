const colors = require('colors');

module.exports = (req, res, next) => {
    console.log("----------------------------------------------------------");
    console.log(`${new Date()}`.cyan);
    console.log(req.body);
    return next();
}