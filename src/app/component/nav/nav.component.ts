import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  protected isShow: boolean;
  protected needBtn: boolean;

  constructor() {
    this.isShow = false;
  }

  ngOnInit() {
    document.onclick = () => {
      this.isShow = false;
    };
  }

  showMenu(event) {
    this.isShow = !this.isShow;
    event.stopPropagation();
  }
}
