module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn("users", "provider");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "provider", {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false,
    });
  },
};
