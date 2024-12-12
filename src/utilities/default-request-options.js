const defaultFilmOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { include_adult: 'false', language: 'it-IT', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDllZDIwNzhiNGI0NzUxMjI0YzU4OWI2YjE5NzAzOSIsIm5iZiI6MTczMzk5ODg0OC4wODA5OTk5LCJzdWIiOiI2NzVhYjkwMDg5NjUzMGYyMGI5ZjNhMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tYEchyGbfeNL6g9FfKAsa5KLyxjnkZa_ogG_2_IZUJk',
  },
};

const defaultTvSeriesOptions = {
  ...defaultFilmOptions,
  url: 'https://api.themoviedb.org/3/search/tv',
};

export { defaultFilmOptions, defaultTvSeriesOptions };
