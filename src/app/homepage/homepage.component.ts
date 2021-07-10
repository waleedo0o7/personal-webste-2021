import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var cursorEffect: any;
declare var introAnimation:any;
declare var fadeInScene:any;
declare var skills:any;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {


  constructor(private router: Router) {
  }

  goToPortfolioPage(name:any){
    this.router.navigate(['/portfolio'], { queryParams: { name: JSON.stringify(name)}});
  }
  

  ngOnInit(): void {
    introAnimation();
    cursorEffect();
    fadeInScene();
    skills();
  }

}
