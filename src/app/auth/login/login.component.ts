import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

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

  login() {
    signInWithEmailAndPassword(this.fireAuth, this.email, this.password)
    .then(() => {
      this.sessionService.setSession(true);
      this.router.navigate(['/home']);
      console.log('LOGGED IN', this.email, this.password);
      console.log('session', this.sessionService.getSession());
    })
    .catch(error => console.error('login failed', error));
  }
}
