// import {covidIncidences} from "/ts/api.ts";

am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

// Create chart instance
    var chart = am4core.create("trendlineChart", am4charts.XYChart);

// Add chart data
    chart.data = [{
        "date": "2020-01-01",
        "value": 10
    }, {
        "date": "2020-01-02",
        "color": "#CC0000",
        "value": 10
    }, {
        "date": "2020-01-03",
        "value": 12
    }, {
        "date": "2020-01-04",
        "value": 14
    }, {
        "date": "2020-01-05",
        "value": 11
    }, {
        "date": "2020-01-06",
        "value": 6
    }, {
        "date": "2020-01-07",
        "value": 7
    }, {
        "date": "2020-01-08",
        "value": 9
    }, {
        "date": "2020-01-09",
        "value": 13
    }, {
        "date": "2020-01-10",
        "value": 15
    }, {
        "date": "2020-01-11",
        "color": "#CC0000",
        "value": 19
    }, {
        "date": "2020-01-12",
        "value": 21
    }, {
        "date": "2020-01-13",
        "value": 22
    }, {
        "date": "2020-01-14",
        "value": 20
    }, {
        "date": "2020-01-15",
        "value": 18
    }, {
        "date": "2020-01-16",
        "value": 14
    }, {
        "date": "2020-01-17",
        "value": 16
    }, {
        "date": "2020-01-18",
        "value": 18
    }, {
        "date": "2020-01-19",
        "value": 17
    }, {
        "date": "2020-01-20",
        "value": 15
    }, {
        "date": "2020-01-21",
        "value": 12
    }, {
        "date": "2020-01-22",
        "value": 10
    }, {
        "date": "2020-01-23",
        "value": 8
    }];

// Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "Date";
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    dateAxis.renderer.minGridDistance = 50;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2
    series.strokeOpacity = 0.3;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.strokeWidth = 2;
    bullet.stroke = am4core.color("#fff")

    function createTrendLine(data) {
        var trend = chart.series.push(new am4charts.LineSeries());
        trend.dataFields.valueY = "value";
        trend.dataFields.dateX = "date";
        trend.strokeWidth = 2
        trend.stroke = am4core.color("#c00");
        trend.data = data;

        var bullet = trend.bullets.push(new am4charts.CircleBullet());
        bullet.strokeWidth = 2;
        bullet.stroke = am4core.color("#fff")
        bullet.circle.fill = trend.stroke;
    };

    createTrendLine([
        {"date": "2020-01-02", "value": 10},
        {"date": "2020-01-11", "value": 19}
    ]);

    createTrendLine([
        {"date": "2020-01-17", "value": 16},
        {"date": "2020-01-22", "value": 10}
    ]);

});