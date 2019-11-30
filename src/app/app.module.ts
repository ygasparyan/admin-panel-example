import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from './charts/charts.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ResourcesModule} from './resources/resources.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    DashboardModule,
    ResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
