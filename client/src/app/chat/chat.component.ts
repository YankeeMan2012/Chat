import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from '../_services/index';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
    messages = [];
    connection;
    model: any = {};

    constructor(private chatService: ChatService) {
    }

    public sendMessage(): void {
        this.chatService.sendMessage({user: this.model.user, text: this.model.message});
    }

    ngOnInit(): void {
        this.model.user = JSON.parse(localStorage.getItem('currentUser')).username;
        this.connection = this.chatService.getMessages().subscribe(message => {
            this.messages.push({user: this.model.user, text: message.text});
            this.model.message = '';
        });
    }

    ngOnDestroy(): void {
        this.connection.unsubscribe();
    }
}
