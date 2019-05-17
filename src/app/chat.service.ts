import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

@Injectable
export class ChatService{
    constructor (private db: AngularFireDatabase) {

    }
    chats = [
    
    ];

    addChat (chat) {
        this.db.list("/chats/");
        //this.chats.push(chat);
    }

    fetchChats (categoria) {
        return this.db.list("/chats/"+categoria+"/");
    }
}