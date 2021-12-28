import { Genre, SpokenLanguage } from "../stateModel/moviedetailModels";

export interface requiredMovieDetail_resp {
  backdrop_path?:         string;
  genres?:                Genre[];
  homepage?:              string;
  id?:                    number;
  imdb_id?:               string;
  original_language?:     string;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  release_date?:          Date;
  revenue?:               number;
  runtime?:               number;
  spoken_languages?:      SpokenLanguage[];
  title?:                 string;
  video?:                 boolean;
}