import { Routes } from '@angular/router';
import { Login } from '../modules/login/login';
import { Dashboard } from '../modules/dashboard/dashboard';
import { AuthGuard } from '../core/guard/auth.guard';

export const routes: Routes = [

    {
        path: '',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];
