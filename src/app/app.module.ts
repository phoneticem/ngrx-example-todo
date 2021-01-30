import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule, StoreRootModule} from "@ngrx/store";
import {reducer} from "./todo/reducers/todos.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forFeature('todos', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}