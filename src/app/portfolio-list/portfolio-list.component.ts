import { Component, OnInit } from '@angular/core';
declare var resetCursor:any;
@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styles: [
  ]
})
export class PortfolioListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    resetCursor();
  }

}
