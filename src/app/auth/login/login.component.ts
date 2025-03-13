import { Component, inject, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { session } from '../../../utils/session';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  private fireAuth = inject(Auth);
  private router = inject(Router);

  ngOnInit(): void {

  }

  login() {
    signInWithEmailAndPassword(this.fireAuth, this.email, this.password).then(()=>{
      console.log('LOGGED IN', this.email, this.password);
      console.log('session', session)
      this.router.navigate(['/home']);
    })
  }

}
