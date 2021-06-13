// intial map settings
var mymap = L.map('map',
	{
		zoomControl:false,//custom zoom control
    }).setView([41.65, 14.25], 06);

L.control.zoom({
    position:'topleft'// default is topleft
}).addTo(mymap);

L.control.scale().addTo(mymap); // add scale bar

var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		  maxZoom: 21,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		  id: 'mapbox/streets-v11',
		  tileSize: 512,
		  zoomOffset: -1}).addTo(mymap); // add scale bar


// create a function with if statement to creare categories
function categorical_legend(feature) {
	if (feature.properties['DEN_RIP'] === "Nord-ovest") {
		return {
			opacity: 1,
			color: '#8cb369',
			weight: 2.0,
			fill: true,
			fillOpacity: 0.7,
			fillColor: '#8cb369',
		}
	};
	if (feature.properties['DEN_RIP'] === "Nord-est") {
		return {
			opacity: 1,
			color: '#f4e285',
			weight: 2.0,
			fill: true,
			fillOpacity: 0.7,
			fillColor: '#f4e285',
		}
	};
	if (feature.properties['DEN_RIP'] === "Centro") {
		return {
			opacity: 1,
			color: '#f4a259',
			weight: 2.0,
			fill: true,
			fillOpacity: 0.7,
			fillColor: '#f4a259',
		}
	};
	if (feature.properties['DEN_RIP'] === "Sud") {
		return {
			opacity: 1,
			color: '#5b8e7d',
			weight: 2.0,
			fill: true,
			fillOpacity: 0.7,
			fillColor: '#5b8e7d',
		}
	};
	if (feature.properties['DEN_RIP'] === "Isole") {
		return {
			opacity: 1,
			color: '#bc4b51',
			weight: 2.0,
			fill: true,
			fillOpacity: 0.7,
			fillColor: '#bc4b51'
		}
	};
};

var legend = L.control({position: 'bottomright'});



// load geojson and apply the style
var regions = new L.geoJson(regions, {
	style: categorical_legend,
	onEachFeature: function (feature, layer) {
		layer.bindPopup('<table><tbody><tr><th scope="row"><td>Zona geografica: '+feature.properties.DEN_RIP+'</td></th></tr></tbody><tr><th scope="row"></th></tr></tbody>')}
}).addTo(mymap);
