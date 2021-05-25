am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("areaChart", am4charts.XYChart);

    chart.data = [{
        "year": "1994",
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
    }, {
        "year": "1995",
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
    }, {
        "year": "1996",
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
    }, {
        "year": "1997",
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
    }, {
        "year": "1998",
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
    }, {
        "year": "1999",
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
    }, {
        "year": "2000",
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
    }, {
        "year": "2001",
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
    }, {
        "year": "2002",
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
    }, {
        "year": "2003",
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 93
    }, {
        "year": "2004",
        "cars": 1318,
        "motorcycles": 697,
        "bicycles": 111
    }, {
        "year": "2005",
        "cars": 1213,
        "motorcycles": 633,
        "bicycles": 87
    }, {
        "year": "2006",
        "cars": 1199,
        "motorcycles": 621,
        "bicycles": 79
    }, {
        "year": "2007",
        "cars": 1110,
        "motorcycles": 210,
        "bicycles": 81
    }, {
        "year": "2008",
        "cars": 1165,
        "motorcycles": 232,
        "bicycles": 75
    }, {
        "year": "2009",
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 88
    }, {
        "year": "2010",
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 82
    }, {
        "year": "2011",
        "cars": 1180,
        "motorcycles": 285,
        "bicycles": 87
    }, {
        "year": "2012",
        "cars": 1159,
        "motorcycles": 277,
        "bicycles": 71
    }];

    chart.dateFormatter.inputDateFormat = "yyyy";
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.baseInterval = {
        timeUnit: "year",
        count: 1
    }

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "year";
    series.name = "cars";
    series.dataFields.valueY = "cars";
    series.tooltipHTML = "<img href=\"pics/favicon-32x32.png\" style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "motorcycles";
    series2.dataFields.dateX = "year";
    series2.dataFields.valueY = "motorcycles";
    series2.tooltipHTML = "<img href=\"pics/favicon-32x32.png\" style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
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
    series3.name = "bicycles";
    series3.dataFields.dateX = "year";
    series3.dataFields.valueY = "bicycles";
    series3.tooltipHTML = "<img href=\"pics/favicon-32x32.png\" style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
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

// Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

});