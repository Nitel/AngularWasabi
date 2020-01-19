import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../model/artist.model';
import {WasabiService} from '../../Services/wasabi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: Artist;

  constructor(private apiService: WasabiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getArtistById(this.route.snapshot.params.id).subscribe((result: Artist) => this.artist = result);
  }

}
