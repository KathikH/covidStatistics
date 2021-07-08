am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

// Create chart instance
    var chart = am4core.create("trendlineChart", am4charts.XYChart);

// Add chart data
    chart.data = [{
        "date": "2021-06-12T00:00:00.000Z",
        "incidence": 17.64167396255456
    }, {
        "date": "2021-06-13T00:00:00.000Z",
        "incidence": 16.903397802998366
    }, {
        "date": "2021-06-14T00:00:00.000Z",
        "color": "#ff5733",
        "incidence": 15.965522551444892
    }, {
        "date": "2021-06-15T00:00:00.000Z",
        "incidence": 13.757908497788257
    }, {
        "date": "2021-06-16T00:00:00.000Z",
        "incidence": 12.05049457829347
    }, {
        "date": "2021-06-17T00:00:00.000Z",
        "incidence": 10.698992292721544
    }, {
        "date": "2021-06-18T00:00:00.000Z",
        "incidence": 9.705806449409788
    }, {
        "date": "2021-06-19T00:00:00.000Z",
        "incidence": 9.034864923298457
    }, {
        "date": "2021-06-20T00:00:00.000Z",
        "incidence": 8.745085518651807
    }, {
        "date": "2021-06-21T00:00:00.000Z",
        "incidence": 8.344684930488594
    }, {
        "date": "2021-06-22T00:00:00.000Z",
        "incidence": 7.559515008354724
    }, {
        "date": "2021-06-23T00:00:00.000Z",
        "incidence": 6.883763865568762
    }, {
        "date": "2021-06-24T00:00:00.000Z",
        "incidence": 6.479756064899573
    }, {
        "date": "2021-06-25T00:00:00.000Z",
        "incidence": 6.143082897675249
    }, {
        "date": "2021-06-26T00:00:00.000Z",
        "incidence": 5.837672238836041
    }, {
        "date": "2021-06-27T00:00:00.000Z",
        "incidence": 5.77514722206581
    }, {
        "date": "2021-06-28T00:00:00.000Z",
        "incidence": 5.6573116135372965
    }, {
        "date": "2021-06-29T00:00:00.000Z",
        "incidence": 5.472141371563918
    }, {
        "date": "2021-06-30T00:00:00.000Z",
        "incidence": 5.41442597146832
    }, {
        "date": "2021-07-01T00:00:00.000Z",
        "incidence": 5.259315833711399
    }, {
        "date": "2021-07-02T00:00:00.000Z",
        "incidence": 5.191981200266534
    }, {
        "date": "2021-07-03T00:00:00.000Z",
        "incidence": 5.212422071133726
    }, {
        "date": "2021-07-04T00:00:00.000Z",
        "color": "#ff5733",
        "incidence": 5.200398029447143
    }];

    // chart.dataSource.url = "https://api.corona-zahlen.org/germany/history/incidence/23";
    // chart.dataSource.parser = new am4core.JSONParser();
    // chart.dataSource.parser.options.emptyAs = 0;
    // chart.dataSource.events.on("parseended", function (ev) {
    //     // parsed data is assigned to data source's `data` property
    //     var data = ev.target.data;
    //     var newData = [];
    //     data.forEach(function (dataItem) {
    //         var newDataItem = {};
    //         Object.keys(dataItem).forEach(function (key) {
    //             if (typeof dataItem[key] === "object") {
    //                 newDataItem["date"] = dataItem[key]["@date"];
    //             } else {
    //                 newDataItem[key] = dataItem[key];
    //             }
    //         });
    //         newData.push(newDataItem);
    //     });
    //     console.log(JSON.stringify(newData));
    //     chart.dataSource.data = newData
    // });

// Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "Date";
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    dateAxis.renderer.minGridDistance = 50;
    // dateAxis.tooltipDateFormat = "MM dd, yyyy";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "incidence";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2
    series.strokeOpacity = 0.3;
    series.fill = am4core.color("#581845");
    series.stroke = am4core.color("#581845");

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.strokeWidth = 2;
    bullet.fill = am4core.color("#581845");
    bullet.stroke = am4core.color("#fff")
    bullet.tooltipText = "{dateX}\n[bold font-size: 17px]Inzidenz: {valueY}[/]";

    var hoverState = bullet.states.create("hover");
    hoverState.properties.scale = 1.7;

    function createTrendLine(data) {
        var trend = chart.series.push(new am4charts.LineSeries());
        trend.dataFields.valueY = "incidence";
        trend.dataFields.dateX = "date";
        trend.strokeWidth = 2
        trend.stroke = am4core.color("#ff5733");
        trend.data = data;

        var bullet = trend.bullets.push(new am4charts.CircleBullet());
        bullet.strokeWidth = 2;
        bullet.stroke = am4core.color("#fff")
        bullet.circle.fill = trend.stroke;
        bullet.tooltipText = "{dateX}\n[bold font-size: 17px]Inzidenz: {valueY}[/]";

        var hoverState = bullet.states.create("hover");
        hoverState.properties.scale = 1.7;

        return trend;
    };

    createTrendLine([
        {"date": "2021-06-14T00:00:00.000Z", "incidence": 15.965522551444892},
        {"date": "2021-07-04T00:00:00.000Z", "incidence": 5.200398029447143}
    ]);

});