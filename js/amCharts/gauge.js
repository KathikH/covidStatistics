am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chartMin = -50;
    var chartMax = 100;

    var data = {
        score: 52.7,
        gradingData: [
            {
                title: "Sehr stark erhöhtes Risiko",
                name: "Lockdown",
                color: "#ff6961",
                // color: "#ee1f25",
                lowScore: -50,
                highScore: 0
            },
            {
                title: "Erhöhtes Risiko",
                name: "Pandemie",
                color: "#fdff6e",
                // color: "#ffcc00",
                lowScore: 0,
                highScore: 50
            },
            {
                title: "Normales Risiko",
                name: "Keine Pandemie",
                color: "#77dd77",
                // color: "#0f9747",
                lowScore: 50,
                highScore: 100
            }
        ]
    };

    /**
     Grading Lookup
     */
    function lookUpGrade(lookupScore, grades) {
        for (var i = 0; i < grades.length; i++) {
            if (
                grades[i].lowScore < lookupScore &&
                grades[i].highScore >= lookupScore
            ) {
                return grades[i];
            }
        }
        return null;
    }

// create chart
    var chart = am4core.create("gauge", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0;
    chart.fontSize = 11;
    chart.innerRadius = am4core.percent(80);
    chart.resizable = true;

    /**
     * Normal axis
     */
    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = chartMin;
    axis.max = chartMax;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 0.1;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeWidth = 0.5;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = am4core.percent(15);
    axis.renderer.labels.template.fontSize = "0.9em";

    /**
     * Axis for ranges
     */
    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = chartMin;
    axis2.max = chartMax;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = false;
    axis2.renderer.grid.template.opacity = 0.5;
    axis2.renderer.labels.template.bent = true;
    axis2.renderer.labels.template.fill = am4core.color("#000");
    axis2.renderer.labels.template.fontWeight = "bold";
    axis2.renderer.labels.template.fillOpacity = 0.6;
    axis2.renderer.labels.template.fontSize = "0.4em";

    /**
     Ranges
     */
    for (let grading of data.gradingData) {
        var range = axis2.axisRanges.create();
        range.axisFill.fill = am4core.color(grading.color);
        range.axisFill.fillOpacity = 0.8;
        range.axisFill.zIndex = -1;
        range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
        range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
        range.grid.strokeOpacity = 0;
        // range.stroke = am4core.color("#000000");
        range.stroke = am4core.color(grading.color).lighten(-0.1);
        range.label.inside = true;
        range.label.text = grading.name.toUpperCase();
        range.label.inside = true;
        range.label.location = 0.5;
        range.label.inside = true;
        range.label.radius = am4core.percent(10);
        range.label.paddingBottom = -5; // ~half font size
        range.label.fontSize = "0.9em";
    }

    var matchingGrade = lookUpGrade(data.score, data.gradingData);

    /**
     * Label 1
     */
    var label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = "500%";
    label.x = am4core.percent(50);
    label.paddingBottom = 15;
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
//label.dataItem = data;
    label.text = data.score.toFixed(1);
//label.text = "{score}";
    label.fill = am4core.color(matchingGrade.color);

    /**
     * Label 2
     */
    var label2 = chart.radarContainer.createChild(am4core.Label);
    label2.isMeasured = false;
    label2.fontSize = "1.8vh";
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "bottom";
    label2.text = matchingGrade.title.toUpperCase();
    label2.fill = am4core.color(matchingGrade.color);

    /**
     * Hand
     */
    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(55);
    hand.startWidth = 8;
    hand.pin.disabled = true;
    hand.value = data.score;
    hand.fill = am4core.color("#444");
    hand.stroke = am4core.color("#000");

    hand.events.on("positionchanged", function () {
        label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
        var value2 = axis.positionToValue(hand.currentPosition);
        var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
        label2.text = matchingGrade.title.toUpperCase();
        label2.fill = am4core.color(matchingGrade.color);
        label2.stroke = am4core.color("#000000");
        label.fill = am4core.color(matchingGrade.color);
        label.stroke = am4core.color("#000000");
    })

    setInterval(function () {
        var value = chartMin + Math.random() * (chartMax - chartMin);
        hand.showValue(value, 1000, am4core.ease.cubicOut);
    }, 2000);

    chart.events.on("hit", function () {
        hand.events.disableType("positionchanged");
        hand.hide();
    });

    chart.events.on("doublehit", function () {
        hand.events.enableType("positionchanged");
        hand.show();
    });

    chart.tooltipHTML = 'Zum stoppen einmal auf das Diagramm tippen und <br> zum wieder starten zweimal auf das Diagramm tippen.';
    chart.tooltip.getFillFromObject = false;
    chart.tooltip.background.fill = am4core.color("#ffffff");
    chart.tooltip.label.fill = am4core.color("#000000");
    chart.tooltipY = 0;
    chart.tooltip.pointerOrientation = "down";
});