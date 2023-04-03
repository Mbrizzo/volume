import fetch from "node-fetch";

const getVolumeChanges = async () => {
    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    const data = await response.json();

    const volumeIncreases = {};

    data.forEach((symbol) => {
        const symbolVolume = parseFloat(symbol.volume);
        const symbolSymbol = symbol.symbol;
        const symbolPrevDayVolume = parseFloat(symbol.volume[1]);
        const symbolVolumeChange = (symbolVolume - symbolPrevDayVolume) / symbolPrevDayVolume * 100;
        
       // Verifica se  teve um aumento no volume de negociação 
    if (symbolVolumeChange > 0 && symbolVolumeChange !== Infinity && symbolVolumeChange !== -Infinity && symbolVolumeChange !== NaN) {
        volumeIncreases[symbolSymbol] = symbolVolumeChange;
        console.log(symbolVolumeChange)
      }
    });
}

getVolumeChanges();


//node --experimental-modules arquivo.mjs
