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

    // chart.dataSource.url = "data:/../connect.js;base64,mongodb://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/covidStatistics?retryWrites=true&w=majority";
    // chart.dataSource.events.on("parseended", function(ev) {
    //     var map = {}; //lookup table to map questions to data elements
    //
    //     ev.target.data.forEach(function(item) {
    //         Object.keys(item).forEach(function(key) {
    //             if (key.indexOf('name') === -1) { //act on non-response keys
    //                 if (!map[key]) {
    //                     map[key] = {
    //                         "name": key
    //                     }; //create an object containing the name/question pair if it doesn't exist
    //                 }
    //                 map[key][item.wert] = item[key]; // assign response+value to the object (e.g. "Yes, Please": 75)
    //             }
    //         });
    //     });
    //     //remap lookup table as array
    //     ev.target.data = Object.keys(map).map(function(question) {
    //         return map[question];
    //     });
    // })

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
    chart.legend.position = "right";
    chart.legend.width = am4core.percent(50);

});