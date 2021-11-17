const apikey = "d61ca0998c8a152c6556e310a4a8e4db";

export const endpoints = {
    API_URL: "https://api.themoviedb.org/3/",
    image: "https://image.tmdb.org/t/p/original",

    //Em alta
    trendingTV: "trending/tv/day?api_key=" + apikey,
    trendingMovie: "trending/movie/day?api_key=" + apikey,
    trendingPerson: "trending/person/day?api_key=" + apikey,

    //Detalhes
    movieDetails: (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    personDetails: (id) =>
        `https://api.themoviedb.org/3/person/${id}?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    tvDetails: (id) =>
        `https://api.themoviedb.org/3/tv/${id}?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,

    //Pesquisa uma categoria especifica
    searchMovie: (queryParams) =>
        `search/movie/?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR&${queryParams}`,
    searchTV: (queryParams) =>
        `search/tv/?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR&${queryParams}`,
    searchPerson: (queryParams) =>
        `search/person/?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR&${queryParams}`,

    //Busca os trailers
    movieVideo: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    tvVideo: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,

    //Elenco
    movieCast: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    tvCast: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,

    //Similar
    movieSimilar: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR&page=1`,

    tvSimilar: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR&page=1`,

    // Series e Filmes que as pessoas participaram
    personMoviesCredits: (id) =>
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    personTvsCredits: (id) =>
        `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR`,
    // Movie Provider
    movieProvider: (id) => `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=d61ca0998c8a152c6556e310a4a8e4db`
};
