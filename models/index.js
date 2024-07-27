const User = require('./User');
const Book = require('./book');

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

//Renamed to make work with group project, not mini code? 
module.exports = { User, Book };