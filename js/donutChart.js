am4core.ready(function () {

    // Create chart instance
    var chart = am4core.create("donutChart", am4charts.PieChart);

// Add data
    chart.data = [{
        "symtpome": "Lithuania",
        "haeufigkeit": 501.9
    }, {
        "symtpome": "Czech Republic",
        "haeufigkeit": 301.9
    }, {
        "symtpome": "Ireland",
        "haeufigkeit": 201.1
    }, {
        "symtpome": "Germany",
        "haeufigkeit": 165.8
    }, {
        "symtpome": "Australia",
        "haeufigkeit": 139.9
    }, {
        "symtpome": "Austria",
        "haeufigkeit": 128.3
    }, {
        "symtpome": "The Netherlands",
        "haeufigkeit": 50,
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "haeufigkeit";
    pieSeries.dataFields.category = "symtpome";
    // pieSeries.dataFields.hidden = "hidden";

// Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

// Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

// Disable tooltips
    pieSeries.slices.template.tooltipText = "";

// Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

});