var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET all earthquake data */
router.get('/', (req, res, next) => {
	const
		all = process.env.BASE_URL,
		filtered = `${process.env.BASE_URL}&starttime=2000-01-01&endtime=2020-01-02&minmagnitude=5&minmagnitude=1&latitude=37&longitude=100&maxradiuskm=200`;

	fetch(all)
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
