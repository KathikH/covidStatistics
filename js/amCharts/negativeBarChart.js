am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("negativeBarChart", am4charts.XYChart);

// Add data
    chart.data = [{
        "name": "Wohnungseinbrüche",
        "percentage": -7.7
    }, {
        "name": "Straßenkriminalität",
        "percentage": -2.3
    }, {
        "name": "Häusliche Gewalt",
        "percentage": 7.7
    }, {
        "name": "Taschendiebstahl",
        "percentage": 5.6
    }, {
        "name": "Computerkriminalität",
        "percentage": 20.8
    }];

// Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.labels.template.disabled = true;
//     categoryAxis.renderer.grid.template.location = 0;
//     categoryAxis.renderer.labels.template.rotation = -60;
//     categoryAxis.renderer.labels.template.verticalCenter = "middle";
//     categoryAxis.renderer.labels.template.horizontalCenter = "right";
//     categoryAxis.renderer.minGridDistance = 40;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "percentage";
    series.dataFields.categoryX = "name";
    series.name = "percentage";

    var columnTemplate = series.columns.template;
    columnTemplate.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    columnTemplate.fillOpacity = .8;
    columnTemplate.strokeOpacity = 0;
    columnTemplate.fill = am4core.color("#6794dc");
    // columnTemplate.fill = am4core.color("#5a5");

    columnTemplate.adapter.add("fill", function (fill, target) {
        if (target.dataItem && (target.dataItem.valueY < 0)) {
            return am4core.color("#D65DB1");
            // return am4core.color("#a55");
        } else {
            return fill;
        }
    });

});