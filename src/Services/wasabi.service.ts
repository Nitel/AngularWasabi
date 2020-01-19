import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class WasabiService {

  constructor(private http: HttpClient) {
  }

  getArtists() {
    return this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/count/album');
  }

  searchArtistOrSong(field: string) {
    return this.http.get('https://wasabi.i3s.unice.fr/search/fulltext/' + field);
  }

  getArtistById(id: string) {
    return this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist_all/id/' + id);
  }

  getArtistByName(name: string) {
    return this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/name/' + name);
  }

  getArtistsByLetter(letter: string, page: string) {
    return this.http.get('https://wasabi.i3s.unice.fr/search/categorie/Artists/lettre/' + letter + '/page/' + page);
  }

  getFieldByPopularity(field: string) {
    return this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/' + field + '/popularity');
  }

  getCountAlbumsField(field: string, type: string) {
    if (type === 'genres') {
      return this.http.get('https://wasabi.i3s.unice.fr/search/count/album/genre/' + field  );
    } else {
      return this.http.get('https://wasabi.i3s.unice.fr/search/count/song/award/' + field  );
    }
  }
}
