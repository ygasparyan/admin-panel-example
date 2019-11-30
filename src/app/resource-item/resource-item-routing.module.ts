import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceItemComponent } from './resource-item.component';

const routes: Routes = [
  { path: ':id', component: ResourceItemComponent },
  { path: '**', redirectTo: '/resources' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceItemRoutingModule { }
