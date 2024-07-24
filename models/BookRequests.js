const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookRequests extends Model {}

BookRequests.init(
    {
      bookID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },

      bookTitle: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      bookIDStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },