module.exports = function (sequelize, DataTypes) {
  var ChoresTodoList = sequelize.define("ChoresTodoList", {
    chore_name: DataTypes.STRING,
    allowNull: false,
    validate: DataTypes.INTEGER,
    len: [1, 150],
    chore_done: DataTypes.BOOLEAN,
    defaultValue: false,
    foreignKey: DataTypes.INTEGER,
    allowNull: false,
  });
  return ChoresTodoList;
};
