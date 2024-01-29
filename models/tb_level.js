'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_level.init({
    id_level: DataTypes.INTEGER,
    level: {
      type: DataTypes.ENUM,
      values: ['administrator','petugas']
    }
  }, {
    sequelize,
    modelName: 'tb_level',
  });
  return tb_level;
};