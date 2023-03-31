import fetch from "node-fetch";

const getVolumeChanges = async () => {
    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    const data = await response.json();

    const volumeIncreases = {};
}  