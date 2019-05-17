import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService } from '../../app/chat.service';
import { get } from 'http';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chat;
  textChat = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.chat = navParams.get("chatParam");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendM(){
    this.textChat += this.chat.nickname + " : " + this.chat.mensagem + "\n";
    this.chat.mensagem = "";
  }

}
