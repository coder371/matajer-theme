var express = require('express');
var router = express.Router();
const { productController } = require('../../controllers');

/* GET home page. */
router.get('' , productController);

module.exports = router;