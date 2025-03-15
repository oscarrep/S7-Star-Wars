import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  login() {
    signInWithEmailAndPassword(this.fireAuth, this.email, this.password)
      .then(() => {
        this.sessionService.setSession(true);
        this.location.back();
      })
      .catch(error => console.error('login failed', error));
  }

  backBtn() { this.location.back(); }
}
