import {Component, Input, OnInit} from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Artist} from '../../model/artist.model';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent implements OnInit {
  Field: string;
  List: any[] = [];

  constructor(private wasabiService: WasabiService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.onSearch();
    });
    this.route.params.subscribe(routeParams => {
      this.onSearch();
    });
  }


  onSearch() {
    this.wasabiService.getFieldByPopularity(this.route.snapshot.params.field).subscribe(
      (result: any[]) => {
        if (this.route.snapshot.params.field === 'city') {
          result.forEach(element => {
            element._id = element.city;
          } );
        }
        this.List = result;
      });
  }
}
