am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end
    var chart = am4core.create("stackedColumnChart", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
        {
            category: "09.-29.03.2020",
            value1: 0, value2: 1075, value3: 1505, value4: 1296, value5: 1795, value6: 109, value7: 85, value8: 194
        },
        {
            category: "30.03.-26.04.2020",
            value1: 4931, value2: 1521, value3: 2124, value4: 2692, value5: 3257, value6: 140, value7: 98, value8: 238
        },
        {
            category: "27.04.-31.05.2020",
            value1: 6292, value2: 2341, value3: 3237, value4: 3118, value5: 4976, value6: 275, value7: 184, value8: 459
        },
        {
            category: "01.-28.06.2020",
            value1: 4043, value2: 2232, value3: 3557, value4: 2993, value5: 4693, value6: 384, value7: 194, value8: 578
        },
        {
            category: "29.06.-26.07.2020",
            value1: 1839, value2: 2018, value3: 2985, value4: 2383, value5: 3698, value6: 283, value7: 179, value8: 462
        },
        {
            category: "27.07.-30.08.2020",
            value1: 1281, value2: 1778, value3: 3012, value4: 2301, value5: 3768, value6: 288, value7: 168, value8: 456
        },
        {
            category: "31.08.-27.09.2020",
            value1: 1566, value2: 2251, value3: 3432, value4: 2827, value5: 4558, value6: 334, value7: 199, value8: 533
        },
        {
            category: "28.09.-25.10.2020",
            value1: 964, value2: 1710, value3: 2857, value4: 2281, value5: 3632, value6: 324, value7: 164, value8: 488
        },
        {
            category: "26.10.-29.11.2020",
            value1: 1704, value2: 1655, value3: 2784, value4: 2100, value5: 3469, value6: 275, value7: 174, value8: 449
        },
        {
            category: "30.11.-20.12.2020",
            value1: 3433, value2: 2316, value3: 3880, value4: 3018, value5: 5086, value6: 386, value7: 175, value8: 561
        },
        {
            category: "28.12.2020-31.01.2021",
            value1: 3156, value2: 1867, value3: 3234, value4: 2405, value5: 4309, value6: 282, value7: 150, value8: 432
        },
        {
            category: "01.-28.02.2021",
            value1: 3500, value2: 1841, value3: 3222, value4: 2442, value5: 4455, value6: 272, value7: 178, value8: 450
        },
        {
            category: "01.-28.03.2021",
            value1: 3086, value2: 2115, value3: 3539, value4: 2535, value5: 4478, value6: 289, value7: 186, value8: 475
        },
        {
            category: "29.03.-25.04.2021",
            value1: 3263, value2: 2142, value3: 3474, value4: 2478, value5: 4795, value6: 312, value7: 187, value8: 499
        },
        {
            category: "26.04.-23.05.2021",
            value1: 2835, value2: 2088, value3: 3520, value4: 2452, value5: 4207, value6: 307, value7: 207, value8: 514
        }
    ];

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();
    // chart.legend.width = am4core.percent(100);
    // chart.legend.height = am4core.percent(60);
    // chart.legend.scrollable = true;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;


    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.fill = am4core.color("#25523b");
    series1.columns.template.stroke = am4core.color("#25523b");
    series1.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series1.name = "Gespräche über Corona";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";

    var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY}";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.fill = am4core.color("#358856");
    series2.columns.template.stroke = am4core.color("#358856");
    series2.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series2.name = "Gespräche über Suizidalität";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";

    var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY}";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.fill = am4core.color("#5aab61");
    series3.columns.template.stroke = am4core.color("#5aab61");
    series3.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series3.name = "Gespräche über depressive Stimmung";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY}";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");

    var series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.columns.template.width = am4core.percent(80);
    series4.columns.template.fill = am4core.color("#62bd69");
    series4.columns.template.stroke = am4core.color("#62bd69");
    series4.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series4.name = "Gespräche über Ängste";
    series4.dataFields.categoryX = "category";
    series4.dataFields.valueY = "value4";
    series4.dataFields.valueYShow = "totalPercent";
    series4.dataItems.template.locations.categoryX = 0.5;
    series4.stacked = true;
    series4.tooltip.pointerOrientation = "vertical";

    var bullet4 = series4.bullets.push(new am4charts.LabelBullet());
    bullet4.interactionsEnabled = false;
    bullet4.label.text = "{valueY}";
    bullet4.locationY = 0.5;
    bullet4.label.fill = am4core.color("#ffffff");

    var series5 = chart.series.push(new am4charts.ColumnSeries());
    series5.columns.template.width = am4core.percent(80);
    series5.columns.template.fill = am4core.color("#30694b");
    series5.columns.template.stroke = am4core.color("#30694b");
    series5.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series5.name = "Gespräche über Einsamkeit / Isolation";
    series5.dataFields.categoryX = "category";
    series5.dataFields.valueY = "value5";
    series5.dataFields.valueYShow = "totalPercent";
    series5.dataItems.template.locations.categoryX = 0.5;
    series5.stacked = true;
    series5.tooltip.pointerOrientation = "vertical";

    var bullet5 = series5.bullets.push(new am4charts.LabelBullet());
    bullet5.interactionsEnabled = false;
    bullet5.label.text = "{valueY}";
    bullet5.locationY = 0.5;
    bullet5.label.fill = am4core.color("#ffffff");

    // var series6 = chart.series.push(new am4charts.ColumnSeries());
    // series6.columns.template.width = am4core.percent(80);
    // series6.columns.template.tooltipText =
    //     "{valueY.totalPercent.formatNumber('#.00')}%";
    // series6.name = "Gespräche über körperl. / seel. Gewalt";
    // series6.dataFields.categoryX = "category";
    // series6.dataFields.valueY = "value6";
    // series6.dataFields.valueYShow = "totalPercent";
    // series6.dataItems.template.locations.categoryX = 0.5;
    // series6.stacked = true;
    // series6.tooltip.pointerOrientation = "vertical";
    //
    // var bullet6 = series6.bullets.push(new am4charts.LabelBullet());
    // bullet6.interactionsEnabled = false;
    // bullet6.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    // bullet6.locationY = 0.5;
    // bullet6.label.fill = am4core.color("#ffffff");
//
    // var series7 = chart.series.push(new am4charts.ColumnSeries());
    // series7.columns.template.width = am4core.percent(80);
    // series7.columns.template.tooltipText =
    //     "{valueY.totalPercent.formatNumber('#.00')}%";
    // series7.name = "Gespräche über sexualisierte Gewalt";
    // series7.dataFields.categoryX = "category";
    // series7.dataFields.valueY = "value7";
    // series7.dataFields.valueYShow = "totalPercent";
    // series7.dataItems.template.locations.categoryX = 0.5;
    // series7.stacked = true;
    // series7.tooltip.pointerOrientation = "vertical";
    //
    // var bullet7 = series7.bullets.push(new am4charts.LabelBullet());
    // bullet7.interactionsEnabled = false;
    // bullet7.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    // bullet7.locationY = 0.5;
    // bullet7.label.fill = am4core.color("#ffffff");

    var series8 = chart.series.push(new am4charts.ColumnSeries());
    series8.columns.template.width = am4core.percent(80);
    series8.columns.template.fill = am4core.color("#0c3823");
    series8.columns.template.stroke = am4core.color("#0c3823");
    series8.columns.template.tooltipText =
        "{category}: {valueY} ({valueY.totalPercent.formatNumber('#.00')}%)";
    series8.name = "Gespräche über Gewalt";
    series8.dataFields.categoryX = "category";
    series8.dataFields.valueY = "value8";
    series8.dataFields.valueYShow = "totalPercent";
    series8.dataItems.template.locations.categoryX = 0.5;
    series8.stacked = true;
    series8.tooltip.pointerOrientation = "vertical";

    var bullet8 = series8.bullets.push(new am4charts.LabelBullet());
    bullet8.interactionsEnabled = false;
    bullet8.label.text = "{valueY}";
    bullet8.locationY = 0.5;
    bullet8.label.fill = am4core.color("#ffffff");

    chart.scrollbarX = new am4core.Scrollbar();
});