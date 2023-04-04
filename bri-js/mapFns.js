/* global layerGroup, map, PMTFVlegend,
getTableData, getLegend, sidebarContentController, intialTableData,
dataT, showmeHistogram, addHistInput, checkies, showdown */
let dlist;
/* === MY DATA ON GITHUB === */
const mapvars = {
  TWTEN: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2010pm25.geojson",
  TWELE: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2011pm25.geojson",
  TWTWE: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2012pm25.geojson",
  TWTHI: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2013pm25.geojson",
  TWFOU: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2014pm25.geojson",
  TWFIF: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2015pm25.geojson",
  TWSIX: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2016pm25.geojson",
  TWSEV: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2017pm25.geojson",
  TWEIG: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2018pm25.geojson",
  TWNIN: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simpletimes2019pm25.geojson",
  PMTFV: "https://raw.githubusercontent.com/aidanpcole/India-Timelapse/main/data/DataForMap/simplertimesdistricts20102019pm25.geojson"
};

//const pointLayers = ["coolingCenters", "emergencyP", "pools", "parks", "hosp"]; // i think this needs to be a dictionary
const polygonLayers = ["TWTEN", "TWELE", "TWTWE", "TWTHI", "TWFOU", "TWFIF", "TWSIX", "TWSEV", "TWEIG", "TWNIN"]; // with string name and var



let tableData;

// =================== Functions ==========///



// === Map color Function === //
function getColor(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWTEN(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWELE(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWTWE(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWTHI(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWFOU(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWFIF(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWSIX(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWSEV(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWEIG(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}

function getColorTWNIN(d) {
  return d > 4 ? '#b30000'
    : d > 3  ? '#e34a33'
      : d > 2   ? '#fc8d59'
        : d > 1   ? '#fdcc8a'
          : d > 0   ? '#fef0d9'
            : '#fff9db';
}



// === Style  === //
function style(feature) {
  return {
    fillColor: getColor(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWTEN(feature) {
  return {
    fillColor: getColorTWTEN(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWELE(feature) {
  return {
    fillColor: getColorTWELE(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWTWE(feature) {
  return {
    fillColor: getColorTWTWE(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWTHI(feature) {
  return {
    fillColor: getColorTWTHI(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWFOU(feature) {
  return {
    fillColor: getColorTWFOU(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWFIF(feature) {
  return {
    fillColor: getColorTWFIF(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWSIX(feature) {
  return {
    fillColor: getColorTWSIX(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWSEV(feature) {
  return {
    fillColor: getColorTWSEV(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWEIG(feature) {
  return {
    fillColor: getColorTWEIG(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}

function styleTWNIN(feature) {
  return {
    fillColor: getColorTWNIN(feature.properties["PM 2.5 Concentration Quantile"]),
    weight: 0.5,
    opacity: 0.7,
    color: "gray",
    fillOpacity: 0.5,
    colorOpacity: 0.1,
  };
}


// === realted styles for mapping ==//

const stylevars = {
  PMTFV: style,
  TWTEN: styleTWTEN,
  TWELE: styleTWELE,
  TWTWE: styleTWTWE,
  TWTHI: styleTWTHI,
  TWFOU: styleTWFOU,
  TWFIF: styleTWFIF,
  TWSIX: styleTWSIX,
  TWSEV: styleTWSEV,
  TWEIG: styleTWEIG,
  TWNIN: styleTWNIN
};

//var timeSeriesLayer = L.geoJSON(mapvars.PMTFV, {style: style});

//var geojson = L.timeDimension.layer.geoJson(timeSeriesLayer);

//geojson.addTo(map);

// === Updating the Map === //






function updateMap(url, styleType) {
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      dlist = data;
      timeSeriesLayer = L.geoJSON(data, {style: styleType});
      geojson = L.timeDimension.layer.geoJson(timeSeriesLayer, {duration: "P6M", waitForReady: true, updateTimeDimension: true, updateTimeDimensionMode: "replace"});
      geojson.addTo(map);
    });
}

// === markers ===//
//const parksIcon = new L.Icon({
//  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
//  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//  iconSize: [25, 41],
//  iconAnchor: [12, 41],
//  popupAnchor: [1, -34],
//  shadowSize: [41, 41]
//});

//const poolsIcon = new L.Icon({
//  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
//  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//  iconSize: [25, 41],
//  iconAnchor: [12, 41],
//  popupAnchor: [1, -34],
//  shadowSize: [41, 41]
//});

//const emergencyPIcon = new L.Icon({
//  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
//  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//  iconSize: [25, 41],
//  iconAnchor: [12, 41],
//  popupAnchor: [1, -34],
//  shadowSize: [41, 41]
//});

//const coolingCentersIcon = new L.Icon({
//  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
//  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//  iconSize: [25, 41],
//  iconAnchor: [12, 41],
//  popupAnchor: [1, -34],
//  shadowSize: [41, 41]
//});


//const hospIcon = new L.Icon({
//  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
//  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//  iconSize: [25, 41],
//  iconAnchor: [12, 41],
//  popupAnchor: [1, -34],
//  shadowSize: [41, 41]
//});


//function getMarker(pointName) {
//  let icon2use;
//  if (pointName === "coolingCenters") {
//    icon2use = coolingCentersIcon;
//  }
//  if (pointName === "emergencyP") {
//    icon2use = emergencyPIcon;
//  }
//  if (pointName === "pools") {
//    icon2use = poolsIcon;
//  }
//  if (pointName === "parks") {
//    icon2use = parksIcon;
//  }
//  if (pointName === "hosp") {
//    icon2use = hospIcon;
//  }
//  return icon2use;
//}
//= ========== point data bindings =============//



//function updateMappointPCH(url, name, callback) { // THIS IS for pools, cooling centers and hosp
//  layerGroup.clearLayers();
//  let iconuse;
//  let markersClust = new L.MarkerClusterGroup();
//  iconuse = getMarker(name);
//  fetch(url)
//    .then(resp => resp.json())
//    .then(data => {
//      L.geoJSON(data, {
//        onEachFeature(feature) {
//          let popupContent = `<h4> ${feature.properties.Name} </h4>
//        <p>Address: ${feature.properties.addrln1}  &nbsp ${feature.properties.zip} <br>
//        Hours: ${feature.properties.hours} <br>
//        Phone Number: ${feature.properties.phones} <br>
//        Website: <a href="${feature.properties.url}">${feature.properties.url} </a> </p>`;
//          let marker = L.marker(
//            [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
//            { icon: iconuse }
//          ).bindPopup(popupContent);
//          markersClust.addLayer(marker);
//        }
//      });
//      markersClust.addTo(layerGroup);
//    });
//  if (callback) {
//    callback();
//  }
//}

//function updateMappointEmergency(url, name, callback) {
  // THIS IS for pools, cooling centers and hosp
//  layerGroup.clearLayers();
//  let iconuse;
//  let markersClust = new L.MarkerClusterGroup();
//  iconuse = getMarker(name);
//  fetch(url)
//    .then(resp => resp.json())
//    .then(data => {
//      L.geoJSON(data, {
//        onEachFeature(feature) { // THIS IS only for emergencyP
//          let popupContent = `<h4>${feature.properties.Name} </h4>
//        <p>Address: ${feature.properties.addrln1}  &nbsp ${feature.properties.zip} <br>
//        Phone Number: ${feature.properties.phones} <br>
//        Website: <a href="${feature.properties.url}">${feature.properties.url} </a></p>`;
//          let marker = L.marker(
//            [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
//            { icon: iconuse }
//          ).bindPopup(popupContent);
//          markersClust.addLayer(marker);
//        }
//      });
//      markersClust.addTo(layerGroup);
//    });
//  if (callback) {
//    callback();
//  }
//}



//function updateMappointParks(url, name, callback) { // THIS IS only for parks
//  layerGroup.clearLayers();
//  let iconuse;
//  let markersClust = new L.MarkerClusterGroup();
//  iconuse = getMarker(name);
//  fetch(url)
//    .then(resp => resp.json())
//    .then(data => {
//      L.geoJSON(data, {
//        onEachFeature(feature) {    // THIS IS only for emergencyP
//          let popupContent = `<h4> ${feature.properties.Name} </h4>
//        <p>Address: ${feature.properties.ADDRESS} &nbsp ${feature.properties.CITY} &nbsp ${feature.properties.ZIP} <br>
//        Phone Number: ${feature.properties.PHONES} <br>
//        Website: <a href="${feature.properties.AGNCY_WEB}">${feature.properties.AGNCY_WEB} </a></p>`;
//          let marker = L.marker(
//            [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
//            { icon: iconuse }
//          ).bindPopup(popupContent);
//          markersClust.addLayer(marker);
//        }
//      });
//      markersClust.addTo(layerGroup);
//    });
//  if (callback) {
//    callback();
//  }
//}


// getridof fn below
/*
function updateMappoint(url, name) {
  layerGroup.clearLayers();
  let iconuse
  var markersClust = new L.MarkerClusterGroup();
  iconuse = getMarker(name);
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function(feature) {
      var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
        {icon: iconuse}).bindPopup(`<h2> Resource: ${feature.properties.Name} </h2>`);
      markersClust.addLayer(marker);}
    });
    markersClust.addTo(layerGroup);

    });
}; */

function emptyCallback() {
  console.log("this is a callback");
}



function initializeMap(name) {
  console.log("INITIALIZEMAP FN");
  updateMap(mapvars.PMTFV, stylevars.PMTFV);
  getLegend("PMTFV");
  sidebarContentController("story-slide");
}
// === intialize map === //
/*
function initializeMap(callback) {
  fetch(mapvars.HVI)
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data, {style: styleHVI,
      onEachFeature: onEachFeatureHVI
    }).addTo(layerGroup);
  if (callback){
    callback();
  };
});
getLegend("HVI");
sidebarContentController("story-slide");
}; */

// these might be useful IDK

function check(box) {
  let b = box;
  b.checked = true;
}

function uncheck(box) {
  let b = box;
  b.checked = false;
}

function disable(box) {
  let b = box;
  b.enabled = false;
}
// === Determine & Update Map From Check boxes == //
//function determineMap() {
//  layerGroup.clearLayers();
//  console.log("IN DETERMINE MAP");
//  let names = [];
//  checkies.forEach(c => {
//    if (c.checked === true) {
//      let n = c.id;
//      names.push(n);
//    }
//  });
//  console.log(names);
//  names.forEach(name => {
//    if (pointLayers.includes(name)) {
//      if (name === "parks") {
//        updateMappointParks(mapvars[name], name, emptyCallback);
//      }
//      if (name === "emergencyP") {
//        updateMappointEmergency(mapvars[name], name, emptyCallback);
//      }
//      updateMappointPCH(mapvars[name], name, emptyCallback);
//    }
//    if (polygonLayers.includes(name)) {
//      updateMap(mapvars[name], stylevars[name]);
//      getLegend(name);
//    }
//  });
//}

//checkies 3 and onward not incorporated in original









// const pointLayers = [coolingCenters, emergencyP, pools, parks]
// const polygonLayers = [HVI, PVI, SVI]



// tableData.features.forEach(ele => dataT.push(ele.properties))




// const urlList = [coolingCenters, emergencyP, pools]

// urlList.forEach(element => updateMap(element))
