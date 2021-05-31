am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("barChart", am4charts.XYChart);

// Add data
    chart.data = [{
        "value": "Vor der Corona-Krise",
        "name": "Vor Corona",
        "percentage": 4
    }, {
        "value": "April 2020 (erster Lockdown)",
        "name": "April 2020",
        "percentage": 27
    }, {
        "value": "Juni 2020",
        "name": "Juni 2020",
        "percentage": 16
    }, {
        "value": "November 2020 (Lockdown light)",
        "name": "November 2020",
        "percentage": 14
    }, {
        "value": "Dezember 2020",
        "name": "Dezember 2020",
        "percentage": 17
    }, {
        "value": "Januar 2021",
        "name": "Januar 2021",
        "percentage": 24
    }];

// Create axes

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;


    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
        }
        return dy;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 30;

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "percentage";
    series.dataFields.categoryX = "name";
    series.name = "percentage";
    series.columns.template.tooltipText = "{value}: [bold]{valueY}%[/]";
    series.columns.template.fillOpacity = .8;
    series.columns.template.fill = am4core.color("#002366");
    series.columns.template.stroke = am4core.color("#002366");

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

}); // end am4core.ready()