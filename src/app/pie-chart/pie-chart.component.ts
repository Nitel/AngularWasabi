import {Component, Input, OnInit} from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() type: string

  data: any;
  A = 0;
  B = 0;
  C = 0;
  aString = 'Platinum';
  bString = 'Gold';
  cString = 'Diamond';

  constructor(private api: WasabiService) {
  }

  ngOnInit() {
    // tslint:disable-next-line:no-conditional-assignment
    if (this.type === 'genres') {
      this.aString = 'Pop';
      this.bString = 'Rock';
      this.cString = 'Jazz';
    }
    this.getValuesPie();
  }
  getValuesPie() {
      this.api.getCountAlbumsField(this.aString, this.type).subscribe(
        (result: any) => {
          this.A = result.count;
        });
      this.api.getCountAlbumsField(this.bString, this.type).subscribe(
        (result: any) => {
          this.B = result.count;
        });
      this.api.getCountAlbumsField(this.cString, this.type).subscribe(
        (result: any) => {
          this.C = result.count;
        });
  }

  update(event: Event) {
    this.data = {
      labels: [this.aString, this.bString, this.cString],
      datasets: [
        {
          data: [this.A, this.B, this.C],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }


}
