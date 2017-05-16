import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import {RegistrationComponent} from './registration/index';
import { AuthGuard } from './_guards/index';
import {ChatComponent} from './chat/index';

const appRoutes: Routes = [
    { path: '', component: ChatComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
