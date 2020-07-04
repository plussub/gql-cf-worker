const { gql } = require('apollo-server-cloudflare');

module.exports = gql`    
  type VideoSearchResult {
      entries: [VideoSearchResultEntry]
  }
  
  type VideoSearchResultEntry {
    id: ID!
    "e.g: /IfB9hy4JH1eH6HEfIgIGORXi5h.jpg"
    poster_path: String
    adult: Boolean
    "e.g: Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever."
    overview: String
    "e.g: 2016-10-19"
    release_date: String
    genre_ids: [Int]
    "e.g: Jack Reacher: Never Go Back"
    original_title: String
    "e.g: en"
    original_language: String
    "e.g: Jack Reacher: Never Go Back"
    title: String
    "e.g: /4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
    backdrop_path: String
    "e.g: 26.818468"
    popularity: Float
    "e.g: 201"
    vote_count: Int
    video: Boolean
    "e.g: 4.19"
    vote_average: Float
  }

  type Query {
    videoSearch(query: String!): VideoSearchResult
  }
`;
