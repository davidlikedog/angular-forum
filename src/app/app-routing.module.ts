import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {CkeditorComponent} from './component/ckeditor/ckeditor.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomeComponent', pathMatch: 'full' },
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'Ckeditor', component: CkeditorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
