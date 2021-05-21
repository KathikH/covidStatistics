google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Tage', 'Inzidenz DE'],
        [10, 24.1], [11, 17.9], [12, 13.2], [13, 10.8], [14, 21.7], [15, 29.4], [16, 25.8], [17, 23.8], [18, 19.2]]);

    var options = {
        hAxis: {
            title: 'Tag',
            minValue: 10,
            titleTextStyle: {color: '#FFFFFF', italic: false},
            textStyle: {color: '#FFFFFF'}
        },
        vAxis: {
            title: 'Inzidenzwert in Tausend',
            minValue: 0,
            titleTextStyle: {color: '#FFFFFF', italic: false},
            textStyle: {color: '#FFFFFF'}
        },
        trendlines: {0: {}},
        backgroundColor: {fill: 'transparent'},
        colors: ['90ee90'],
        legend: {textStyle: {color: '#FFFFFF'}}
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('trendline_Chart'));
    chart.draw(data, options);
}