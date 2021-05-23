import axios from "axios";

export interface covidMeta {
    source: string;
    contact: string;
    info: string;
    lastUpdate: string;
    lastCheckedForUpdate: string;
}

export interface coivdGermanyResponse {
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
    data?: coivdGermanyResponse;
}> => {
    let out: {
        ok: boolean;
        data?: coivdGermanyResponse;
    } = {
        ok: false,
    };

    out = await axios
        .get("https://api.corona-zahlen.org/germany")
        .then((r) => {
            if (r.status == 200) return { ok: true, data: r.data };
            else return { ok: false };
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return { ok: false };
        });

    return out;
};

interface coviddisctrictResponse {
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
interface coviddisctrictsResponse {
    data: { [key: string]: coviddisctrictResponse };
    meta: covidMeta;
}

export const covidDistricts = async (): Promise<{
    ok: boolean;
    data?: coviddisctrictsResponse;
}> => {
    const response: {
        ok: boolean;
        data?: coviddisctrictsResponse;
    } = await axios
        .get("https://api.corona-zahlen.org/districts")
        .then((r) => {
            if (r.status === 200) return { ok: true, data: r.data };
            else return { ok: false };
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return { ok: false };
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
            if (r.status === 200) return { ok: true, data: r.data };
            else return { ok: false };
        })
        .catch((err) => {
            console.log("Error calling API:", err);
            return { ok: false };
        });

    return response;
};