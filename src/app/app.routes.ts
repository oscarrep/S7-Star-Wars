import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'starships', component: StarshipsComponent, canActivate: [authGuard], children: [
            { path: 'starship-details/:id', component: StarshipDetailsComponent, canActivate: [authGuard] }
        ]
    },
    { path: '**', redirectTo: '/home' }
];