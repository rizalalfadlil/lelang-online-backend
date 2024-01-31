'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_history_lelang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_history_lelang.init({
    id_history: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_lelang: DataTypes.INTEGER,
    id_barang: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    penawaran_harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_history_lelang',
  });
  return tb_history_lelang;
};