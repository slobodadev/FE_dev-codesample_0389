const apiUrl = 'https://api.exchangeratesapi.io'

export const withFetch = (currency = 'USD') => {
    return fetch(`${apiUrl}/latest?base=${currency}`)
        .then(res => {
            if (!res.ok) throw res;
            return res.json()
        });
};
