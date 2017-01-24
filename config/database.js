module.exports = {
  'secret':  process.env.PASSPORT_SECRET,
  'database': process.env.MONGODB_URI || 'mongodb://localhost/poll'
};
