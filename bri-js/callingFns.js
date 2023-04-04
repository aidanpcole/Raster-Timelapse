/* global initializeMap, initializeDataTable */
/* 1. === Setting up Map === */
/* set up with zoom 5, may change, changed lat
and long from 34,0836417742618, -118.5298649280784 */
let map = L.map('map', { zoomControl: false }).setView([21.196640407274728, 72.40726019546284], 5, {crs: L.CRS.EPSG4326});

var basemaps = {
    'Topo Map': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        crs: L.CRS.EPSG4326
    }),

    'Geo World Map': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        crs: L.CRS.EPSG4326
    }),

};

L.control.layers(basemaps).addTo(map);

basemaps["Topo Map"].addTo(map);

L.control.zoom({
  position: 'topright'
}).addTo(map);

var bounds = new L.LatLngBounds(
    new L.LatLng(40, 59),
    new L.LatLng(4, 98));
map.fitBounds(bounds);

var months = ['PM25']
var years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

//storing all possible times
var timeValues = []
for(var i in years){
    for(var y in months){
        timeValues.push(months[y]+"_"+years[i])
    }
}

//setting max value of the slider
document.getElementById("slider").max = ""+timeValues.length+"";

//setting default label of the slider
document.getElementById("sliderLabel").innerHTML = timeValues[0]

//change the prefix of the url if your images are not in the same folder as your script
var urlPrefix = "https://raw.githubusercontent.com/aidanpcole/Raster-Timelapse/main/data/DataForMap/"





/* === initial Filling in Map with our motiviation statement in our data table info == */
// might also want to change the name from data table to smething else during this intial step

initializeMap();
// initializeDataTable(); //<-- this will also be called when zoom level is 9
console.log("MAP INITIALIZED CALLING FNS");

/* === Fillling Map and Data Table === */
// clear map
// take list of filters checked ON and fill map with them
// depending on list of filter, fill the table with relevant info


let dataT = [];


//updateMap(TWTEN,styleTWTEN,onEachFeatureTWTEN,getTableData);
