import axios from 'axios';

// token. Yesle kun email ko user le data access gardi xa bhane tha hunxa.
const API_KEY = 'ded6693e';
// Hamro API ho
const END_POINT = 'https://www.omdbapi.com';

export async function searchMovies(name, page) {
  const result = await axios.get(`/?s=${name}&apikey=${API_KEY}&page=${page}`, {
    baseURL: END_POINT,
  });

  console.info(result.data);
  return result.data;
}
