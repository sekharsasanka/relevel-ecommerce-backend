require('dotenv').config();
module.exports = {
  "development": {
    "username": "uy5ap2uwweei1l1l",
    "password": process.env.Db_Development_password,
    "database": "byjqx8ngrefqtukosjfo",
    "host": "byjqx8ngrefqtukosjfo-mysql.services.clever-cloud.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
