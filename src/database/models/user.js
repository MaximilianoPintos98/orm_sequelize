'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // hasMany
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: "orders"
      });

      // belongsToMany
      User.belongsToMany(models.Role, {
        as: 'roles',
        through: UserRole,
      });

      // belongsTo
      User.belongsTo(models.Address);
    }
  };

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User'
  });
  
  return User;
};