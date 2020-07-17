module.exports = {
  Query: {
    videoSearch: async (_source, { query }, { dataSources }) => {
      const entries = (await dataSources.tmdbAPI.search(query))
        .map((result) => result.media_type === 'movie' ? result : {...result, title: result.name, release_date: result.first_air_date})
        .map((result) => (result.poster_path === null ? result : { ...result, poster_path: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }));

      return {
        entries
      };
    }
  }
};
