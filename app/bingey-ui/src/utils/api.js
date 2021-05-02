import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

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

const getWatchlists = async () => {
  return (await axios.get(`${BASE_URL}/watchlists`)).data;
};

const getWatchlistById = async (id) => {
  return (await axios.get(`${BASE_URL}/watchlists/${id}`)).data;
};

const addTitleToWatchlist = async (id, title) => {
  try {
    return (await axios.put(`${BASE_URL}/watchlists/${id}`, title)).data;
  } catch (error) {
    // handle error
  }
};

export default {
  search,
  createTitle,
  getWatchlists,
  getWatchlistById,
  addTitleToWatchlist,
};
