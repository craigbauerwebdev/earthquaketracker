var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET all earthquake data */
router.get('/', (req, res, next) => {
	const all = process.env.BASE_URL;
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
