const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Membership = sequelize.define(
    "Membership",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      paymentDate: {
        type: DataTypes.DATE,
      },
      paymentDueDate: {
        type: DataTypes.DATE,
      },
      paymentStatus: {
        type: DataTypes.ENUM('Pagado', 'Pendiente', 'Vencido'),
        defaultValue: 'Pendiente', // Puedes establecer un valor predeterminado si lo deseas
      },
    },
    { timestamps: false }
    
  );
  return Membership;
};
