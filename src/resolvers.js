const iso639Map = require('./iso639Map.json');

module.exports = {
  Query: {
    videoSearch: async (_source, { query }, { dataSources }) => {
      const entries = (await dataSources.tmdbAPI.search(query))
        .filter((result) => result.media_type !== 'person')
        .map((result) => (result.media_type === 'movie' ? result : { ...result, title: result.name, release_date: result.first_air_date }))
        .map((result) => (result.poster_path === null ? result : { ...result, poster_path: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }));

      return {
        entries
      };
    },
    subtitleSearch: async (_source, { tmdbId, language, mediaType }, { dataSources }) => {
      const getImdb = async () =>
        mediaType === 'tv'
          ? dataSources.tmdbAPI
              .movieInformation({ tmdbId })
              .then(({ imdb_id }) => imdb_id)
              .then((imdb_id) => imdb_id.replace('tt', ''))
          : dataSources.tmdbAPI.movieInformation({ tmdbId }).then((imdb_id) => imdb_id.replace('tt', ''));

      const imdbId = await getImdb();
      const entries = await dataSources.openSubtitleAPI.search({ imdbId, language: iso639Map[language] });
      return {
        entries
      };
    }
  }
};
