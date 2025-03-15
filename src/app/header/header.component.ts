import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../auth/login/login.component';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterModule]
})
export class HeaderComponent {
  private router = inject(Router);
  sessionService = inject(SessionService);
  starshipsActive: boolean = false;
  homeActive: boolean = true;
  showHeader: boolean = true;
  randomColor: string = '';
  @Input() app!: AppComponent;
  @Input() login!: LoginComponent;

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.router.url.includes('/login') || this.router.url.includes('/logout') || this.router.url.includes('/signup')) this.showHeader = false;
      else this.showHeader = true;
    });
    document.documentElement.style.setProperty('--border-color', this.randomizeColor());
  }

  showHome() { this.router.navigate(['home']); }

  showStarships() { this.router.navigate(['starships']); }

  showLogin() { this.router.navigate(['login']); }

  showLogOut() { this.router.navigate(['logout']); }

  showSignup() { this.router.navigate(['signup']); }

  randomizeColor(): string {
    const colors = ['red', 'rgb(33, 111, 255)', 'rgb(0, 189, 0)', 'rgb(255, 213, 73)', 'rgb(187, 49, 187)'];
    return this.randomColor = colors[Math.floor(Math.random() * colors.length)];
  }

}