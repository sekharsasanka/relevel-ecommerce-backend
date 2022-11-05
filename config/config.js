require('dotenv').config();
module.exports = {
  "development": {
    "username": "usthwkrypmnmx1g2",
    "password": process.env.Db_Development_password,
    "database": "bhjinmhasq5vrz3ud5jj",
    "host": "bhjinmhasq5vrz3ud5jj-mysql.services.clever-cloud.com",
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
