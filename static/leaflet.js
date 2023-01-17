// A function to determine the marker size based on the population
function markerSize(dogs) {
  if (dogs== null){return 0} 
  return Math.sqrt(dogs) * 6000;
}

function markerSize(cats) {
  if (cats== null){return 0} 
  return Math.sqrt(cats) * 6000;
}

function markerSize(rabbits) {
  if (rabbits== null){return 0} 
  return Math.sqrt(rabbits) * 6000;
}

function markerSize(birds) {
  if (birds== null){return 0} 
  return Math.sqrt(birds) * 6000;
}

function markerSize(small_and_furry) {
  if (small_and_furry== null){return 0} 
  return Math.sqrt(small_and_furry) * 6000;
}

function markerSize(total_pets) {
  if (total_pets== null){return 0}
  return Math.sqrt(total_pets) * 6000;
}

function test(adoptable_by_state) {

  console.log(adoptable_by_state)

// An array that contains all the information needed to create city and state markers

  d3.json(adoptable_by_state)  

  // Define arrays to hold the pet type markers.
  var dogMarkers = [];
  var catMarkers = [];
  var rabbitMarkers = [];
  var birdMarkers = [];
  var smallfurryMarkers = [];
  var totalpetMarkers = [];

  // Loop through locations, and create the city and state markers.
  for (var i = 0; i < adoptable_by_state.length; i++) {
    // Setting the marker radius for the state by passing # of adoptable dogs into the markerSize function
    if (adoptable_by_state[i].coordinates!= null){
    dogMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(adoptable_by_state[i].types.dogs)
      })
    );

    // Set the marker radius for the state by passing # of adoptable cats into the markerSize() function.
    catMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "blue",
        fillColor: "blue",
        radius: markerSize(adoptable_by_state[i].types.cats)
      })
    );

    // Set the marker radius for the state by passing  # of adoptable rabbits into the markerSize() function.
    rabbitMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(adoptable_by_state[i].types.rabbits)
      })
    );

    // Set the marker radius for the state by passing # of birds into the markerSize() function.
    birdMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "green",
        fillColor: "green",
        radius: markerSize(adoptable_by_state[i].types.birds)
      })
    );

    // Set the marker radius for the city by passing # of small_and_furry pets into the markerSize() function.
    smallfurryMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "pink",
        fillColor: "pink",
        radius: markerSize(adoptable_by_state[i].types.small_and_furry)
      })
    );

    // Set the marker radius for the state by passing # of total pets into the markerSize() function.
    totalpetMarkers.push(
      L.circle(JSON.parse(adoptable_by_state[i].coordinates.replace(/'/g, '"')), {
        stroke: false,
        fillOpacity: 0.75,
        color: "yellow",
        fillColor: "yellow",
        radius: markerSize(adoptable_by_state[i].types.total_pets)
      })
    );


    }
  }

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create separate layer groups for each of the pet type markers.
  var doglayer = L.layerGroup(dogMarkers);
  var catlayer = L.layerGroup(catMarkers);
  var rabbitlayer = L.layerGroup(rabbitMarkers);
  var birdlayer = L.layerGroup(birdMarkers);
  var smallfurrylayer = L.layerGroup(smallfurryMarkers);
  var totalpetslayer = L.layerGroup(totalpetMarkers);

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object.
  var overlayMaps = {
    "Adoptable Dogs": doglayer,
    "Adoptable Cats": catlayer,
    "Adoptable Rabbits": rabbitlayer,
    "Adoptable Bird": birdlayer,
    "Adoptable Small & Furry Pets": smallfurrylayer,
    "Total Adoptable Pets": totalpetslayer
  };

  // Define a map object.
  var myMap = L.map("myMap", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [street, doglayer, catlayer, rabbitlayer, birdlayer, smallfurrylayer, totalpetslayer]
  });

  // Pass our map layers to our layer control.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
// var map =L.map('myMap').setView([51,0],13)

  
}




