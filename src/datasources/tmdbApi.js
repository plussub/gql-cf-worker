const { RESTDataSource } = require('apollo-datasource-rest')

class TmdbAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.themoviedb.org/3'
  }

  async search(query) {
    return (await this.get('search/multi', {
      query,
      include_adult: false,
      page: 1,
      api_key: process.env.THE_MOVIE_DB_API_KEY
    })).results;
  }
}

module.exports = TmdbAPI
