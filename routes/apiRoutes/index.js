const express = require('express');
const router = express.Router();

router.use(require('./candadateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;