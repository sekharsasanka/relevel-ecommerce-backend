'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Role, { through: 'User_Roles' });
      User.hasMany(models.Order, {
        foreignKey: {
          name:'userId'
        }
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 20]
      }  
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, genSalt);
    user.password = hashedPassword;
  });
  
  return User;
};