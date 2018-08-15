import {Component, OnInit} from '@angular/core';
import {PicReturn} from '../../../assets/mineTs';

@Component({
  selector: 'app-pircure-rotate',
  templateUrl: './pircure-rotate.component.html',
  styleUrls: ['./pircure-rotate.component.less']
})
export class PircureRotateComponent implements OnInit {
  private picture: any;

  constructor() {
  }

  ngOnInit() {
    this.picture = new PicReturn('picBox', 2000, 'points', 'pointSelected');
    this.picture.start();
  }

}
