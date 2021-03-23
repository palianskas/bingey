import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const formatStringForSearch = (value) => {
  return value.toLowerCase().replace(' ', '+');
};

const search = async (queryString) => {
  queryString = formatStringForSearch(queryString);
  try {
    return (await axios.get(`${BASE_URL}/search?q=${queryString}`)).data;
  } catch (error) {
    // handle error
  }
};

const createTitle = async (title) => {
  try {
    return (await axios.post(`${BASE_URL}/titles`, title)).data;
  } catch (error) {
    // handle error
  }
};

export { search, createTitle };
