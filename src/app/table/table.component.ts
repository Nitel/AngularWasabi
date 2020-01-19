import {Component, OnInit} from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';
import {Observable} from 'rxjs';
import {Album} from '../../model/album.model';
import {Artist} from '../../model/artist.model';
import {Router} from '@angular/router';
import {LightArtist} from '../../model/lightArtist.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  artists: LightArtist[] = [];
  page = 1;
  pageSize = 10;
  names: string[] = [];
  letter = '';

  constructor(private wasabiService: WasabiService,  private router: Router) {
  }

  ngOnInit() {
    this.getArtistsByLetter('A');
  }

  getArtists() {
    this.wasabiService.getArtists().subscribe((result: Artist[]) => this.artists = result);
  }

  getArtistsByLetter(letter: string) {
    this.letter = letter;
    this.wasabiService.getArtistsByLetter(letter, this.page.toString()).subscribe((result: any) => this.artists = result.artists);
  }

  toArtist(id: string) {
    this.router.navigate(['/artist/' + id]);
  }

  onSearch() {
    this.getArtistsByLetter(this.letter);
  }

}
