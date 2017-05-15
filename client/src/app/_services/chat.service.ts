import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
    private socket;

    public sendMessage(message) {
        this.socket.emit('add-message', message);
    }

    public getMessages(): Observable<any> {
        return new Observable(observer => {
            this.socket = io('http://localhost:5000/');
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
}
