import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services';
import { Observable } from 'rxjs';
import { ResourcesModel } from '../models';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resources$: Observable<ResourcesModel> = this.resourcesService.getResources();
  public displayedColumns: Array<string> = ['id', 'name', 'year', 'color', 'pantone_value'];
  constructor(
    private resourcesService: ResourcesService
  ) { }

  ngOnInit() {
  }

}
