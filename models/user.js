// user.js
// from https://github.com/wdi-sf-july/starter_code_for_auth/blob/master/models%2Fuser.js
var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('user', {
     username: { 
        type: DataTypes.STRING, 
        unique: true, 
        validate: {
          len: [6, 30],
          }
    },
    password: {
        type:DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    
    {
      classMethods: {
        associate: function(db){
          User.hasMany(db.post);
        }
      }
    } //close classMethods outer 

  ); // close define user
  return User;
}; // close User function
