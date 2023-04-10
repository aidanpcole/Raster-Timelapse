/* global initializeMap, initializeDataTable */
/* 1. === Setting up Map === */
/* set up with zoom 5, may change, changed lat
and long from 34,0836417742618, -118.5298649280784 */
let map = L.map('map', { zoomControl: false }).setView([21.196640407274728, 72.40726019546284], 5);

var basemaps = {
    'Topo Map': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    }),

    'Geo World Map': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    }),

};

L.control.layers(basemaps).addTo(map);

basemaps["Topo Map"].addTo(map);

L.control.zoom({
  position: 'topright'
}).addTo(map);

sidebarContentController("story-slide");

L.Control.geocoder().addTo(map);

var bounds = new L.LatLngBounds(
    new L.LatLng(0.1221305, 54.1038326),
    new L.LatLng(43.7838013, 109.0015138));
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
var urlPrefix = "https://raw.githubusercontent.com/aidanpcole/Raster-Timelapse/main/data/ReferenceData/"


var url = urlPrefix+timeValues[0]+".png"

var imageOverlay = new L.ImageOverlay(url, bounds, {
    opacity: 0.7,
    interactive: false
}).addTo(map);


//function when sliding
slider.oninput = function() {
  //changing the label
  document.getElementById("sliderLabel").innerHTML = timeValues[this.value-1]
  //setting the url of the overlay
  imageOverlay.setUrl(urlPrefix+timeValues[this.value-1]+".png")
}

var playTimeOut;

function play() {
    playTimeOut = setTimeout(function () {
        //increasing the slider by 1 (if not already at the end)
        var val = document.getElementById("slider").value
        console.log(val)
        //if end of slider, stopping
        if(val == document.getElementById("slider").max){
            clearTimeout(playTimeOut);
              //hidding the stop button
              document.getElementById('stop').style.display = "none";
              //showing the play button
              document.getElementById('play').style.display = "block";
        }
        else{
        document.getElementById("slider").value = Number(val)+1
        play()
        }
        //changing the label
        document.getElementById("sliderLabel").innerHTML = timeValues[Number(val)-1]
        //setting the url of the overlay
        imageOverlay.setUrl(urlPrefix+timeValues[Number(val)-1]+".png")

    }, 1000);
}

document.getElementById('play').onclick = function(e){
  play()
  //showing the stop button
  document.getElementById('stop').style.display = "block";
  //hidding the play button
  document.getElementById('play').style.display = "none";
}

document.getElementById('stop').onclick = function(e){
  clearTimeout(playTimeOut);
  //hidding the stop button
  document.getElementById('stop').style.display = "none";
  //showing the play button
  document.getElementById('play').style.display = "block";
}

//hidding the stop button by default
document.getElementById('stop').style.display = "none";



let layerGroup = L.layerGroup().addTo(map);

initializeMap();

let dataT = [];
