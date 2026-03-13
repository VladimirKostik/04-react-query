import axios from "axios";
import type { Movie } from "../types/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

export const searchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};