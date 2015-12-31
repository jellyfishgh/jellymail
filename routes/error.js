var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('pages/error', {
        message: "error",
        error: {
            "status": 404,
            "stack": 'test'
        }
    });
});

module.exports = router;
