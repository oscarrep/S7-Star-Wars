import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'starships', component: StarshipsComponent, children: [
            { path: 'starship-details/:id', component: StarshipDetailsComponent }
        ]
    },
    { path: '**', redirectTo: '/home' }
];