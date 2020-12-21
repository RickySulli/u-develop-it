const express = require('express');
const router = express.Router();

router.use(require('./candadateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));


module.exports = router;