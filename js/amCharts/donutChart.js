am4core.ready(function () {

    // Create chart instance
    var chart = am4core.create("donutChart", am4charts.PieChart);

// Add data
    chart.data = [{
        "bezeichnung": "Gleichaltrige Kontaktperson",
        "haeufigkeit": 58.7
    }, {
        "bezeichnung": "Ältere Kontaktperson",
        "haeufigkeit": 26.3
    }, {
        "bezeichnung": "Jüngere Kontaktperson",
        "haeufigkeit": 14.6
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "haeufigkeit";
    pieSeries.dataFields.category = "bezeichnung";
    // pieSeries.dataFields.hidden = "hidden";

// amCharts colors: blue: #6771dc, pink: #c767dc, lightblue: #6794dc, purple: #a367dc, babyblue: #67b7dc, darkpurple: #8067dc
    pieSeries.colors.list = [
        am4core.color("#581845"),
        am4core.color("#900c3f"),
        am4core.color("#ff5733")
        // am4core.color("#6794dc"), //purple
        // am4core.color("#D65DB1"), //dark pink
        // am4core.color("#FF6F91"), //pink
        // am4core.color("#FF9671"), //orange
        // am4core.color("#FFC75F"), //yellow
        // am4core.color("#F9F871"), //neon yellow
    ];
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = ""; //"{bezeichnung}";

    chart.innerRadius = am4core.percent(40);
// Let's cut a hole in our Pie chart the size of 40% the radius

// Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

// Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.width = am4core.percent(100);

});