import {Artist} from './artist.model';
import {Song} from './song.model';

export interface Album {
  _id: string;
  songs: Song[];
  artist: Artist;
  title: string;
  name: string;
  genre: string;
  length: string;
  publicationDate: string;
  urlAlbum: string;
  urlAllmusic: string;
  urlAmazon: string;
  urlDiscogs: string;
  urlITunes: string;
  urlMusicBrainz: string;
  urlSpotify: string;
  urlWikipedia: string;
  urlDeezer: string;
  barcode: string;
  country: string;
  dateRelease: string;
  disambiguation: string;
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
  rdf: string;
}
