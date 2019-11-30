import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceItemComponent } from './resource-item.component';
import { ResourceItemRoutingModule } from './resource-item-routing.module';

@NgModule({
  declarations: [ResourceItemComponent],
  imports: [
    CommonModule,
    ResourceItemRoutingModule
  ]
})
export class ResourceItemModule { }
