import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public data;
  // options for the chart
  public view: any[] = [700, 400];
  public showXAxis = true;
  public showYAxis = true;
  public showLegend = true;
  public showLabels = true;

  constructor(
    private statsService: StatsService
  ) { }

  ngOnInit() {
    this.data = this.statsService.getStats();
  }

}
