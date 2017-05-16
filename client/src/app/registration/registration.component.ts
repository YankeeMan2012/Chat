import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})

export class RegistrationComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    registration() {
        this.loading = true;
        this.authenticationService.authentificate(this.model.username, this.model.password, '/registration')
            .subscribe(result => {
                if (result.success) {
                    this.router.navigate(['/']);
                } else {
                    this.error = result.flash;
                    this.loading = false;
                }
            });
    }
}
