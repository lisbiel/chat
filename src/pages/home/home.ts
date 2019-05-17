import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatService } from '../../app/chat.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats;
  chat;

  constructor(public navCtrl: NavController,
              chatService: ChatService,
              db: AngularFireDatabase)
  {
      this.chat = {
        nickname: "",
        mensagem: ""
      }
      chatService.addChat(this.chat);
  }


  onGoClick(){
    this.navCtrl.push('ChatPage', {
      chatParam: this.chat
    });
  }

}
