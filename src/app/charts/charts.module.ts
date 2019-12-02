import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    MatDividerModule
  ]
})
export class ChartsModule { }
