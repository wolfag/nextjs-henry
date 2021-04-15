import axios from 'axios';
const fakeApi = `https://api.chucknorris.io`;

export const getRandomJoke = async () => {
  try {
    const response = await axios.get(`${fakeApi}/jokes/random`);
    return response.data;
  } catch (error) {
    console.error({ error });
  }
};
