import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const formatStringForSearch = (value) => {
  return value.toLowerCase().replace(' ', '+');
};

const searchResultCache = {};

const makeSearchRequestCreator = () => {
  let cancelToken;

  return async (queryString) => {
    queryString = formatStringForSearch(queryString);

    if (cancelToken) {
      cancelToken.cancel();
    }

    cancelToken = axios.CancelToken.source();

    try {
      if (searchResultCache[queryString]) {
        return searchResultCache[queryString];
      }

      const res = await axios.get(`${BASE_URL}/?q=${queryString}`, {
        cancelToken: cancelToken.token,
      });

      const result = res.data.results;

      searchResultCache[queryString] = result;

      return result;
    } catch (error) {
      if (!axios.isCancel(error)) {
        // handle error
      }
    }
  };
};

const search = makeSearchRequestCreator();

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

const createWatchlist = async (watchlist) => {
  try {
    return (await axios.post(`${BASE_URL}/watchlists`, watchlist)).data;
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
  createWatchlist,
};
