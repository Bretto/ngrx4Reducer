import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(fromRoot.reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
