google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Monat', 'Inzidenz'],
        ['Februar 2020', 2],
        ['März 2020', 60],
        ['April 2020', 120],
        ['Mai 2020', 100],
        ['Juni 2020', 85],
        ['Juli 2020', 90],
        ['August 2020', 110],
        ['September 2020', 120],
        ['Oktober 2020', 130],
        ['November 2020', 150],
        ['Dezember 2020', 170],
        ['Januar 2021', 120],
        ['Februar 2021', 130],
        ['März 2021', 140],
        ['April 2021', 145],
        ['Mai 2021', 150],
    ]);

    var options = {
        legend: {textStyle: {color: '#FFFFFF'}},
        hAxis: {textPosition: 'none', title: '2020-2021', titleTextStyle: {color: '#FFFFFF', italic: false}},
        vAxis: {minValue: 0, textStyle: {color: '#FFFFFF'}},
        data: {textStyle: {color: '#ffffff'}},
        backgroundColor: {fill: 'transparent'},
        colors: ['90ee90']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
    chart.draw(data, options);
}