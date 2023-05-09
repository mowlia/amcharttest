// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
const myTheme = am5.Theme.new(root);
myTheme.rule("Label").setAll({
    fill: am5.color(0x000055),
    fontSize: "1em",
    fontFamily: "Courier New",
  });
root.setThemes([am5themes_Animated.new(root),myTheme]);

// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "translateY",
    projection: am5map.geoEquirectangular(),
  })
);

// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
  })
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true,
  templateField: "settings",
});

var colors = am5.ColorSet.new(root, {});


/* Apply a pattern to Iran on Map Polygon Series */
polygonSeries.data.setAll([
  {
    id: "IR",
    settings: {
      fill: colors.next(),
      fillPattern: am5.LinePattern.new(root, {
        color: am5.color(0xffffff),
        rotation: 90,
        strokeWidth: 2,
      }),
    },
  },
]);



/* Add a few Country names */
var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
pointSeries.bullets.push(function() {
  return am5.Bullet.new(root, {
  })
})

pointSeries.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        templateField: "labelSettings",
        centerX: am5.p50,
      })
    })
  })
  
  pointSeries.data.setAll([{
    geometry: { type: "Point", coordinates: [-3.703790, 40.416775] },
    labelSettings: {
      text: "Spain",
      fontSize: 25,
     }
  },
  {
    geometry: { type: "Point", coordinates: [2.352222, 48.856614] },
    labelSettings: {
      text: "France"
    }
  },
  {
    geometry: { type: "Point", coordinates: [13.404954, 52.520007] },
    labelSettings: {
      text: "Germany"
    }
  },
  {
    geometry: { type: "Point", coordinates: [21.012229, 52.229676] },
    labelSettings: {
      text: "Warsaw"
    }
  },
  {
    geometry: { type: "Point", coordinates: [12.480180, 41.872389] },
    labelSettings: {
      text: "Italy"
    }
  },
  {
    geometry: { type: "Point", coordinates: [-0.127758, 51.507351] },
    labelSettings: {
      text: "UK"
    }
  },
  {
    geometry: { type: "Point", coordinates: [18.068581, 59.329323] },
    labelSettings: {
      text: "Sweden"
    }
  }
  ])