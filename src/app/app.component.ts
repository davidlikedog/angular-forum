import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  protected needShowBackTop: boolean;

  constructor() {
    this.needShowBackTop = false;
  }

  ngOnInit() {
    window.onscroll = () => {
      if (window.scrollY >= 10) {
        this.needShowBackTop = true;
      } else {
        this.needShowBackTop = false;
      }
    };
  }

  backTop() {
    // window.scrollY = 0;
    scrollTo(0, 0);
  }
}
