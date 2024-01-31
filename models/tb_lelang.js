'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_lelang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_lelang.init({
    id_lelang: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_barang: DataTypes.INTEGER,
    tgl_lelang: DataTypes.DATE,
    harga_akhir: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_petugas: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM, // Menentukan tipe data enum
      values: ["dibuka", "ditutup"], // Menentukan nilai-nilai enum
    },
  }, {
    sequelize,
    modelName: 'tb_lelang',
  });
  return tb_lelang;
};