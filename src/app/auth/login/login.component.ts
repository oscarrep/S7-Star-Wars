import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  private fireAuth = inject(Auth);
  private router = inject(Router);
  private sessionService = inject(SessionService);
  private location = inject(Location);
  private route = inject(ActivatedRoute);

  login() {
    signInWithEmailAndPassword(this.fireAuth, this.email, this.password)
      .then(() => {
        this.sessionService.setSession(true);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl)
      })
      .catch(error => console.error('login failed', error));
  }

  backBtn() { this.location.back(); }

  showSignup() { this.router.navigate(['signup']); }
}
