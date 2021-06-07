module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("contacts", "status", {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      defaultValue: "ACTIVE",
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("contacts", "status", { transaction });
      await queryInterface.sequelize.query("DROP TYPE enum_contact_status", {
        transaction,
      });
    });
  },
};
