'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_lelangs', {
      id_lelang: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_barang: {
        type: Sequelize.INTEGER
      },
      tgl_lelang: {
        type: Sequelize.DATE
      },
      harga_akhir: {
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      id_petugas: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM, // Menentukan tipe data enum
        values: ["dibuka", "ditutup"], // Menentukan nilai-nilai enum
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_lelangs');
  }
};