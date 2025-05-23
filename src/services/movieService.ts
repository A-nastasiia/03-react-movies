import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
const API_KEY = import.meta.env.VITE_API_KEY;

interface FetchMoviesParams {
  query: string;
}

interface MovieResponse {
  results: Movie[];
}

export async function fetchMovies({
  query,
}: FetchMoviesParams): Promise<Movie[]> {
  const response = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });

  return response.data.results;
}