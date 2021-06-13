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

var mystyle = {
	opacity: 1,
	color: '#ffffff',
	dashArray: '2,2',
	lineJoin: 'round',
	lineCap: 'butt',
	fillColor: '#FF5A5F',
	weight: 2,
	fill: true,
	fillOpacity: 0.7
};

var regions = new L.geoJson(regions, {
	style: mystyle,
	onEachFeature: function (feature, layer) {
		layer.bindPopup('<table><tbody><tr><th scope="row"><td>Nome: '+feature.properties.DEN_REG+'</td></th></tr></tbody><tr><th scope="row"></th></tr></tbody>')}
}).addTo(mymap);
