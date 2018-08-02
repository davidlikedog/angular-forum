import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.less']
})
export class CkeditorComponent implements OnInit {
  config = {
    url: '/springboot/upload',
    useCkfinder: false
  };
  content: any;

  constructor() { }

  ngOnInit() {
  }

}
