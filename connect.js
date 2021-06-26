const mongoose = require("mongoose");
const {Schema} = require("mongoose");
// const config = require("../config/config");
// const password = config.mongo.pass;

mongoose.connect(`mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/covidStatistics?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true} )

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));


db.once("open", async function () {
    console.log("Verbindung erfolgreich")

    // Tabelle anlegen
    const Kennzahlen = mongoose.model("kennzahlen", new Schema({}));

    // Die "Tabelle" auf die wir schauen wollen
    let kennzahlen = db.collection("kennzahlen");

    // Alte Objekte entfernen
    const deleteQuery = kennzahlen.deleteMany( { hashtag: "Covid19-Daten"} );
    console.dir((await deleteQuery).deletedCount + " alte Objekte entfernt.");


    const geburtenrate = {
        name: "Geburtenrate 2020",
        wert: "-0,6%",
        hashtag: "Covid19-Daten"
    };

    const straftaten = {
        name: "Kriminalität in Nordrhein-Westfalen 2020",
        wert: "-1%",
        hashtag: "Covid19-Daten"
    };

    // Kennzahldaten
    await insertDocIntoCollection(geburtenrate, kennzahlen);
    await insertDocIntoCollection(straftaten, kennzahlen);
    await insertDocIntoCollection(hotlineAnrufe, kennzahlen);

    //
    // await insertDocIntoCollection(hotlineAnrufe, kennzahlen);


    // INSERT INTO
    async function insertDocIntoCollection(doc, collection) {
        const result = await collection.insertOne(doc);
        console.dir(result.insertedCount + " Dokument wurde erfolgreich hinzugefügt");
    }

    // SELECT / Ausgabe einiger Werte
    await kennzahlen.find({ hashtag: "Covid19-Daten" },
        function (err, objects) {
            if (err) return console.log(err);
            console.dir("Dies sind nun die Covid19-Daten:")
            objects.forEach(function (object) {
                console.log(object.name);
                console.log(object.wert);
                mongoose.disconnect();
            })
        });
})