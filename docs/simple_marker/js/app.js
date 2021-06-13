// intial map settings
var mymap = L.map('map',
	{
		zoomControl:false,//custom zoom control
    }).setView([41.82, 14.3], 9);

L.control.zoom({
    position:'topleft'// default is topleft
}).addTo(mymap);

L.control.scale().addTo(mymap); // add scale bar

var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		  maxZoom: 21,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		  id: 'mapbox/streets-v11',
		  tileSize: 512,
		  zoomOffset: -1}).addTo(mymap);

var marker = L.marker([41.82,14.3]).addTo(mymap)
