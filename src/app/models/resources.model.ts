import { ResourceModel } from './resource.model';

export interface ResourcesModel {
  data: Array<ResourceModel>;
  total_pages: number;
  per_page: number;
  total: number;
  page: number;

}
