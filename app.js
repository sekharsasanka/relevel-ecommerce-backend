const express = require('express');
const app = express();
require("dotenv").config();
const {sequelize} = require('./models/index');
const categoryRoutes = require('./routes/category.route');
const productRoutes = require('./routes/product.route');
const authRoutes = require('./routes/auth.route');
const roleRoutes = require('./routes/role.route');
const orderRoutes = require('./routes/order.route');
const serverPort = 8080;
const cors = require("cors");
app.use(cors());

/* app.use() is using the provided middleware for every incoming request to the server*/
/* We need to a body parser middleware, that will help express to read all the query and body params */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

categoryRoutes(app);
productRoutes(app);
authRoutes(app);
roleRoutes(app);
orderRoutes(app);

app.listen( serverPort, async () => {
    await sequelize.sync();
    console.log(`App listening on ${serverPort}`)
})



