import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { TestDataService } from './services/test-data.service';
import { AllDataComponent } from './components/all-data/all-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    PageNotFoundComponent,
    AllDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
