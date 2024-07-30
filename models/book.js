const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

//Book variable definitions
Book.init(
  {
    bookID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    bookISBN: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookAuthor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookPages: {
        type: DataTypes.INTEGER,
    },
    bookEdition: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookPublisher_ID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookPubYear: {
        type: DataTypes.INTEGER,
    },
    bookCategory: {
        type: DataTypes.STRING,
    },    bookIDStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
    // Updated modelName from `Project` to `Book`
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Book',
  }
);

// Updated from `Project` to `Book`
module.exports = Book;
