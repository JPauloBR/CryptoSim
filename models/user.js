module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Transaction, {
      onDelete: "CASCADE"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.Portfolio, {
      onDelete: "CASCADE"
    });
  };

  return User;
}; 
 