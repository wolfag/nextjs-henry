import axios from 'axios';

const fakeApi = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (limit = 10) => {
  try {
    const response = await axios.get(`${fakeApi}/posts`, {
      params: { _limit: limit },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostIds = async () => {
  const posts = await getPosts();
  return posts.map(({ id }) => ({ params: { id: `${id}` } }));
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${fakeApi}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
