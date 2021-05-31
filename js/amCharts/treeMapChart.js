am4core.ready(function () {

/* Set themes */
am4core.useTheme(am4themes_animated);

/* Create chart */
var chart = am4core.create("treeMapChart", am4charts.TreeMap);
chart.data = [{
    "name": "First",
    "children": [
        { "name": "A1", "value": 100 },
        { "name": "A2", "value": 60 },
        { "name": "A3", "value": 30 }
    ]
}, {
    "name": "Second",
    "children": [
        { "name": "B1", "value": 135 },
        { "name": "B2", "value": 98 },
        { "name": "B3", "value": 56 }
    ]
}, {
    "name": "Third",
    "children": [
        { "name": "C1", "value": 335 },
        { "name": "C2", "value": 148 },
        { "name": "C3", "value": 126 },
        { "name": "C4", "value": 26 }
    ]
}, {
    "name": "Fourth",
    "children": [
        { "name": "D1", "value": 415 },
        { "name": "D2", "value": 148 },
        { "name": "D3", "value": 89 },
        { "name": "D4", "value": 64 },
        { "name": "D5", "value": 16 }
    ]
}, {
    "name": "Fifth",
    "children": [
        { "name": "E1", "value": 687 },
        { "name": "E2", "value": 148 }
    ]
}];


/* Set color step */
chart.colors.step = 2;

/* Define data fields */
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";

/* Create top-level series */
var level1 = chart.seriesTemplates.create("0");
var level1_column = level1.columns.template;
level1_column.fillOpacity = 0;
level1_column.strokeOpacity = 0;

/* Create second-level series */
var level2 = chart.seriesTemplates.create("1");
var level2_column = level2.columns.template;
level2_column.column.cornerRadius(10, 10, 10, 10);
level2_column.fillOpacity = 0.8;
level2_column.stroke = am4core.color("#fff");
level2_column.strokeWidth = 5;
level2_column.strokeOpacity = 1;

var level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

/* Add a navigation bar */
chart.navigationBar = new am4charts.NavigationBar();

// level 0 series template
    var level0SeriesTemplate = chart.seriesTemplates.create("0");
    level0SeriesTemplate.strokeWidth = 2;

// by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
// create hover state
    var hoverState = level0SeriesTemplate.columns.template.states.create("hover");

// darken
    hoverState.adapter.add("fill", (fill, target) => {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
    });

// add logo
    var image = level0SeriesTemplate.columns.template.createChild(
        am4core.Image
    );
    image.opacity = 0.15;
    image.align = "center";
    image.valign = "middle";
    image.width = am4core.percent(80);
    image.height = am4core.percent(80);

// add adapter for href to load correct image
    image.adapter.add("href", (href, target) => {
        var dataItem = target.parent.dataItem;
        if (dataItem) {
            return (
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/" +
                dataItem.treeMapDataItem.name.toLowerCase() +
                ".png"
            );
        }
    });

});