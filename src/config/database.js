module.exports = {
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'devburger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
