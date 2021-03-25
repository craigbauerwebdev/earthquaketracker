require('dotenv').config();
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET earthquakes based on user input */
router.get('/:mag', (req, res, next) => {
//  /:starttime/:endtime
	/* 
	
	console.log(req.params.starttime);
	console.log(req.params.song);
	console.log(req.params.band);

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

	const filtered = `${process.env.BASE_URL}&starttime=2000-01-01&endtime=2020-01-02&minmagnitude=5&minmagnitude=${req.params.mag}&latitude=37&longitude=100&maxradiuskm=200`;


    fetch(filtered)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//console.log(data.slice(0,3));
			//const sliced = data.slice(0,3);
			res.send(data);
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
