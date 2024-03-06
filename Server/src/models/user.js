const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
      lastName: {
        type: DataTypes.STRING(50),
      },
      dni: {
        type: DataTypes.STRING,
      },
      carnet: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  User.associate = (models) => {
    User.hasMany(models.Membership, {
      foreignKey: 'userId',
      as: 'memberships',
    });
  };

  return User;
};