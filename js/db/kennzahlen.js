const mongoose = require("mongoose");
const {Schema} = require("mongoose");

mongoose.connect(`mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/covidStatistics?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true} )

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", async function () {

    let kennzahlen = db.collection("kennzahlen");

    db.get("/getKennzahlen", function (req, res) {
        const kennzahlen = db.collection("kennzahlen");
        kennzahlen.find({}, function (err, allDetails) {
            if (err) {
                console.log(err);
            } else {
                res.render("index", { details: allDetails })
            }
        })
    })

})