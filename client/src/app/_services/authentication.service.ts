import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    public authentificate(username: string, password: string, action: string): Observable<any> {
        const user = JSON.stringify({ username: username, password: password });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=utf-8');
        return this.http.post(action, user, { headers: headers })
            .map((response: Response) => {
                const token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                }
                return response.json();
            });
    }

    public logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
