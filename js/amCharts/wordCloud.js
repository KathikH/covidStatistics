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
    series.labels.template.tooltipText = "{tag}";
    // series.labels.template.fill = am4core.color("#9F6BA0");
    series.fontFamily = "Courier New";
    series.maxFontSize = am4core.percent(30);

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#551a8b"),
        "max": am4core.color("#551a8b"),
        // "min": am4core.color("#0000CC"),
        // "max": am4core.color("#CC00CC"),
        "dataField": "value"
    });

    series.labels.template.url = "https://amazon.de/s?k={tag}";
    series.labels.template.urlTarget = "_blank";

    series.data = [{
        "tag": "maske",
        "weight": 19
    }, {
        "tag": "toilettenpapier",
        "weight": 17
    }, {
        "tag": "mundschutz",
        "weight": 15
    }, {
        "tag": "nintendo switch",
        "weight": 13
    }, {
        "tag": "puzzle",
        "weight": 11
    }, {
        "tag": "haarschneidemaschine",
        "weight": 9
    }, {
        "tag": "desinfektionsmittel",
        "weight": 7
    }, {
        "tag": "einweghandschuhe",
        "weight": 5
    },  {
        "tag": "webcam",
        "weight": 3
    }, {
        "tag": "malen nach zahlen",
        "weight": 1
    }];

    series.dataFields.word = "tag";
    series.dataFields.value = "weight";
});