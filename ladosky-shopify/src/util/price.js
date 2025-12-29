const EXCHANGE_RATES = 1500;

export function toNaira(priceInUSD) {
    return Math.round(priceInUSD * EXCHANGE_RATES);
}

export function formatNaira(amount){
    return amount.toLocaleString('en-NG')
}