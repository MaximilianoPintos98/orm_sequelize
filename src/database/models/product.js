'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Gender);

      // hasMany
      Product.hasMany(models.Image, {
      foreignKey: 'productId',
        as: "images"
      });

      // hasOne
      Product.hasOne(models.OrderDetail);
    }
  };

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stockMin: DataTypes.INTEGER,
    stockMax: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product'
  });

return Product;
};