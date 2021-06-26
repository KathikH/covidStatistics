am4core.ready(function () {

    // Create chart instance
    var chart = am4core.create("donutChartEUFond", am4charts.PieChart);

// Add data
    chart.data = [{
        "bezeichnung": "Italien",
        "haeufigkeit": 81.8
    }, {
        "bezeichnung": "Spanien",
        "haeufigkeit": 77.3
    }, {
        "bezeichnung": "Frankreich",
        "haeufigkeit": 38.8
    }, {
        "bezeichnung": "Polen",
        "haeufigkeit": 37.7
    }, {
        "bezeichnung": "Deutschland",
        "haeufigkeit": 28.8
    }, {
        "bezeichnung": "Griechenland",
        "haeufigkeit": 22.6
    }, {
        "bezeichnung": "Rumänien",
        "haeufigkeit": 19.6
    }, {
        "bezeichnung": "Portugal",
        "haeufigkeit": 15.5
    }, {
        "bezeichnung": "Rest",
        "haeufigkeit": 83.1
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "haeufigkeit";
    pieSeries.dataFields.category = "bezeichnung";
    // pieSeries.dataFields.hidden = "hidden";

// amCharts colors: blue: #6771dc, pink: #c767dc, lightblue: #6794dc, purple: #a367dc, babyblue: #67b7dc, darkpurple: #8067dc
    pieSeries.colors.list = [
        am4core.color("#67b7dc"),
        am4core.color("#6794dc"),
        am4core.color("#6771dc"),
        am4core.color("#3D59AD"),
        am4core.color("#0047AB"),
        am4core.color("#002366"),
        am4core.color("#3399AA"),
        am4core.color("#33BBCC"),
        am4core.color("#98B4D4")
    ];
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = "{bezeichnung}: {haeufigkeit} Mrd."; //"{bezeichnung}";

    chart.innerRadius = am4core.percent(40);
// Let's cut a hole in our Pie chart the size of 40% the radius

// Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

// Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    chart.legend.width = am4core.percent(80);
});