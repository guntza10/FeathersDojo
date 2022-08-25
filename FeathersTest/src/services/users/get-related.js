module.exports = function (options = {}) {
  return async (context) => {
    const sequelize = context.app.get('sequelizeClient');
    const { rentals } = sequelize.models;
    context.params.sequelize = {
      include: [{ model: rentals }],
      raw: false,
    };
    return context;
  };
};
