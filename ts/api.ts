import axios from "axios";

export interface covidMeta {
    source: string;
    contact: string;
    info: string;
    lastUpdate: string;
    lastCheckedForUpdate: string;
}

export interface covidGermanyResponse {
    cases: number;
    deaths: number;
    recovered: number;
    weekIncidence: number;
    casesPer100k: number;
    casesPerWeek: number;
    delta: {
        cases: number;
        deaths: number;
        recovered: number;
    };
    r: {
        value: number;
        date: string;
    };
    meta: covidMeta;
}

export const covidGermany = async (): Promise<{
    ok: boolean;
    data?: covidGermanyResponse;
}> => {
    let out: {
        ok: boolean;
        data?: covidGermanyResponse;
    } = {
        ok: false,
    };

    out = await axios
        .get("https://api.corona-zahlen.org/germany")
        .then((r) => {
            if (r.status == 200) return {ok: true, data: r.data};
            else return {ok: false};
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return {ok: false};
        });

    return out;
};

interface covidDisctrictResponse {
    ags: string;
    name: string;
    county: string;
    population: number;
    cases: number;
    deaths: number;
    casesPerWeek: number;
    deathsPerWeek: number;
    recovered: number;
    weekIncidence: number;
    casesPer100k: number;
    delta: {
        cases: number;
        deaths: number;
        recovered: number;
    };
}

interface covidDisctrictsResponse {
    data: { [key: string]: covidDisctrictResponse };
    meta: covidMeta;
}

export const covidDistricts = async (): Promise<{
    ok: boolean;
    data?: covidDisctrictsResponse;
}> => {
    const response: {
        ok: boolean;
        data?: covidDisctrictsResponse;
    } = await axios
        .get("https://api.corona-zahlen.org/districts")
        .then((r) => {
            if (r.status === 200) return {ok: true, data: r.data};
            else return {ok: false};
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return {ok: false};
        });

    return response;
};

interface covidStateResponse {
    id: 1;
    name: string;
    population: number;
    cases: number;
    deaths: number;
    casesPerWeek: number;
    deathsPerWeek: number;
    recovered: number;
    abbreviation: string;
    weekIncidence: number;
    casesPer100k: number;
    delta: {
        cases: number;
        deaths: number;
        recovered: number;
    };
}

interface covidStatesResponse {
    data: { [key: string]: covidStateResponse };
    meta: covidMeta;
}

export const covidStates = async (): Promise<{
    ok: boolean;
    data?: covidStatesResponse;
}> => {
    const response: {
        ok: boolean;
        data?: covidStatesResponse;
    } = await axios
        .get("https://api.corona-zahlen.org/states")
        .then((r) => {
            if (r.status === 200) return {ok: true, data: r.data};
            else return {ok: false};
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return {ok: false};
        });

    return response;
};