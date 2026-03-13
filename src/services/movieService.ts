import axios from "axios";
import type { Movie } from "../types/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

// интерфейс ответа API
interface MoviesResponse {
  results: Movie[];
}

// поиск фильмов
export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
};