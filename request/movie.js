import client from './client';

export const getMovies = async (category) => {
  const { data } = await client.get('movies', {
    params: { filter: { where: { category } } },
  });

  return data;
};
