import {Album} from './album.model';

export interface Song {
  _id: string;
  album: Album;
  lyrics: string;
  name: string;
  title: string;
}
