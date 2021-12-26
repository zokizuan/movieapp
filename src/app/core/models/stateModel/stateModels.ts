import { Result } from "../responseModel";

export interface movieLists_resp {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export type MovieType = "popular" | "top_rated";