'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pemesanan, {foreignKey: 'id_user', as: 'pemesanan'});
    }
  }
  user.init({
    foto: DataTypes.TEXT,
    username: DataTypes.STRING,
    email : DataTypes.STRING,
    password: DataTypes.TEXT,
    role: DataTypes.ENUM('admin', 'customer')
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};