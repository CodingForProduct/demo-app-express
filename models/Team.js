'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING
  }, {
    tableName: 'teams',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate: function(models) {
        Team.hasMany(models.User, {
          foreignKey: 'team_id',
          as: 'users',
        });
      }
    }
  });
  return Team;
};
