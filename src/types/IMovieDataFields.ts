import {GengreTypesEnum} from '@/types/GengreTypesEnum';

export interface IMovieDataFields {
  name: string;
  rating: number;
  filmDirector: string;
  duration: number;
  year: number;
  description: string;
  gengre: Array<GengreTypesEnum>;
  posterPath: string;
}
