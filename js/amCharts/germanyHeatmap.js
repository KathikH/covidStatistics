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
        min: am4core.color("#fa9584"), //#DE9E9B
        max: am4core.color("#c70039") //#FF1818
    });

// Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    polygonSeries.data = [
        {id: "DE-BW", value: 5.107926799715397, name:"Baden-Württemberg"},
        {id: "DE-BY", value: 5.836307424674491, name: "Bayern"},
        {id: "DE-BE", value: 6.213395808846513, name: "Berlin"},
        {id: "DE-BB", value: 2.815345456766009, name: "Brandenburg"},
        {id: "DE-HB", value: 7.3399667059110225, name: "Bremen"},
        {id: "DE-HH", value: 8.066031020114732, name: "Hamburg"},
        {id: "DE-HE", value: 8.317324207071156, name: "Hessen"},
        {id: "DE-MV", value: 0.9949394890239519, name: "Mecklenburg-Vorpommern"},
        {id: "DE-NI", value: 4.566148352533674, name: "Niedersachsen"},
        {id: "DE-NW", value: 5.677759247518042, name: "Nordrhein-Westfalen"},
        {id: "DE-RP", value: 6.3264811110571015, name: "Rheinland-Pfalz"},
        {id: "DE-SL", value: 7.295668095739431, name: "Saarland"},
        {id: "DE-SN", value: 1.8173017440448371, name: "Sachsen"},
        {id: "DE-ST", value: 1.275753127189853, name: "Sachsen-Anhalt"},
        {id: "DE-SH", value: 3.857050809412444, name: "Schleswig-Holstein"},
        {id: "DE-TH", value: 2.718693077363693, name: "Thüringen"}
    ];

// Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(18);
    heatLegend.marginRight = am4core.percent(2);
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
    polygonTemplate.tooltipText = "{name}: {value.formatNumber('#.00')}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
//     var hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = am4core.color("#66c041");
});