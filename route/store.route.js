const express = require('express');
const router = express.Router();
const storeCtrl = require('../controller/store.controller');

router.get('/stores', storeCtrl.getStoreList);
router.post('/stores/save', storeCtrl.saveStore);
router.post('/stores/saveBulk', storeCtrl.saveBulkStore);

module.exports = router;