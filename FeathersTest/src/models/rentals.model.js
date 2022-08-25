// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const rentals = sequelizeClient.define(
    "rentals",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, defaultValue: Date.now },
      updatedAt: { type: DataTypes.DATE, defaultValue: Date.now },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  rentals.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    const { users, movie } = models;
    rentals.belongsTo(users);
    rentals.belongsToMany(movie, { through: "MovieRentals" });
  };

  return rentals;
};
