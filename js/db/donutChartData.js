const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://lki:N3KQR1LPRKWLUumU@clustercovidstatistics.bbrnr.mongodb.net/covidStatistics?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await findDonutChart(client);

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);


async function findDonutChart(client) {

    // See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#find for the find() docs
    const cursor = client.db("covidStatistics").collection("donutChart").find({});

    // to do the iterating: https://mongodb.github.io/node-mongodb-native/3.3/api/Cursor.html#forEach
    const results = await cursor.toArray();

    // Process the results
    if (results.length > 0) {
        results.forEach((result, i) => {

            console.log(result);
            // Here you could build your html or put the results in some other data structure you want to work with
        });
    } else {
        console.log(`No customers found`);
    }
}