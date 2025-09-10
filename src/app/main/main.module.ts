import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CcasLiveComponent } from './ccas-live/ccas-live.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { CompressorsComponent } from './compressors/compressors.component';
import { EStatusComponent } from './e-status/e-status.component';
import { Compressor1Component } from './compressor1/compressor1.component';
import { Compressor2Component } from './compressor2/compressor2.component';
import { Compressor3Component } from './compressor3/compressor3.component';
import { Compressor4Component } from './compressor4/compressor4.component';
import { Compressor5Component } from './compressor5/compressor5.component';
import { Compressor6Component } from './compressor6/compressor6.component';

@NgModule({
  declarations: [
    CcasLiveComponent,
    DashboardComponent,
    OverviewComponent,
    CompressorsComponent,
    EStatusComponent,
    Compressor1Component,
    Compressor2Component,
    Compressor3Component,
    Compressor4Component,
    Compressor5Component,
    Compressor6Component,
  ],
  imports: [CommonModule, MainRoutingModule, NgApexchartsModule],
})
export class MainModule {}
