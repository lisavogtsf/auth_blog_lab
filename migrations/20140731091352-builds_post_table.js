// based on:
// https://github.com/wdi-sf-july/starter_code_for_auth/blob/master/migrations%2F20140729101358-create_posts_table.js

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    
    migration.createTable('posts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // REQUIRED: createdAt and updatedAt
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      // STRING is a VarChar of 255 characters default
      title: DataTypes.STRING,
      // For large posts we need more space
      body: DataTypes.TEXT,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    })
    .complete(done);
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    
    migration.dropTable('posts')
    .complete(done);
  }
}