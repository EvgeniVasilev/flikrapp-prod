import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListPicturesComponent } from './list-picthures/list-pictures.component';
import { FlikrService } from './shared/flikr.service';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule, NgModel } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPicturesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlikrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
