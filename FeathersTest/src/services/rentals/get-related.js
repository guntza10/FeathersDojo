module.exports = function (options = {}) {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { users, movie } = sequelize.models;
    context.params.sequelize = {
      include: [{ model: users }, { model: movie }],
      raw: false,
    };
    return context;
  };
};
