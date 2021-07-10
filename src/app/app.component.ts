import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

declare var cursorEffect: any;
declare var pageTransition:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  constructor(private router: Router) { }

  ngAfterViewInit() {
  }
  ngOnInit() {
    this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          pageTransition();
        }
      });
    cursorEffect();
  }

}
