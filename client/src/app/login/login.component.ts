﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.authentificate(this.model.username, this.model.password, '/login')
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
