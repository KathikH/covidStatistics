google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Land');
    data.addColumn('number', '7-Tage-Inzidenzwert');
    data.addRows([[{f: 'Baden-Württemberg', v: 'DE-BW'}, 80],
        [{f: 'Bayern', v: 'DE-BY'}, 63],
        [{f: 'Berlin', v: 'DE-BE'}, 55],
        [{f: 'Brandenburg', v: 'DE-BB'}, 48],
        [{f: 'Bremen', v: 'DE-HB'}, 56],
        [{f: 'Hamburg', v: 'DE-HH'}, 35],
        [{f: 'Hessen', v: 'DE-HE'}, 75],
        [{f: 'Mecklenburg-Vorpommern', v: 'DE-MV'}, 41],
        [{f: 'Niedersachsen', v: 'DE-NI'}, 46],
        [{f: 'Nordrhein-Westfalen', v: 'DE-NW'}, 69],
        [{f: 'Rheinland-Pfalz', v: 'DE-RP'}, 56],
        [{f: 'Saarland', v: 'DE-SL'}, 81],
        [{f: 'Sachsen', v: 'DE-SN'}, 82],
        [{f: 'Sachsen-Anhalt', v: 'DE-ST'}, 54],
        [{f: 'Schleswig-Holstein', v: 'DE-SH'}, 32],
        [{f: 'Thüringen', v: 'DE-TH'}, 101]]);

    var options = {
        'title': 'Map',
        'region': 'DE',
        'resolution': 'provinces',
        datalessRegionColor: 'transparent',
        // colors: ['#8a0303'], colors: ['#ff333d'], colors: ['#ff4500'], colors: ['#9c343e'], colors: ['#b83d3f'],
        colors: ['#66c041'],
        backgroundColor: {fill: 'transparent'}
    };

    var container = document.getElementById('de_map');
    var geochart = new google.visualization.GeoChart(container);
    geochart.draw(data, options);
};