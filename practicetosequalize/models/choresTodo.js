module.exports = function (sequelize, DataTypes) {
  var ChoresTodoList = sequelize.define("ChoresTodoList", {
    chore_name: DataTypes.STRING,
    allowNull: false,
    validate: DataTypes.INTEGER,
    len: [1, 150],
    chore_done: DataTypes.BOOLEAN,
    defaultValue: false,
    createdAT: DataTypes.DATE,
    allowNull: false,
    updatedAt: DataTypes.DATE,
    allowNull: false,
    foreignKey: DataTypes.INTEGER,
    allowNull: false,
  });
  return ChoresTodoList;
};
