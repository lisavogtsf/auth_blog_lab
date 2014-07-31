// based on:
// https://github.com/wdi-sf-july/starter_code_for_auth/blob/master/migrations%2F20140729101427-create_users_table.js
module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('users',
      {id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      username: {
        type: DataTypes.STRING,
          unique: true, 
          allowNull: false,
        },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
    .complete(done);
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished

    migration.dropTable('users')
      .complete(done);
  }
};