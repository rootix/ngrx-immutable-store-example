import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { itemReducer } from './reducer';

@NgModule({
   imports: [
      BrowserModule,
      StoreModule.forRoot({ items: itemReducer}, {runtimeChecks: {
        strictStateImmutability: false, // Uncomment for freezed state
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/