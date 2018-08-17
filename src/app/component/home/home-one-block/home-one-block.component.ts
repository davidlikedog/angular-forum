import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home-one-block',
  templateUrl: './home-one-block.component.html',
  styleUrls: ['./home-one-block.component.less']
})
export class HomeOneBlockComponent implements OnInit {
  @Input() style: string;

  constructor() {
  }

  ngOnInit() {
  }

}
