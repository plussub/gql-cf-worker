const { RESTDataSource } = require('apollo-datasource-rest')

class OpensubtitleAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rest.opensubtitles.org/search'
  }

  async search(query) {
    // fetch('https://rest.opensubtitles.org/search/imdbid-0110912/sublanguageid-eng', {headers: {'X-User-Agent':'TemporaryUserAgent'}}).then(r => r.json())
    return null
  }
}

module.exports = OpensubtitleAPI
