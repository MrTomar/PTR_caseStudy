// config/db.js
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => {
      console.error('DB failed:', err);
      process.exit(1);
    });
};
