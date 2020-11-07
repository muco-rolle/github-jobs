import { API } from 'config';

export const getJobs = async () => {
    const response = await fetch(API + '/positions.json');
    return response.json();
};
