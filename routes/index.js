var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

router.get('/',ctrlMain.index);
router.get('/hola',ctrlMain.hola);
router.get('/adios',ctrlMain.adios);
router.get('/nose',ctrlMain.cualquiera);



module.exports = router;
