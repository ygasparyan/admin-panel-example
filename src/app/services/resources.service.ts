import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceModel, ResourcesModel } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private http: HttpClient
  ) { }

  public getResources(): Observable<ResourcesModel> {
    return this.http.get<ResourcesModel>(`${environment.apiUrl}unknown`);
  }

  public getSingleResource(id: number): Observable<{data: ResourceModel}> {
    return this.http.get<{data: ResourceModel}>(`${environment.apiUrl}unknown/${id}`);
  }

  public updateResource(resource: ResourceModel) {
    return this.http.put(`${environment.apiUrl}unknown/${resource.id}`, resource);
  }
}
