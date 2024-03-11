const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
      sex: {
        type: DataTypes.ENUM('masculino', 'femenino', 'no definido'),
        defaultValue: 'no definido',
      },
      paymentDate: {
        type: DataTypes.DATE,
      },
      paymentDueDate: {
        type: DataTypes.DATE,
      },
      paymentStatus: {
        type: DataTypes.ENUM('Pagado', 'Pendiente', 'Vencido'),
        defaultValue: 'Pendiente',
      },
    },
    { timestamps: false }
  );
};
