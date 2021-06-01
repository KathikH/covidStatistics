import axios from "axios";
import {GermanyCasesHistoryResponse} from "../ts/src/responses/germany";
import express from "express";
import path from "path";
const cache = require("express-redis-cache")({
    expire: 1800,
    host: process.env.REDIS_URL,
});

Date.prototype.toJSON = function () {
    return this.toISOString();
};

const app = express();
const port = 3000;

app.use("/docs", express.static(path.join(__dirname, "docs")));
app.use(cors());
app.use(compression());

export function covidIncidences(){

axios
        .get("https://api.corona-zahlen.org/germany/history/incidence")
        .then((r) => {console.log(data, r);
            if (r.status === 200) return {ok: true, data: r.data};
            else return {ok: false};

        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return {ok: false};
        });

    return out;

}

app.get(
    "/germany/history/incidence",
    queuedCache(),
    cache.route(),
    async (req, res) => {
        const response = await GermanyCasesHistoryResponse();
        res.json(response);
    }
);