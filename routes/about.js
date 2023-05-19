var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(
        [
            {
                firstname: 'Valeria',
                lastname: 'Zagorchik',
                id: "323328872",
                email: "vaza.2468@gmail.com"
            },
            {
                firstname: 'Tzach',
                lastname: 'Fleischer',
                id: "305152969",
                email: "tzahflisher@gmail.com"
            }]);
});

module.exports = router;

