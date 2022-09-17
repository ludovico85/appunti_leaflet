// intial map settings
var mymap = L.map('map',
	{
		zooms: [9, 10, 11 ,12, 13, 14, 15, 16],
		minZoom: 9,
		maxZoom: 16,
		zoomControl:false,//custom zoom control
    }).setView([41.72208, 14.47728], 11);

L.control.zoom({
    position:'topleft'// default is topleft
}).addTo(mymap);

L.control.scale().addTo(mymap); // add scale bar

var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		  maxZoom: 21,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		  id: 'mapbox/streets-v11',
		  tileSize: 512,
		  zoomOffset: -1}).addTo(mymap);

// define a style
var mystyle = {
	opacity: 1,
	color: '#FFFFFF',
	//dashArray: '2,2',
	lineJoin: 'round',
	lineCap: 'butt',
	fillColor: '#3171d8',
	weight: 2,
	fill: true,
	fillOpacity: 0.9
};

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
		fillColor:'#FF6978',
        color: ' #FFFFFF',
        dashArray: '',
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
};

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
};


// load geojson and apply the style
geojson = L.geoJson(comuni, {
	style: mystyle,
	onEachFeature: function (feature, layer) {
		layer.bindPopup('<table><tbody><tr><th scope="row"><td>'+feature.properties.comune+'</td></th></tr><tr><th scope="row"><td>'+feature.properties.link+'</td></th></tr></tbody><tr><th scope="row"></th></tr></tbody>'),
		layer.on({mouseover: highlightFeature, mouseout: resetHighlight})}
}).addTo(mymap);


