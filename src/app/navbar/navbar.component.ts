import { Component, OnInit } from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';
import {Router} from '@angular/router';
import {ReloadServiceService} from '../reload-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchField: string;

  constructor(private apiService: WasabiService,  private router: Router, private reS: ReloadServiceService) { }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(['/search/' + this.searchField]);
  }

  onKey(event) {this.searchField = event.target.value;}
}
