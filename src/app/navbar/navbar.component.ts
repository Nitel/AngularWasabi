import { Component, OnInit } from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';
import {Router} from '@angular/router';
import {ReloadServiceService} from '../reload-service.service';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchField: string;
  listSearch: Array<string> = [];

  constructor(private apiService: WasabiService,  private router: Router, private reS: ReloadServiceService) { }

  ngOnInit() {
  }

  onSearch() {
    firebase.database().ref('/search').push(this.searchField);
    this.router.navigate(['/search/' + this.searchField]);
  }

  focusFunction() {
    this.listSearch = [];
    firebase.database().ref('/search')
      .on('value', (data: DataSnapshot) => {
        data.forEach(element => {
          if (this.listSearch.length > 6) {
            return ;
          }
          this.listSearch.push(element.val());
          return ;
        });
        }
      );
  }

  onKey(event) {
    this.searchField = event.target.value;
  }
}
