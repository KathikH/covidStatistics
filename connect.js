const mongoose = require("mongoose");
const {Schema} = require("mongoose");
// const config = require("../config/config");
// const password = config.mongo.pass;

mongoose.connect(`mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/sample_airbnb?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true} )

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));


db.once("open", async function () {
    console.log("Verbindung erfolgreich")

    //
    const SampleAirBnb = mongoose.model("listingsAndReviews", new Schema({}));

    // Die "Tabelle" auf die wir schauen wollen
    let listingsAndReviewsCollection = db.collection("listingsAndReviews");

    // Alte Objekte wegschmeißen...
    const deleteQuery = listingsAndReviewsCollection.deleteMany( { description: "Martins Immobilien #richlife"} );
    console.dir((await deleteQuery).deletedCount + " alte Objekte gelöscht.");


    const meinAirBnBDocument = {
        name: "Mein AirBnb Haus",
        room_type: "Ein riesiges Haus",
        description: "Martins Immobilien #richlife"
    };

    const meinZweitesAirBnBDocument = {
        name: "Meine AirBnb Wohnung",
        room_type: "Maisonette München Zentral, ist klar",
        description: "Martins Immobilien #richlife"
    };

    const meinDrittesAirBnbDocument = {
        name: "Mein AirBnb Zimmer",
        room_type: "Ein kleines aber feines Zimmer",
        description: "Martins Immobilien #richlife"
    }

    await insertDocIntoCollection(meinAirBnBDocument, listingsAndReviewsCollection);
    await insertDocIntoCollection(meinZweitesAirBnBDocument, listingsAndReviewsCollection);
    await insertDocIntoCollection(meinDrittesAirBnbDocument, listingsAndReviewsCollection);

    // Klassisches INSERT INTO
    async function insertDocIntoCollection(doc, collection) {
        const result = await collection.insertOne(doc);
        console.dir(result.insertedCount + " Dokument erfolgreich hinzugefügt");
    }

    // Klassisches SELECT und Ausgabe der Werte eines bestimmten Feldes
    await listingsAndReviewsCollection.find({ description: "Martins Immobilien #richlife" },
        function (err, objects) {
            if (err) return console.log(err);
            console.dir("Dies sind die Raumdetails zu Martins Immobilien:")
            objects.forEach(function (object) {
                console.log(object.room_type);
                mongoose.disconnect();
            })
        });
})