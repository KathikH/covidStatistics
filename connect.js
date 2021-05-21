const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/CovidStatistics?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});