import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllDataComponent } from './components/all-data/all-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'data', component: DataListComponent },
  { path: 'all', component: AllDataComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
