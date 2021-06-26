am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("areaChart", am4charts.XYChart);

    chart.data = [{
        "date": new Date(2020, 2, 19),
        // "date": "19/02/2020",
        "deutschland": 100,
        "usa": 100,
        "europa": 100
    }, {
        "date": new Date(2020, 3, 2),
        // "date": "02/03/2020",
        "deutschland": 86.18,
        "usa": 85.65,
        "europa": 86.38
    }, {
        "date": new Date(2020, 3, 18),
        // "date": "18/03/2020",
        "deutschland": 61,
        "usa": 70.7,
        "europa": 64.77
    }, {
        "date": new Date(2020, 3, 23),
        // "date": "23/03/2020",
        "deutschland": 63.63,
        "usa": 66.08,
        "europa": 65.1
    }, {
        "date": new Date(2020, 3, 26),
        // "date": "26/03/2020",
        "deutschland": 72.73,
        "usa": 75.91,
        "europa": 74.74
    }, {
        "date": new Date(2020, 4, 3),
        // "date": "03/04/2020",
        "deutschland": 69.26,
        "usa": 73.21,
        "europa": 71.96
    }, {
        "date": new Date(2020, 4, 29),
        // "date": "29/04/2020",
        "deutschland": 80.79,
        "usa": 86.56,
        "europa": 80.8
    }, {
        "date": new Date(2020, 5, 14),
        // "date": "14/05/2020",
        "deutschland": 75.86,
        "usa": 84.6,
        "europa": 76.12
    }, {
        "date": new Date(2020, 6, 5),
        // "date": "05/06/2020",
        "deutschland": 93.05,
        "usa": 90.65,
        "europa": 87.25
    }, {
        "date": new Date(2020, 6, 26),
        // "date": "26/06/2020",
        "deutschland": 88.14,
        "usa": 86.72,
        "europa": 83.54
    }, {
        "date": new Date(2020, 7, 21),
        // "date": "21/07/2020",
        "deutschland": 95.31,
        "usa": 91.89,
        "europa": 87.84
    }, {
        "date": new Date(2020, 7, 31),
        // "date": "31/07/2020",
        "deutschland": 89.2,
        "usa": 89.68,
        "europa": 82.88
    }, {
        "date": new Date(2020, 9, 2),
        // "date": "02/09/2020",
        "deutschland": 95.81,
        "usa": 98.47,
        "europa": 86.44
    }, {
        "date": new Date(2020, 9, 16),
        // "date": "16/09/2020",
        "deutschland": 96,
        "usa": 93.19,
        "europa": 86.99
    }, {
        "date": new Date(2020, 9, 25),
        // "date": "25/09/2020",
        "deutschland": 90.74,
        "usa": 92.62,
        "europa": 82.92
    }, {
        "date": new Date(2020, 10, 12),
        // "date": "12/10/2020",
        "deutschland": 95.79,
        "usa": 97.84,
        "europa": 86.92
    }, {
        "date": new Date(2020, 10, 30),
        // "date": "30/10/2020",
        "deutschland": 83.91,
        "usa": 91.78,
        "europa": 79.94
    }, {
        "date": new Date(2020, 11, 11),
        // "date": "11/11/2020",
        "deutschland": 94.47,
        "usa": 99.31,
        "europa": 90.82
    }, {
        "date": new Date(2020, 12, 17),
        // "date": "17/12/2020",
        "deutschland": 98.77,
        "usa": 100.58,
        "europa": 93
    }, {
        "date": new Date(2021, 1, 8),
        // "date": "08/01/2021",
        "deutschland": 101.42,
        "usa": 103.32,
        "europa": 96.22
    }, {
        "date": new Date(2021, 1, 29),
        // "date": "29/01/2021",
        "deutschland": 98.11,
        "usa": 101.28,
        "europa": 92.59
    }, {
        "date": new Date(2021, 2, 17),
        // "date": "17/02/2021",
        "deutschland": 101.79,
        "usa": 108.55,
        "europa": 97.43
    }, {
        "date": new Date(2021, 2, 25),
        // "date": "25/02/2021",
        "deutschland": 101,
        "usa": 103.65,
        "europa": 96.58
    }, {
        "date": new Date(2021, 3, 18),
        // "date": "18/03/2021",
        "deutschland": 106.84,
        "usa": 108.29,
        "europa": 100.41
    }, {
        "date": new Date(2021, 4, 16),
        // "date": "16/04/2021",
        "deutschland": 111.4,
        "usa": 115.44,
        "europa": 104.34
    }, {
        "date": new Date(2021, 5, 4),
        // "date": "04/05/2021",
        "deutschland": 106.91,
        "usa": 114.12,
        "europa": 102.6
    }, {
        "date": new Date(2021, 6, 16),
        // "date": "16/06/2021",
        "deutschland": 111.84,
        "usa": 115.32,
        "europa": 109.64
    }, {
        "date": new Date(2021, 6, 23),
        // "date": "23/06/2021",
        "deutschland": 111.82,
        "usa": 117.82,
        "europa": 108.06
    }];

    // chart.dateFormatter.inputDateFormat = "dd/mm/yyyy";
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.baseInterval = {
        timeUnit: "date",
        count: 1
    }

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.name = "Deutschland";
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "deutschland";
    // series.tooltipHTML = "<img href=\"pics/favicon-32x32.png\" style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "USA";
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "usa";
    series2.tooltipText = "[#000]{valueY.value}[/]";
    series2.tooltip.background.fill = am4core.color("#FFF");
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.strokeWidth = 3;
    series2.sequencedInterpolation = true;
    series2.fillOpacity = 0.6;
    series2.stacked = true;
    series2.strokeWidth = 2;

    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.name = "Europa";
    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "europa";
    series3.tooltipText = "[#000]{valueY.value}[/]";
    series3.tooltip.background.fill = am4core.color("#FFF");
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 3;
    series3.sequencedInterpolation = true;
    series3.fillOpacity = 0.6;
    series3.defaultState.transitionDuration = 1000;
    series3.stacked = true;
    series3.strokeWidth = 2;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.disabled = true;

// Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

});