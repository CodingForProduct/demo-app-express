'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Team, {
          foreignKey: 'team_id',
        });
      }
    }
  });
  return User;
};
