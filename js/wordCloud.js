am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("word_cloud", am4plugins_wordCloud.WordCloud);
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.accuracy = 4;
    series.step = 15;
    series.rotationThreshold = 0.7;
    series.maxCount = 200;
    series.minWordLength = 2;
    series.labels.template.tooltipText = "{word}";
    // series.labels.template.tooltipText = "{word}: {value}";
    series.fontFamily = "Courier New";
    series.maxFontSize = am4core.percent(30);
    series.minColor = '#FFFFFFFF';
    series.maxColor = '#FFFFFFFF';

    series.text = "maske maske maske maske maske maske maske maske maske maske " +
        "toilettenpapier toilettenpapier toilettenpapier toilettenpapier toilettenpapier toilettenpapier toilettenpapier toilettenpapier toilettenpapier " +
        "mundschutz mundschutz mundschutz mundschutz mundschutz mundschutz mundschutz mundschutz " +
        "nintendo-switch nintendo-switch nintendo-switch nintendo-switch  nintendo-switch  nintendo-switch  nintendo-switch " +
        "puzzle puzzle puzzle puzzle puzzle puzzle " +
        "haarschneidemaschine haarschneidemaschine haarschneidemaschine haarschneidemaschine haarschneidemaschine " +
        "desinfektionsmittel desinfektionsmittel desinfektionsmittel desinfektionsmittel " +
        "einweghandschuhe einweghandschuhe einweghandschuhe " +
        "webcam webcam " +
        "malen-nach-zahlen";
});