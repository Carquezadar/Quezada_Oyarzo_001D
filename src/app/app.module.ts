import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

import { firebaseConfig } from '../environments/environment';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,

    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: [Drivers.IndexedDB,Drivers.LocalStorage]
    }),AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
