import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-img',
  imports: [],
  templateUrl: './starship-img.component.html',
  styleUrl: './starship-img.component.scss'
})
export class StarshipImgComponent implements OnInit {

  imgUrl: string | null = null;
  shipId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shipId = this.route.snapshot.paramMap.get('id');
    if (this.shipId) this.imgUrl = this.getImgUrl(this.shipId);
  }

  getImgUrl(id: string): string {
    return `https://res.cloudinary.com/dojj3zpfw/image/upload/v1741209478/starwars-ships/${id}.jpg`;
  }

}
