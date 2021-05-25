am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    // Create map instance
    var chart = am4core.create("germanyHeatmap", am4maps.MapChart);

// Set map definition
    chart.geodata = am4geodata_germanyLow;

// Set projection
    chart.projection = new am4maps.projections.Miller();

// Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        // max: chart.colors.getIndex(5).brighten(-0.3)
        min: am4core.color("#E9DCBE"), //#DE9E9B
        max: am4core.color("#FF9671") //#FF1818
    });

// Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    polygonSeries.data = [{id: "DE-BW", value: 80, name:"Baden-Württemberg"},
        {id: "DE-BY", value: 63, name: "Bayern"},
        {id: "DE-BE", value: 55, name: "Berlin"},
        {id: "DE-BB", value: 48, name: "Brandenburg"},
        {id: "DE-HB", value: 56, name: "Bremen"},
        {id: "DE-HH", value: 35, name: "Hamburg"},
        {id: "DE-HE", value: 75, name: "Hessen"},
        {id: "DE-MV", value: 41, name: "Mecklenburg-Vorpommern"},
        {id: "DE-NI", value: 46, name: "Niedersachsen"},
        {id: "DE-NW", value: 69, name: "Nordrhein-Westfalen"},
        {id: "DE-RP", value: 56, name: "Rheinland-Pfalz"},
        {id: "DE-SL", value: 81, name: "Saarland"},
        {id: "DE-SN", value: 82, name: "Sachsen"},
        {id: "DE-ST", value: 54, name: "Sachsen-Anhalt"},
        {id: "DE-SH", value: 32, name: "Schleswig-Holstein"},
        {id: "DE-TH", value: 101, name: "Thüringen"}
    ];

// Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 200;

// Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "0";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "200";

// Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
        return "";
    });

// Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
//     var hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = am4core.color("#66c041");

});