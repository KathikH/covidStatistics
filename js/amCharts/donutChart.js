am4core.ready(function () {

    // Create chart instance
    var chart = am4core.create("donutChart", am4charts.PieChart);

// Add data
    chart.data = [{
        "name": "Alpha",
        "wert": 74
    }, {
        "name": "Beta",
        "wert": 1
    }, {
        "name": "Gamma",
        "wert": 1
    }, {
        "name": "Delta",
        "wert": 15
    }, {
        "name": "Rest",
        "wert": 9
    }];


// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "wert";
    pieSeries.dataFields.category = "name";
    // pieSeries.dataFields.hidden = "hidden";

// amCharts colors: blue: #6771dc, pink: #c767dc, lightblue: #6794dc, purple: #a367dc, babyblue: #67b7dc, darkpurple: #8067dc
    pieSeries.colors.list = [
        am4core.color("#BC454B"),
        am4core.color("#900c3f"),
        am4core.color("#ff9433"),
        am4core.color("#B90E0A"),
        am4core.color("#5E1916")
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
    chart.legend.position = "left";
    chart.legend.width = am4core.percent(60);
    chart.legend.scrollable = true;
});