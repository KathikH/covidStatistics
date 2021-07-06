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
        {id: "DE-BW", value: 5.125944178197639, name:"Baden-Württemberg"},
        {id: "DE-BY", value: 5.447728209715745, name: "Bayern"},
        {id: "DE-BE", value: 5.341340256727705, name: "Berlin"},
        {id: "DE-BB", value: 2.4188179276440356, name: "Brandenburg"},
        {id: "DE-HB", value: 8.220762710620344, name: "Bremen"},
        {id: "DE-HH", value: 7.632955529101861, name: "Hamburg"},
        {id: "DE-HE", value: 7.665296879174565, name: "Hessen"},
        {id: "DE-MV", value: 1.305858079343937, name: "Mecklenburg-Vorpommern"},
        {id: "DE-NI", value: 3.665428677513333, name: "Niedersachsen"},
        {id: "DE-NW", value: 5.622040314765166, name: "Nordrhein-Westfalen"},
        {id: "DE-RP", value: 5.276138687213645, name: "Rheinland-Pfalz"},
        {id: "DE-SL", value: 6.079723413116192, name: "Saarland"},
        {id: "DE-SN", value: 1.6699529539871476, name: "Sachsen"},
        {id: "DE-ST", value: 1.0479400687630935, name: "Sachsen-Anhalt"},
        {id: "DE-SH", value: 3.5126712728577614, name: "Schleswig-Holstein"},
        {id: "DE-TH", value: 3.562425411717942, name: "Thüringen"}
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