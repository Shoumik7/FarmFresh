//See server readme for endpoint documentation
const request = require('supertest')
const express = require("express");
const cors = require('cors');
const fs = require('fs');
const authProxy = require('./db/db.js');
const apptest = express();
const PORT = process.env.PORT || 5001;
//Start express server and cloud sql proxy
apptest.use(cors());
apptest.use(express.json());
apptest.listen(PORT, () => {
  console.log(`Express server listening on Port: ${PORT}`)
})
authProxy.startAuthProxy();
//Endpoint route files
const usrapi = require('./user-api/routes.js');
const prdapi = require('./products-api/routes.js');
const farmapi = require('./vendors-api/routes.js');
const srchEndpoint = require('./search-endpoint/routes.js');
const curr_user_api = require('./curr-user-api/routes.js');
const trnapi = require('./transaction-api/routes.js');
const revapi = require('./reviews-api/routes.js')
const cloudinary_api = require('./cloudinary/config.js');

//Endpoint main routes
apptest.use('/api/transaction', trnapi);
apptest.use('/api/users', usrapi);
apptest.use('/api/products', prdapi);
apptest.use('/api/vendors', farmapi);
apptest.use('/search', srchEndpoint);
apptest.use('/curr-user-api', curr_user_api);
apptest.use('/api/reviews', revapi);
apptest.use('/api/cloudinary', cloudinary_api);


module.exports = apptest


