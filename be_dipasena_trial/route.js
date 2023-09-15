const router = require('express').Router();
const dipasena_http = require('./controler_http.js');

router.get('/dipasena/latest', dipasena_http.getDataDipasena);// route request to respond lastest 100 data
router.get('/dipasena/tabel', dipasena_http.getDataTabel);// route request to respond lastest 100 data
router.get('/dipasena/chart/suhu_per', dipasena_http.getDataChartSuhuPer);
router.get('/dipasena/chart/ph', dipasena_http.getDataChartPh);

module.exports = router;