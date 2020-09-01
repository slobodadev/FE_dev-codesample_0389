import { withFetch } from './config';
 
export const currencyRequest = (payload) => {
    return withFetch(payload);
};
