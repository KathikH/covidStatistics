import { config } from "dotenv";
config();

import { covidDistricts, covidGermany, covidStates } from "./api";
import * as fs from "fs";
import * as path from "path";

if (process.env.TOKEN.length == 0) {
    throw Error("Kein gültiger Token.");
}

let version = "unknown";
fs.readFile(path.join(__dirname, "../package.json"), (err, data) => {
    if (err) throw Error("Die package.json Datei konnte nicht gelesen werden.");
    version = String(JSON.parse(data.toString()).version);
});
