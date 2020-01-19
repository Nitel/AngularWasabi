import { Component, OnInit } from '@angular/core';
import {Artist} from '../../model/artist.model';
import {WasabiService} from '../../Services/wasabi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadServiceService} from '../reload-service.service';
import {SearchResultModel} from '../../model/searchResult.model';
import {Result} from '../../model/result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  list: Array<Result> = [];
  field: string;

  // tslint:disable-next-line:max-line-length
  constructor(private wasabiService: WasabiService,  private router: Router, private route: ActivatedRoute, private reS: ReloadServiceService) {
  }


  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.field = this.route.snapshot.params.field;
      this.Search();
    });
    this.route.params.subscribe(routeParams => {
      this.field = this.route.snapshot.params.field;
      this.Search();
    });

  }

  Search() {
    this.list = [];
    this.wasabiService.searchArtistOrSong(this.route.snapshot.params.field).subscribe(
      (result: Array<any>) =>
        result.forEach( element =>
          this.list.push(new Result(element.name, element.picture))));

  }

}
