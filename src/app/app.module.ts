import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatService } from './chat.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyBP16WMQUogi2D5SlxunxbeDvFk6Dyfh_o",
  authDomain: "chat-ipi.firebaseapp.com",
  databaseURL: "https://chat-ipi.firebaseio.com",
  projectId: "chat-ipi",
  storageBucket: "chat-ipi.appspot.com",
  messagingSenderId: "193922060678",
  appId: "1:193922060678:web:ac6c18228899e68c"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
