import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {EbizMaterialModule} from './ebiz-material/ebiz-material.module';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './component/my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';

import {CkeditorModule} from 'ngx-ckeditor5/lib/src';
import {CkeditorComponent} from './component/ckeditor/ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyNavComponent,
    CkeditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EbizMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    CkeditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
