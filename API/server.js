const { name } = require('ci-info');
const express = require('express')
const app = express();
const countriesData = require('./countries.json')
var cors = require('cors')
app.use(cors());


app.get('/all', (req, res) => {
	res.json({
		status : "success",
		data: countriesData,
	});
});

app.get("/:countryName", (req, res) => {
	const countryName = req.params.countryName.toLowerCase();

	
	const countryData = countriesData.filter(
		(country) => country.name.toLowerCase() === countryName
	);

	res.json({
		status: "success",
		data: countryData,
	});
});

app.get("/capital/:capitalName", (req, res) => {
    const capitalName = req.params.capitalName.toLowerCase();
    const countryData = countriesData.filter(
        (country) => country.capital.toLowerCase() === capitalName
    );
	
    res.json({
		status: "success",
        data: countryData,
    });
});

app.get("/region/:regionName", (req, res) => {
    const regionName = req.params.regionName.toLowerCase();
    const countryData = countries.filter(
        (country) => country.region.toLowerCase() === regionName
    );
    res.json({
        data: countryData,
    });
});








const PORT = 9000;
app.listen(PORT, () => {
	console.log("server is ready on port " + PORT);
})
