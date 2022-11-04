require('dotenv').config();
module.exports = {
  "development": {
    "username": "uoqqqoyas8dp3tzl",
    "password": process.env.Db_Development_password,
    "database": "brvgjvpoi1bhsh91ukn2",
    "host": "brvgjvpoi1bhsh91ukn2-mysql.services.clever-cloud.com",
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
