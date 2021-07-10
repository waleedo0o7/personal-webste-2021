import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var resetCursor:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let name = params['name'];
      this.activatedProtfolioName = name;
    });
  }

  activatedProtfolioName:any;

  activatedProtfolio:any;

    mismon =  {
      projectName : 'mismon',
      type : 'Landingpage',
      languages : [
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'}
      ],
      mainImage : '../../assets/images/portfolio001.png',
    }

    megancy =  {
      projectName : 'megancy',
      type : 'Company Profile',
      languages : [
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'},
        {link : '../../assets/images/html5.png'}
      ],
      mainImage : '../../assets/images/portfolio001.png',
    }

    allData:any = [
      {
        projectName : 'mismon',
        type : 'Landingpage',
        languages : [
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'}
        ],
        mainImage : '../../assets/images/portfolio001.png',
      } ,
      {
        projectName : 'megancy',
        type : 'Company Profile',
        languages : [
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'},
          {link : '../../assets/images/html5.png'}
        ],
        mainImage : '../../assets/images/portfolio002.png',
      }
    ]




  ngOnInit(): void {
    this.activatedProtfolio = this.allData[1];
    resetCursor();
  }

}