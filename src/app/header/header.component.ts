import { Component } from '@angular/core';
import { StarshipsComponent } from "../starships/starships.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-header',
  imports: [StarshipsComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
