import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourcesModel } from '../models';
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
}
