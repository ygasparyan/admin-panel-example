import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule
  ]
})
export class ResourcesModule { }
