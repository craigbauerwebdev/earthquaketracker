require('dotenv').config();
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET earthquakes based on user input */
router.get('/:mag/:long/:lat/:max/:start/:end', (req, res, next) => { ///:long/:lat/:maxradius

	const filteredData = `${process.env.BASE_URL}&minmagnitude=${req.params.mag}&latitude=${req.params.lat}&longitude=${req.params.long}&maxradiuskm=${req.params.max}&starttime=${req.params.start}&endtime=${req.params.end}`; //&latitude=37&longitude=100&maxradiuskm=200

    fetch(filteredData)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
