import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListPicturesComponent } from './list-picthures/list-pictures.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: ListPicturesComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
