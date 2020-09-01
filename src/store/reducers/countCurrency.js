import { currencyRequest } from '../../workers/currencyCalculator';

const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
const FETCH_FAIL = 'FETCH_FAIL';

const initialState = {
    fail: false,
    base: 'USD',
    result: '',
    listOfCurrency: ['USD'],
    rates: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_CURRENCY:
            const result = () => {
                if (action.countCurrency) {
                    return Math.round(action.amount * action.payload.rates[action.countCurrency])
                }
                return null
            }
            const listOfCurrency = Object.keys(action.payload.rates);
            return {
                ...state,
                fail: false,
                base: action.payload.base,
                listOfCurrency,
                result: result(),
                rates: action.payload.rates
            };
        case FETCH_FAIL:
            return {
                ...state,
                fail: true
            };
        default:
            return state
    }
}

export const updateСurrency = (amount, baseCurrency, countCurrency) => {
    const success = (payload) => ({
        type: UPDATE_CURRENCY,
        payload,
        amount,
        countCurrency
    });
    const fail = (payload) => ({
        type: FETCH_FAIL,
        payload
    });
    return dispatch => {
        currencyRequest(baseCurrency)
        .then(res => dispatch(success(res)))
        .catch(err => err.json().then(res => dispatch(fail(res))))
    }
};
