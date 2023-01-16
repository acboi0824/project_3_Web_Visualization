// A function to determine the marker size based on the population
function markerSize(pets) {
  return Math.sqrt(pets) * 6000;
}

// An array that contains all the information needed to create city and state markers

var locations = [
  {
    coordinates: [40.7056258, -73.97968],
    dogs: {
      name: "NY",
      pets: 193    
    },
    cats: {
      name: "NY",
      pets: 219
    },
    rabbits: {
      name: "NY",
      pets: 6
    },
    birds: {
      name: "NY",
      pets: 2    
    },
    total_pets: {
      name: "NY",
      pets: 446
    }
  },
  {
    coordinates: [37.2718745, -119.2704153],
    dogs: {
      name: "CA",
      pets: 776    
    },
    cats: {
      name: "CA",
      pets: 274
    },
    rabbits: {
      name: "CA",
      pets: 30
    },
    birds: {
      name: "CA",
      pets: 13    
    },
    total_pets: {
      name: "CA",
      pets: 1120
    }
  },
  {
    coordinates: [40.1903624, -82.6692525],
    dogs: {
        name: "OH",
        pets: 190
    },
    cats: {
        name: "OH",
        pets: 109
    },
    rabbits: {
      name: "OH",
      pets: 5
    },
    birds: {
      name: "OH",
      pets: null    
    },
    total_pets: {
      name: "OH",
      pets: 304
    }
  },
  {
    coordinates: [42.0629398, -71.718067],
    dogs: {
        name: "MA",
        pets: 43
    },
    cats: {
        name: "MA",
        pets: 38
    },
    rabbits: {
      name: "MA",
      pets: 7
    },
    birds: {
      name: "MA",
      pets: 11    
    },
    total_pets: {
      name: "MA",
      pets: 107
    }
  },  
  {
    coordinates: [43.000325, -107.5545669],
    dogs: {
        name: "WY",
        pets: 13
    },
    cats: {
        name: "WY",
        pets: 14
    },
    rabbits: {
      name: "WY",
      pets: null
    },
    birds: {
      name: "WY",
      pets: null    
    },
    total_pets: {
      name: "WY",
      pets: 27
    }
  },
  {
    coordinates: [41.5187835, -72.757507],
    dogs: {
        name: "CT",
        pets: 69
    },
    cats: {
        name: "CT",
        pets: 31
    },
    rabbits: {
      name: "CT",
      pets: null
    },
    birds: {
      name: "CT",
      pets: null    
    },
    total_pets: {
      name: "CT",
      pets: 100
    }
  },
  {
    coordinates: [33.62505, -80.9470381],
    dogs: {
        name: "SC",
        pets: 101
    },
    cats: {
        name: "SC",
        pets: 111
    },
    rabbits: {
      name: "SC",
      pets: null
    },
    birds: {
      name: "SC",
      pets: null    
    },
    total_pets: {
      name: "SC",
      pets: 212
    }
  },
  {
    coordinates: [39.4997605, -111.547028],
    dogs: {
        name: "UT",
        pets: 39
    },
    cats: {
        name: "UT",
        pets: 52
    },
    rabbits: {
      name: "UT",
      pets: 1
    },
    birds: {
      name: "UT",
      pets: 1    
    },
    total_pets: {
      name: "UT",
      pets: 97
    }
  },
  {
    coordinates: [32.6781248, -83.2229757],
    dogs: {
        name: "GA",
        pets: 279
    },
    cats: {
        name: "GA",
        pets: 120
    },
    rabbits: {
      name: "GA",
      pets: 1
    },
    birds: {
      name: "GA",
      pets: null    
    },
    total_pets: {
      name: "GA",
      pets: 400
    }
  },
  {
    coordinates: [44.0012306, -71.5799231],
    dogs: {
        name: "NH",
        pets: 9
    },
    cats: {
        name: "NH",
        pets: 12
    },
    rabbits: {
      name: "NH",
      pets: 1
    },
    birds: {
      name: "NH",
      pets: null    
    },
    total_pets: {
      name: "NH",
      pets: 23
    }
  },
  {
    coordinates: [31.1693363, -100.0768425],
    dogs: {
        name: "TX",
        pets: 694
    },
    cats: {
        name: "TX",
        pets: 218
    },
    rabbits: {
      name: "TX",
      pets: 6
    },
    birds: {
      name: "TX",
      pets: null    
    },
    total_pets: {
      name: "TX",
      pets: 919
    }
  },
  {
    coordinates: [40.9945928, -77.6046984],
    dogs: {
        name: "PA",
        pets: 157
    },
    cats: {
        name: "PA",
        pets: 158
    },
    rabbits: {
      name: "PA",
      pets: 3
    },
    birds: {
      name: "PA",
      pets: null    
    },
    total_pets: {
      name: "PA",
      pets: 320
    }
  },
  {
    coordinates: [41.5008195, -99.680902],
    dogs: {
        name: "NE",
        pets: 20
    },
    cats: {
        name: "NE",
        pets: 15
    },
    rabbits: {
      name: "NE",
      pets: 2
    },
    birds: {
      name: "NE",
      pets: null    
    },
    total_pets: {
      name: "NE",
      pets: 40
    }
  },
  {
    coordinates: [32.5851062, -89.8772196],
    dogs: {
        name: "MS",
        pets: 28
    },
    cats: {
        name: "MS",
        pets: 23
    },
    rabbits: {
      name: "MS",
      pets: null
    },
    birds: {
      name: "MS",
      pets: null    
    },
    total_pets: {
      name: "MS",
      pets: 51
    }
  },
  {
    coordinates: [44.2126995, -100.2471641],
    dogs: {
        name: "SD",
        pets: 10
    },
    cats: {
        name: "SD",
        pets: 5
    },
    rabbits: {
      name: "SD",
      pets: null
    },
    birds: {
      name: "SD",
      pets: null    
    },
    total_pets: {
      name: "SD",
      pets: 16
    }
  },
  {
    coordinates: [38.9979339, -105.550567],
    dogs: {
        name: "CO",
        pets: 230
    },
    cats: {
        name: "CO",
        pets: 54
    },
    rabbits: {
      name: "CO",
      pets: 2
    },
    birds: {
      name: "CO",
      pets: null    
    },
    total_pets: {
      name: "CO",
      pets: 301
    }
  },
  {
    coordinates: [41.9383166, -93.389798],
    dogs: {
        name: "IA",
        pets: 75
    },
    cats: {
        name: "IA",
        pets: 77
    },
    rabbits: {
      name: "IA",
      pets: 2
    },
    birds: {
      name: "IA",
      pets: null    
    },
    total_pets: {
      name: "IA",
      pets: 162
    }
  },
  {
    coordinates: [44.7862968, -89.8267049],
    dogs: {
        name: "WI",
        pets: 75
    },
    cats: {
        name: "WI",
        pets: 77
    },
    rabbits: {
      name: "WI",
      pets: 2
    },
    birds: {
      name: "WI",
      pets: null
    },
    total_pets: {
      name: "WI",
      pets: 162
    }
  },
  {
    coordinates: [38.502032, -117.0230604],
    dogs: {
        name: "NV",
        pets: 52
    },
    cats: {
        name: "NV",
        pets: 26
    },
    rabbits: {
      name: "NV",
      pets: 1
    },
    birds: {
      name: "NV",
      pets: 1
    },
    total_pets: {
      name: "NV",
      pets: 83
    }
  },
  {
    coordinates: [38.0033855, -79.4587861],
    dogs: {
        name: "VA",
        pets: 185
    },
    cats: {
        name: "VA",
        pets: 150
    },
    rabbits: {
      name: "VA",
      pets: 5
    },
    birds: {
      name: "VA",
      pets: null
    },
    total_pets: {
      name: "VA",
      pets: 342
    }
  },
  {
    coordinates: [37.8222935, -85.7682399],
    dogs: {
        name: "KY",
        pets: 88
    },
    cats: {
        name: "KY",
        pets: 32
    },
    rabbits: {
      name: "KY",
      pets: 2
    },
    birds: {
      name: "KY",
      pets: null
    },
    total_pets: {
      name: "KY",
      pets: 122
    }
  },
  {
    coordinates: [35.3097654, -98.7165585],
    dogs: {
        name: "OK",
        pets: 95
    },
    cats: {
        name: "OK",
        pets: 24
    },
    rabbits: {
      name: "OK",
      pets: null
    },
    birds: {
      name: "OK",
      pets: null
    },
    total_pets: {
      name: "OK",
      pets: 119
    }
  },
  {
    coordinates: [39.7662195, -86.441277],
    dogs: {
        name: "IN",
        pets: 105
    },
    cats: {
        name: "IN",
        pets: 106
    },
    rabbits: {
      name: "IN",
      pets: 2
    },
    birds: {
      name: "IN",
      pets: null
    },
    total_pets: {
      name: "IN",
      pets: 222
    }
  },
  {
    coordinates: [38.9201705, -80.1816905],
    dogs: {
        name: "WV",
        pets: 33
    },
    cats: {
        name: "WV",
        pets: 21
    },
    rabbits: {
      name: "WV",
      pets: null
    },
    birds: {
      name: "WV",
      pets: null
    },
    total_pets: {
      name: "WV",
      pets: 54
    }
  },
  {
    coordinates: [30.9733766, -91.4299097],
    dogs: {
        name: "LA",
        pets: 70
    },
    cats: {
        name: "LA",
        pets: 17
    },
    rabbits: {
      name: "LA",
      pets: 2
    },
    birds: {
      name: "LA",
      pets: null
    },
    total_pets: {
      name: "LA",
      pets: 89
    }
  },
  {
    coordinates: [39.739318, -89.504139],
    dogs: {
        name: "IL",
        pets: 154
    },
    cats: {
        name: "IL",
        pets: 119
    },
    rabbits: {
      name: "IL",
      pets: 6
    },
    birds: {
      name: "IL",
      pets: 10
    },
    total_pets: {
      name: "IL",
      pets: 292
    }
  },
  {
    coordinates: [35.2145629, -79.8912675],
    dogs: {
        name: "NC",
        pets: 190
    },
    cats: {
        name: "NC",
        pets: 106
    },
    rabbits: {
      name: "NC",
      pets: 3
    },
    birds: {
      name: "NC",
      pets: null
    },
    total_pets: {
      name: "NC",
      pets: 299
    }
  },
  {
    coordinates: [38.4987789, -98.3200779],
    dogs: {
        name: "KS",
        pets: 89
    },
    cats: {
        name: "KS",
        pets: 36
    },
    rabbits: {
      name: "KS",
      pets: null
    },
    birds: {
      name: "KS",
      pets: null
    },
    total_pets: {
      name: "KS",
      pets: 126
    }
  },
  {
    coordinates: [43.8717545, -72.4477828],
    dogs: {
        name: "VT",
        pets: 14
    },
    cats: {
        name: "VT",
        pets: 10
    },
    rabbits: {
      name: "VT",
      pets: 3
    },
    birds: {
      name: "VT",
      pets: null
    },
    total_pets: {
      name: "VT",
      pets: 27
    }
  },
  {
    coordinates: [46.4418595, -93.3655146],
    dogs: {
        name: "MN",
        pets: 114
    },
    cats: {
        name: "MN",
        pets: 98
    },
    rabbits: {
      name: "MN",
      pets: 1
    },
    birds: {
      name: "MN",
      pets: null
    },
    total_pets: {
      name: "MN",
      pets: 220
    }
  },
  {
    coordinates: [38.8063524, -77.2684162],
    dogs: {
        name: "MD",
        pets: 102
    },
    cats: {
        name: "MD",
        pets: 60
    },
    rabbits: {
      name: "MD",
      pets: 3
    },
    birds: {
      name: "MD",
      pets: null
    },
    total_pets: {
      name: "MD",
      pets: 190
    }
  },
  {
    coordinates: [44.1419049, -120.5380993],
    dogs: {
        name: "OR",
        pets: 73
    },
    cats: {
        name: "OR",
        pets: 45
    },
    rabbits: {
      name: "OR",
      pets: 1
    },
    birds: {
      name: "OR",
      pets: null
    },
    total_pets: {
      name: "OR",
      pets: 124
    }
  },
  {
    coordinates: [45.4945756, -114.1424303],
    dogs: {
        name: "ID",
        pets: 31
    },
    cats: {
        name: "ID",
        pets: 23
    },
    rabbits: {
      name: "ID",
      pets: null
    },
    birds: {
      name: "ID",
      pets: null
    },
    total_pets: {
      name: "ID",
      pets: 54
    }
  },
  {
    coordinates: [41.5827282, -71.5064508],
    dogs: {
        name: "RI",
        pets: 46
    },
    cats: {
        name: "RI",
        pets: 8
    },
    rabbits: {
      name: "RI",
      pets: 3
    },
    birds: {
      name: "RI",
      pets: null
    },
    total_pets: {
      name: "RI",
      pets: 62
    }
  },
  {
    coordinates: [34.7519275, -92.1313784],
    dogs: {
        name: "AR",
        pets: 85
    },
    cats: {
        name: "AR",
        pets: 25
    },
    rabbits: {
      name: "AR",
      pets: 1
    },
    birds: {
      name: "AR",
      pets: null
    },
    total_pets: {
      name: "AR",
      pets: 111
    }
  },
  {
    coordinates: [34.1682185, -111.930907],
    dogs: {
        name: "AZ",
        pets: 207
    },
    cats: {
        name: "AZ",
        pets: 68
    },
    rabbits: {
      name: "AZ",
      pets: null
    },
    birds: {
      name: "AZ",
      pets: null
    },
    total_pets: {
      name: "AZ",
      pets: 277
    }
  },
  {
    coordinates: [44.9435598, -86.4158049],
    dogs: {
        name: "MI",
        pets: 115
    },
    cats: {
        name: "MI",
        pets: 175
    },
    rabbits: {
      name: "MI",
      pets: 4
    },
    birds: {
      name: "MI",
      pets: null
    },
    total_pets: {
      name: "MI",
      pets: 296
    }
  },
  {
    coordinates: [35.830521, -85.9785989],
    dogs: {
        name: "TN",
        pets: 187
    },
    cats: {
        name: "TN",
        pets: 107
    },
    rabbits: {
      name: "TN",
      pets: null
    },
    birds: {
      name: "TN",
      pets: null
    },
    total_pets: {
      name: "TN",
      pets: 294
    }
  },
  {
    coordinates: [61.3025006, -158.7750198],
    dogs: {
        name: "AK",
        pets: 12
    },
    cats: {
        name: "AK",
        pets: 7
    },
    rabbits: {
      name: "AK",
      pets: null
    },
    birds: {
      name: "AK",
      pets: null
    },
    total_pets: {
      name: "AK",
      pets: 19
    }
  },
  {
    coordinates: [38.3046615, -92.437099],
    dogs: {
        name: "MO",
        pets: 136
    },
    cats: {
        name: "MO",
        pets: 166
    },
    rabbits: {
      name: "MO",
      pets: 1
    },
    birds: {
      name: "MO",
      pets: null
    },
    total_pets: {
      name: "MO",
      pets: 307
    }
  },
  {
    coordinates: [47.915214, -120.104420],
    dogs: {
        name: "WA",
        pets: 83
    },
    cats: {
        name: "WA",
        pets: 54
    },
    rabbits: {
      name: "WA",
      pets: 2
    },
    birds: {
      name: "WA",
      pets: 1
    },
    total_pets: {
      name: "WA",
      pets: 141
    }
  },
  {
    coordinates: [27.9757279, -83.8330166],
    dogs: {
        name: "FL",
        pets: 387
    },
    cats: {
        name: "FL",
        pets: 242
    },
    rabbits: {
      name: "FL",
      pets: 7
    },
    birds: {
      name: "FL",
      pets: 1
    },
    total_pets: {
      name: "FL",
      pets: 643
    }
  },
  {
    coordinates: [39.145251, -75.4189206],
    dogs: {
        name: "DE",
        pets: 11
    },
    cats: {
        name: "DE",
        pets: 12
    },
    rabbits: {
      name: "DE",
      pets: null
    },
    birds: {
      name: "DE",
      pets: null
    },
    total_pets: {
      name: "DE",
      pets: 23
    }
  },
  {
    coordinates: [47.4678819, -100.3022655],
    dogs: {
        name: "ND",
        pets: 26
    },
    cats: {
        name: "ND",
        pets: 21
    },
    rabbits: {
      name: "ND",
      pets: null
    },
    birds: {
      name: "ND",
      pets: null
    },
    total_pets: {
      name: "ND",
      pets: 47
    }
  },
  {
    coordinates: [40.1430058, -74.7311156],
    dogs: {
        name: "NJ",
        pets: 153
    },
    cats: {
        name: "NJ",
        pets: 134
    },
    rabbits: {
      name: "NJ",
      pets: 4
    },
    birds: {
      name: "NJ",
      pets: 3
    },
    total_pets: {
      name: "NJ",
      pets: 303
    }
  },
  {
    coordinates: [34.1662325, -106.0260685],
    dogs: {
        name: "NM",
        pets: 50
    },
    cats: {
        name: "NM",
        pets: 26
    },
    rabbits: {
      name: "NM",
      pets: null
    },
    birds: {
      name: "NM",
      pets: null
    },
    total_pets: {
      name: "NM",
      pets: 76
    }
  },
  {
    coordinates: [20.46, -157.505],
    dogs: {
        name: "HI",
        pets: 11
    },
    cats: {
        name: "HI",
        pets: 35
    },
    rabbits: {
      name: "HI",
      pets: null
    },
    birds: {
      name: "HI",
      pets: null
    },
    total_pets: {
      name: "HI",
      pets: 46
    }
  },
  {
    coordinates: [46.6797995, -110.044783],
    dogs: {
        name: "MT",
        pets: 16
    },
    cats: {
        name: "MT",
        pets: 12
    },
    rabbits: {
      name: "MT",
      pets: null
    },
    birds: {
      name: "MT",
      pets: null
    },
    total_pets: {
      name: "MT",
      pets: 28
    }
  },
  {
    coordinates: [38.8993487, -77.0145666],
    dogs: {
        name: "DC",
        pets: 19
    },
    cats: {
        name: "DC",
        pets: 12
    },
    rabbits: {
      name: "DC",
      pets: null
    },
    birds: {
      name: "DC",
      pets: null
    },
    total_pets: {
      name: "DC",
      pets: 34
    }
  },
  {
    coordinates: [32.6010112, -86.6807365],
    dogs: {
        name: "AL",
        pets: 103
    },
    cats: {
        name: "AL",
        pets: 38
    },
    rabbits: {
      name: "AL",
      pets: 1
    },
    birds: {
      nALame: "AL",
      pets: null
    },
    total_pets: {
      name: "AL",
      pets: 142
    }
  },
  {
    coordinates: [45.2185133, -69.0148656],
    dogs: {
        name: "ME",
        pets: 11
    },
    cats: {
        name: "ME",
        pets: 8
    },
    rabbits: {
      name: "ME",
      pets: null
    },
    birds: {
      name: "ME",
      pets: null
    },
    total_pets: {
      name: "ME",
      pets: 19
    }
  }
];

// function myFunc(locations) {
//   return locations
// }


// Define arrays to hold the pet type markers.
var dogMarkers = [];
var catMarkers = [];
var rabbitMarkers = [];
var birdMarkers = [];
// var smallfurryMarkers = [];
var totalpetMarkers = [];

// Loop through locations, and create the city and state markers.
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing # of adoptable dogs into the markerSize function
  dogMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "orange",
      fillColor: "orange",
      radius: markerSize(locations[i].dogs.pets)
    })
  );

  // Set the marker radius for the state by passing # of adoptable cats into the markerSize() function.
  catMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "blue",
      fillColor: "blue",
      radius: markerSize(locations[i].cats.pets)
    })
  );

  // Set the marker radius for the state by passing  # of adoptable rabbits into the markerSize() function.
  rabbitMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(locations[i].rabbits.pets)
    })
  );

  // Set the marker radius for the state by passing # of birds into the markerSize() function.
  birdMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "pink",
      fillColor: "pink",
      radius: markerSize(locations[i].birds.pets)
    })
  );

  // // Set the marker radius for the city by passing # of small_and_furry pets into the markerSize() function.
  // smallfurryMarkers.push(
  //   L.circle(locations[i].coordinates, {
  //     stroke: false,
  //     fillOpacity: 0.75,
  //     color: "pink",
  //     fillColor: "pink",
  //     radius: markerSize(locations[i].types.small_and_furry)
  //   })
  // );

  // Set the marker radius for the state by passing # of total pets into the markerSize() function.
  totalpetMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "green",
      fillColor: "green",
      radius: markerSize(locations[i].total_pets.pets)
    })
  );



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
// var smallfurrylayer = L.layerGroup(smallfurryMarkers);
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
  "Adoptable Birds": birdlayer,
  // "Adoptable Small & Furry Pets": smallfurrylayer,
  "Total Adoptable Pets": totalpetslayer
};

// Define a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [street, doglayer, catlayer, rabbitlayer, birdlayer, totalpetslayer]
});

// smallfurrylayer

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
