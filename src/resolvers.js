module.exports = {
  Query: {
    videoSearch: async (_source, { query }, { dataSources }) => {
      const entries = await dataSources.tmdbAPI.search(query);
      return {
        entries
      };
    }
  }
}
