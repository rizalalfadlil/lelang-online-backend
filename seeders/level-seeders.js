// File: seeders/level-seeder.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Insert data level to level table
      await queryInterface.bulkInsert(
        "tb_levels",
        [
          {
            level: "administrator",
          },
          {
            level: "petugas",
          },
        ],
        {}
      );
    },
  
    down: async (queryInterface, Sequelize) => {
      // Delete data level from level table
      await queryInterface.bulkDelete("tb_levels", null, {});
    },
  };
  