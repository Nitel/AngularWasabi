import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableComponent} from './table/table.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AlbumComponent} from './album/album.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PopularityComponent } from './popularity/popularity.component';
import { ChartsComponent } from './charts/charts.component';
import {ChartModule} from 'primeng';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const appRoutes: Routes = [
  { path: 'artistes', component: TableComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'search/:field', component: SearchResultComponent },
  { path: 'popularity/:field', component: PopularityComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AlbumComponent,
    NavbarComponent,
    HomeComponent,
    ArtistComponent,
    SearchResultComponent,
    PopularityComponent,
    ChartsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
