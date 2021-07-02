import { Component, Input, OnInit, Output, EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-tree-item',
  templateUrl: './custom-tree-item.component.html',
  styleUrls: ['./custom-tree-item.component.less']
})
export class CustomTreeItemComponent implements OnInit {
  @Input() treeData: Object;
  @Input() treeIndex:number=0;
  @Input() direction:string='horizontal';
  @Output() event=new EventEmitter();
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  constructor() { }

  edit(){
    this.treeData['isEdit']=!this.treeData['isEdit'];
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  addChildNode(){
    this.treeData['children'].push({
      name:'',
      children: []
    })
  }

  deleteTreeNode(params){
    if(params.action==='delete'){
      this.treeData['children'].splice(params.index,1);
    }
  }

  onClose(){
    this.event.emit({action: 'delete',data: this.treeData,index: this.treeIndex});
  }

  ngOnInit(): void {
    this.treeData['isEdit']=false;
    if(!this.treeData['children']){
      this.treeData['children']=[];
    }
  }

}
