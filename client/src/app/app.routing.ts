import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import {ChatComponent} from './chat/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: ChatComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
