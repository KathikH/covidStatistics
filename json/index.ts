import { config } from "dotenv";
config();

import { covidDistricts, covidGermany, covidStates } from "./api";
import * as fs from "fs";
import * as path from "path";

const client = new Discord.Client();

if (process.env.TOKEN.length == 0) {
    throw Error("Hab kein Token");
}

let version = "unknown";
fs.readFile(path.join(__dirname, "../package.json"), (err, data) => {
    if (err) throw Error("Kann package.json nicht lesen");
    version = String(JSON.parse(data.toString()).version);
});

client.on("message", async (message) => {
    const messageContent = message.content.trim().toLowerCase();

    if (messageContent.startsWith("corona")) {
        const args = messageContent.split(" ");
        if (args.length == 1) {
            const embed = new Discord.MessageEmbed();
            embed.setTitle("Der :sparkles:Corona Bot:sparkles:");
            embed.addField(
                "Befehle:",
                multiLine(
                    toCode("corona de") + " Gibt Infos für Deutschland aus",
                    toCode("corona lk ...") + " Gibt Infos für einen Landkreis aus",
                    toCode("corona bl ...") + " Gibt Infos für ein Bundesland aus"
                )
            );
            embed.setFooter("Version: " + version);
            embed.setURL("https://github.com/markxoe/covid-bot");
            embed.setDescription("Einfacher Bot zum Anzeigen von Corona Daten");
            embed.setColor("#ff3333");
            message.channel.send(embed);
        } else if (args[1] === "de") {
            const apiCall = await covidGermany();
            if (apiCall.ok && apiCall.data) {
                message.channel.send(
                    makeEmbed({
                        delta: {
                            cases: apiCall.data.delta.cases,
                            deaths: apiCall.data.delta.deaths,
                            recovered: apiCall.data.delta.recovered,
                        },
                        time: new Date(apiCall.data.meta.lastUpdate),
                        contact: apiCall.data.meta.contact,
                        rwert: {
                            name: "R Wert",
                            value:
                                toCode(apiCall.data.r.value) +
                                " (" +
                                new Date(apiCall.data.r.date).toLocaleDateString() +
                                ")",
                        },
                        locationInfo: {
                            name: "Land",
                            value: multiLine("Deutschland"),
                        },
                        present: {
                            cases: apiCall.data.cases,
                            deaths: apiCall.data.deaths,
                            recovered: apiCall.data.recovered,
                        },
                        title: "Deutschland",
                        weekIncidence: apiCall.data.weekIncidence,
                        source: apiCall.data.meta.source,
                    })
                );
            } else message.reply("Es ist ein Fehler aufgetreten, sorry!");
        } else if (args[1] === "bl") {
            const apiCall = await covidStates();
            if (apiCall.ok && apiCall.data) {
                const stateKey = Object.keys(apiCall.data.data).find((i) =>
                    apiCall.data.data[i].name.toLowerCase().includes(args[2])
                );
                if (stateKey !== undefined) {
                    const state = apiCall.data.data[stateKey];

                    message.channel.send(
                        makeEmbed({
                            delta: {
                                cases: state.delta.cases,
                                deaths: state.delta.deaths,
                                recovered: state.delta.recovered,
                            },
                            contact: apiCall.data.meta.contact,
                            locationInfo: {
                                name: "Bundesland",
                                value: multiLine(
                                    state.name,
                                    toCode(state.population) + " Einwohner"
                                ),
                            },
                            present: {
                                cases: state.cases,
                                deaths: state.deaths,
                                recovered: state.recovered,
                            },
                            time: new Date(apiCall.data.meta.lastUpdate),
                            title: state.name,
                            weekIncidence: state.weekIncidence,
                            source: apiCall.data.meta.source,
                        })
                    );
                } else {
                    message.channel.send("Sorry, das habe ich nicht gefunden!");
                }
            } else message.reply("Es ist ein Fehler aufgetreten, sorry!");
        } else if (args[1] === "lk") {
            const apiCall = await covidDistricts();
            if (apiCall.ok && apiCall.data) {
                const districtNumber = Object.keys(apiCall.data.data).find((i) =>
                    apiCall.data.data[i].name.toLowerCase().includes(args[2])
                );
                if (districtNumber !== undefined) {
                    const district = apiCall.data.data[districtNumber];

                    message.channel.send(
                        makeEmbed({
                            delta: {
                                cases: district.delta.cases,
                                deaths: district.delta.deaths,
                                recovered: district.delta.recovered,
                            },
                            contact: apiCall.data.meta.contact,
                            locationInfo: {
                                name: "Stadt",
                                value: multiLine(
                                    district.name,
                                    toCode(district.population) + " Einwohner"
                                ),
                            },
                            present: {
                                cases: district.cases,
                                deaths: district.deaths,
                                recovered: district.recovered,
                            },
                            time: new Date(apiCall.data.meta.lastUpdate),
                            title: district.name,
                            weekIncidence: district.weekIncidence,
                            source: apiCall.data.meta.source,
                        })
                    );
                } else {
                    message.channel.send("Sorry, das habe ich nicht gefunden!");
                }
            } else message.reply("Es ist ein Fehler aufgetreten, sorry!");
        } else {
            message.channel.send(
                multiLine(
                    "Was laberst du? Gib doch mal " +
                    toCode("corona") +
                    " ein, um mich zu verstehen",
                    "",
                    "*sad bot noises*"
                )
            );
        }
    }
});

client.once("ready", () => {
    console.log("Discord Bot ist gestartet!");
    client.user.setPresence({
        activity: { name: "corona", type: "LISTENING" },
    });
});

client.login(process.env.TOKEN);