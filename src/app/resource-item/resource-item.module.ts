import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceItemComponent } from './resource-item.component';
import { ResourceItemRoutingModule } from './resource-item-routing.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResourceItemComponent],
  imports: [
    CommonModule,
    ResourceItemRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class ResourceItemModule { }
