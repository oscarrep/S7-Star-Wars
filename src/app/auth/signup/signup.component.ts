import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})

export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  private fireAuth = inject(Auth);

  ngOnInit(): void {

  }

  signUp() {
    createUserWithEmailAndPassword(this.fireAuth, this.email, this.password)
      .then(userCredential => console.log('User created:', userCredential.user))
      .catch(error => console.error('Error creating user:', error));
  }
}
