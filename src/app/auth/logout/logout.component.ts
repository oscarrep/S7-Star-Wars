import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Location } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  private fireAuth = inject(Auth);
  private router = inject(Router);
  private sessionService = inject(SessionService);
  private location = inject(Location);

  logOut() {
    signOut(this.fireAuth).then(()=>{
      this.sessionService.setSession(false);
      this.router.navigate(['/home']);
  }).catch(error => console.error('logout failed', error));
}

  backBtn() { this.location.back(); }
}
