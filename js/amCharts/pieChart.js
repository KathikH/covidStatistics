am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

// Create chart instance
    var chart = am4core.create("pieChart", am4charts.PieChart);

// Add data
    chart.data = [{
        "name": "Unzufrieden",
        "percentage": 58
    }, {
        "name": "Zufrieden",
        "percentage": 42
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percentage";
    pieSeries.dataFields.category = "name";
    pieSeries.labels.template.text = "{name}: {percentage}";

    pieSeries.colors.list = [
        am4core.color("#8a9a5b"),
        am4core.color("#4f6137")
    ];

    chart.radius = am4core.percent(95);

// Create custom legend
    chart.events.on("ready", function (event) {
        // populate our custom legend when chart renders
        chart.customLegend = document.getElementById('pieChartLegend');
        pieSeries.dataItems.each(function (row, i) {
            var color = chart.colors.getIndex(i);
            var percent = Math.round(row.values.value.percent * 100) / 100;
            var value = row.value;
            legend.innerHTML += '<div class="legend-item" id="legend-item-' + i + '" onclick="toggleSlice(' + i + ');" onmouseover="hoverSlice(' + i + ');" onmouseout="blurSlice(' + i + ');" style="color: ' + color + ';"><div class="legend-marker" style="background: ' + color + '"></div>' + row.category + '<div class="legend-value">' + value + ' | ' + percent + '%</div></div>';
        });
    });

    function toggleSlice(item) {
        var slice = pieSeries.dataItems.getIndex(item);
        if (slice.visible) {
            slice.hide();
        } else {
            slice.show();
        }
    }

    function hoverSlice(item) {
        var slice = pieSeries.slices.getIndex(item);
        slice.isHover = true;
    }

    function blurSlice(item) {
        var slice = pieSeries.slices.getIndex(item);
        slice.isHover = false;
    }

});