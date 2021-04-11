import api from './api';

const GetCharactersApi = async (page) => {
  try {
    const response = await api.get(`/people/?page=${page}`);

    const { count, next, previous, results } = response.data;

    return {
      count,
      urlNextPage: next,
      urlPrevious: previous,
      characters: results
    };
  } catch(err) {
    alert(err);
  }
}

export default GetCharactersApi;