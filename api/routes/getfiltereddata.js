require('dotenv').config();
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET earthquakes based on user input */
router.get('/:mag/:long/:lat/:max', (req, res, next) => { ///:long/:lat/:maxradius
	console.log(req.params.mag, req.params.long, req.params.lat, req.params);
/*
	### Possible User Set Parameters
	https://earthquake.usgs.gov/fdsnws/event/1/query?
		format=geojson&
		starttime=2000-01-01&
		endtime=2020-01-02&
		minmagnitude=5&
		minmagnitude=1& // check to see for max???
		latitude=37&
		longitude=100&
		maxradiuskm=200
	*/

	const filtered = `${process.env.BASE_URL}&minmagnitude=${req.params.mag}&latitude=${req.params.lat}&longitude=${req.params.long}&maxradiuskm=${req.params.max}`; //&latitude=37&longitude=100&maxradiuskm=200

    fetch(filtered)
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
