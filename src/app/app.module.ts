import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {EbizMaterialModule} from './ebiz-material/ebiz-material.module';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {CkeditorModule} from 'ngx-ckeditor5/lib/src';
import {CkeditorComponent} from './component/ckeditor/ckeditor.component';
import {NavComponent} from './component/nav/nav.component';
import { MaterialNavComponent } from './component/material-nav/material-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeDetailComponent } from './component/home-detail/home-detail.component';
import { PircureRotateComponent } from './component/pircure-rotate/pircure-rotate.component';
import { HomeOneBlockComponent } from './component/home-one-block/home-one-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CkeditorComponent,
    NavComponent,
    MaterialNavComponent,
    HomeDetailComponent,
    PircureRotateComponent,
    HomeOneBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EbizMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    CkeditorModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
