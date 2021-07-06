const mongoose = require("mongoose");
const {Schema} = require("mongoose");
// const config = require("../config/config");
// const password = config.mongo.pass;
const axios = require('axios');

mongoose.connect(`mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/covidStatistics?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));


db.once("open", async function () {
    console.log("Verbindung erfolgreich")

    // Tabelle anlegen
    const Kennzahlen = mongoose.model("kennzahlen", new Schema({}));
    const DonutChart = mongoose.model("donutChart", new Schema({}));
    const States = mongoose.model("states", new Schema({}));
    const Incidence = mongoose.model("incidence", new Schema({}));
    const Vaccinations = mongoose.model("vaccinations", new Schema({}));
    const Germany = mongoose.model("germany", new Schema({}));
    // const Map = mongoose.model("map", new Schema({}));

    // Die "Tabelle" auf die wir schauen wollen
    let kennzahlen = db.collection("kennzahlen");
    let donutChart = db.collection("donutChart");
    let states = db.collection("states");
    let incidence = db.collection("incidence");
    let vaccinations = db.collection("vaccinations");
    let germany = db.collection("germany");
    // let map = db.collection("map");

    // Alte Objekte entfernen
    const deleteQuery = kennzahlen.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery).deletedCount + " alte Objekte entfernt.");
    const deleteQuery1 = donutChart.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery1).deletedCount + " alte Objekte entfernt.");
    const deleteQuery2 = states.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery2).deletedCount + " alte Objekte entfernt.");
    const deleteQuery3 = incidence.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery3).deletedCount + " alte Objekte entfernt.");
    const deleteQuery4 = vaccinations.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery4).deletedCount + " alte Objekte entfernt.");
    const deleteQuery5 = germany.deleteMany({/*hashtag: "Covid19-Daten"*/});
    console.dir((await deleteQuery5).deletedCount + " alte Objekte entfernt.");
    // const deleteQuery6 = map.deleteMany({/*hashtag: "Covid19-Daten"*/});
    // console.dir((await deleteQuery6).deletedCount + " alte Objekte entfernt.");

    // Kennzahldaten
    const geburtenrate = {
        name: "Geburtenrate 2020",
        wert: "-0,6%"
    };

    const straftaten = {
        name: "Kriminalität in Nordrhein-Westfalen 2020",
        wert: "-1%"
    };

    await insertDocIntoCollection(geburtenrate, kennzahlen);
    await insertDocIntoCollection(straftaten, kennzahlen);

    //DonutChart Virus-Varianten
    const alpha = {
        name: "Alpha",
        wert: 74
    };

    const beta = {
        name: "Beta",
        wert: 1
    };

    const gamma = {
        name: "Gamma",
        wert: 1
    };

    const delta = {
        name: "Delta",
        wert: 15
    };

    const andere = {
        name: "Andere",
        wert: 9
    };

    await insertDocIntoCollection(alpha, donutChart);
    await insertDocIntoCollection(beta, donutChart);
    await insertDocIntoCollection(gamma, donutChart);
    await insertDocIntoCollection(delta, donutChart);
    await insertDocIntoCollection(andere, donutChart);

    //API: GeoMap
    try {
        const resp = await axios.get("https://api.corona-zahlen.org/states");
        if (resp.status !== 200) {
            throw new Error(`expected status code to be 200, but got ${resp.status}`)
        }
        console.log(resp.data.data);
        await states.insertOne(resp.data.data.SH);
        await states.insertOne(resp.data.data.HH);
        await states.insertOne(resp.data.data.NI);
        await states.insertOne(resp.data.data.HB);
        await states.insertOne(resp.data.data.NW);
        await states.insertOne(resp.data.data.HE);
        await states.insertOne(resp.data.data.RP);
        await states.insertOne(resp.data.data.BW);
        await states.insertOne(resp.data.data.BY);
        await states.insertOne(resp.data.data.SL);
        await states.insertOne(resp.data.data.BE);
        await states.insertOne(resp.data.data.BB);
        await states.insertOne(resp.data.data.MV);
        await states.insertOne(resp.data.data.SN);
        await states.insertOne(resp.data.data.ST);
        await states.insertOne(resp.data.data.TH);
        console.log("Bundeslanddaten erfolgreich hinzugefügt.");
    } catch (err) {
        console.log("Error calling API:", err);
        return {ok: false};
    }

    //API: Trendline
    try {
        const resp = await axios.get("https://api.corona-zahlen.org/germany/history/incidence/23");
        if (resp.status !== 200) {
            throw new Error(`expected status code to be 200, but got ${resp.status}`)
        }
        console.log(resp.data.data);
        await incidence.insertMany(resp.data.data);
        console.log("Inzidenzdaten erfolgreich hinzugefügt.");
    } catch (err) {
        console.log("Error calling API:", err);
        return {ok: false};
    }

    //API: Geimpft
    try {
        const resp = await axios.get("https://api.corona-zahlen.org/vaccinations");
        if (resp.status !== 200) {
            throw new Error(`expected status code to be 200, but got ${resp.status}`)
        }
        console.log(resp.data.data);
        await vaccinations.insertMany([resp.data.data]);
        console.log("Impfdaten erfolgreich hinzugefügt.");
    } catch (err) {
        console.log("Error calling API:", err);
        return {ok: false};
    }

    //API: Deutschland
    try {
        const resp = await axios.get("https://api.corona-zahlen.org/germany");
        if (resp.status !== 200) {
            throw new Error(`expected status code to be 200, but got ${resp.status}`)
        }
        console.log(resp.data);
        await germany.insertMany([resp.data]);
        console.log("Impfdaten erfolgreich hinzugefügt.");
    } catch (err) {
        console.log("Error calling API:", err);
        return {ok: false};
    }

    // //API: Map
    // try {
    //     const resp = await axios.get("https://api.corona-zahlen.org/map/states");
    //     if (resp.status !== 200) {
    //         throw new Error(`expected status code to be 200, but got ${resp.status}`)
    //     }
    //     console.log(resp.data);
    //     await germany.insertMany([resp.data]);
    //     console.log("Impfdaten erfolgreich hinzugefügt.");
    // } catch (err) {
    //     console.log("Error calling API:", err);
    //     return {ok: false};
    // }

    // INSERT INTO
    async function insertDocIntoCollection(doc, collection) {
        const result = await collection.insertOne(doc);
        console.dir(result.insertedCount + " Dokument wurde erfolgreich hinzugefügt");
    }

    // SELECT / Ausgabe einiger Werte
    await kennzahlen.find(
        function (err, objects) {
            if (err) return console.log(err);
            console.dir("Dies sind nun die Covid19-Kennzahlen:")
            objects.forEach(function (object) {
                console.log(object.name);
                console.log(object.wert);
                mongoose.disconnect();
            })
        });

})