// Initialize the map
let myMap = L.map("map").setView([37.09, -95.71], 5);

// Define base maps
let streetMap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
});

let satelliteMap = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: "Map data © <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
});

// Add street map as the default layer
streetMap.addTo(myMap);

// Define layer groups
let earthquakeLayer = L.layerGroup();
let plateLayer = L.layerGroup();

// Fetch and plot earthquake data
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(earthquakeURL).then((data) => {
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: function (feature) {
            return {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: "#000",
                weight: 0.5,
                fillOpacity: 0.8,
            };
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`
                <h3>${feature.properties.place}</h3>
                <hr>
                <p>Magnitude: ${feature.properties.mag}</p>
                <p>Depth: ${feature.geometry.coordinates[2]} km</p>
            `);
        },
    }).addTo(earthquakeLayer);
    earthquakeLayer.addTo(myMap);
});

// Fetch and plot tectonic plate data
const platesURL = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

d3.json(platesURL).then((platesData) => {
    L.geoJson(platesData, {
        style: {
            color: "orange",
            weight: 2,
        },
    }).addTo(plateLayer);
    plateLayer.addTo(myMap);
});

// Add layer controls
let baseMaps = {
    "Street Map": streetMap,
    "Satellite Map": satelliteMap,
};

let overlayMaps = {
    "Earthquakes": earthquakeLayer,
    "Tectonic Plates": plateLayer,
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(myMap);

// Helper functions for marker styles
function getColor(depth) {
    return depth > 90 ? "#FF4500" :
           depth > 70 ? "#FF8C00" :
           depth > 50 ? "#FFD700" :
           depth > 30 ? "#ADFF2F" :
           depth > 10 ? "#7FFF00" :
                        "#32CD32";
}

function getRadius(magnitude) {
    return magnitude === 0 ? 1 : magnitude * 4;
}

// Add legend
let legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [-10, 10, 30, 50, 70, 90];
    let colors = ["#32CD32", "#7FFF00", "#ADFF2F", "#FFD700", "#FF8C00", "#FF4500"];

    for (let i = 0; i < depths.length; i++) {
        div.innerHTML += `
            <i style="background: ${colors[i]}"></i> 
            ${depths[i]}${depths[i + 1] ? "&ndash;" + depths[i + 1] : "+"}<br>
        `;
    }
    return div;
};

legend.addTo(myMap);
