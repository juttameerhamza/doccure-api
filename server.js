require('dotenv').config();

const app = require('./app');
const sequelize = require('./database/sequelize');

sequelize.authenticate({ logging: false })
    .then(() => console.log('Database conneted.'))
    .catch((error) => console.log(error))

const port = process.env.PORT;
const envoironment = process.env.NODE_ENV;
app.listen(port, () => {
    console.log(`Application running on ${port} and ${envoironment} mode...`);
})