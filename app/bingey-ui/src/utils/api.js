import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const formatStringForSearch = (value) => {
  return value.toLowerCase().replace(' ', '+');
};

export const search = async (queryString) => {
  queryString = formatStringForSearch(queryString);
  try {
    return (await axios.get(`${BASE_URL}/search?q=${queryString}`)).data;
  } catch (error) {
    // handle error
  }
};

export const createTitle = async (title) => {
  try {
    return (await axios.post(`${BASE_URL}/titles`, title)).data;
  } catch (error) {
    // handle error
  }
};
