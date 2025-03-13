import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
  export class SignupComponent implements OnInit {
    email: string = '';
    password: string = '';

    ngOnInit(): void {

    }

    signUp() {

    }
  }
