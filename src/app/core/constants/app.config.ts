import {environment} from '@env';

export const API_URL = environment.url;

export const language = {
    default: 'en',
    supported: ['en', 'ru', 'hy']
};
