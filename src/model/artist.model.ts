import {Album} from './album.model';

export interface Artist {
  _id: string;
  name: string;
  type: string;
  albums: Album[];
  genres: string[];
  labels: string;
  recordLabel: string;
  gender: string;
  disambiguation: string;
  endArea: string;
  id: string;
  lifeSpan: string;
  ended: boolean;
  begin: string;
  end: string;
  location: string;
  city: string;
  country: string;
  language: string;
  cover: string;
  big: string;
  medium: string;
  small: string;
  standard: string;
  xl: string;
  upc: string;
  deezerFans: string;
  explicitLyrics: string;
}
