import { Component, OnInit } from '@angular/core';
declare var DecoupledEditor: any;

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.less']
})
export class CkeditorComponent implements OnInit {
  editor: any;

  constructor() {
  }

  ngOnInit() {
    const editor: any = document.getElementById('editor');
    const toolbarContainer: any = document.getElementById('toolbar-container');
    DecoupledEditor.create(editor, {
      ckfinder: {
        // 返回的数据格式return json([‘uploaded’=>true,’url’=>$url]);
        uploadUrl: 'http://localhost?act=uploadImg'
      },
      language: 'zh-cn'
    }).then(ed => {
      toolbarContainer.appendChild(ed.ui.view.toolbar.element);
      this.editor = ed;
      console.log(ed);
    }).catch(error => {
      console.error(error);
    });
  }

}
