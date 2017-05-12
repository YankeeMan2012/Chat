import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from '../shared/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
    messages = [];
    connection;
    message;

    constructor(private chatService: ChatService) {
    }

    public sendMessage(): void {
        this.chatService.sendMessage(this.message);
        this.message = '';
    }

    ngOnInit(): void {
        this.connection = this.chatService.getMessages().subscribe(message => {
            this.messages.push(message);
        });
    }

    ngOnDestroy(): void {
        this.connection.unsubscribe();
    }
}
