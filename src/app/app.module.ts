import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {MaterialTimestampAdapterModule} from 'material-timestamp-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'Datepicker with Timestamps sample'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    // MatNativeDateModule,
    MaterialTimestampAdapterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
