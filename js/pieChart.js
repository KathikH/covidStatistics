am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

// Create chart instance
    var chart = am4core.create("pieChart", am4charts.PieChart);

// Add data
    chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
    }, {
        "country": "Czechia",
        "litres": 301.9
    }, {
        "country": "Ireland",
        "litres": 201.1
    }, {
        "country": "Germany",
        "litres": 165.8
    }, {
        "country": "Australia",
        "litres": 139.9
    }, {
        "country": "Austria",
        "litres": 128.3
    }, {
        "country": "UK",
        "litres": 99
    }, {
        "country": "Belgium",
        "litres": 60
    }, {
        "country": "The Netherlands",
        "litres": 50
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;

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