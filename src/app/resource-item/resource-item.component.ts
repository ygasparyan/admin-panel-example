import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResourcesService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ResourceModel } from '../models';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent implements OnInit, OnDestroy {
  public resource: ResourceModel;
  public resourceForm: FormGroup;
  public currentYear: number = (new Date()).getFullYear();
  public formIsChanged: boolean = false;
  private resourceId: number;
  private formSubscription: Subscription;

  constructor(
    private resourcesService: ResourcesService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.resourceId = this.route.snapshot.params.id;
    this.fetchResource(this.resourceId);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
    this.formIsChanged && this.resourceForm.valid && this.saveResource();
  }

  public saveResource(): void {
    const res = this.resourceForm.getRawValue();
    this.resourcesService.updateResource(res).subscribe(response => {
      this.showSnackbar('Resource saved!');
      this.formIsChanged = false;
      Object.assign(this.resource, response);
    });
  }

  public cancelChanges(): void {
    this.resourceForm.reset(this.resource);
    this.formIsChanged = false;
  }

  private fetchResource(id: number): void {
    this.resourcesService.getSingleResource(id).pipe(
      map(res => res.data)
    ).subscribe(
      res => {this.resource = res; this.createForm(res); }
    );
  }

  private createForm(resource: ResourceModel): void {
    this.resourceForm = new FormGroup({
      name: new FormControl(this.resource.name, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      year: new FormControl(this.resource.year, [Validators.required, Validators.min(1950), Validators.max(this.currentYear)]),
      color: new FormControl(this.resource.color, [Validators.required]),
      pantone_value: new FormControl(this.resource.pantone_value, [Validators.required])
  });
    this.checkForChanges();
  }

  private checkForChanges(): void {
    this.formSubscription = this.resourceForm.valueChanges.subscribe(() => this.formIsChanged = true);
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'close', {
      duration: 2000
    });
  }
}
