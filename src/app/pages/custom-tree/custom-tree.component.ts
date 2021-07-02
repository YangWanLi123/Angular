import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tree',
  templateUrl: './custom-tree.component.html',
  styleUrls: ['./custom-tree.component.less']
})
export class CustomTreeComponent implements OnInit {
  treeData={
    name: '节点1',
    children: [
      {name: '节点11',children: []},
      {name: '节点12',children: [
        {name: '节点121',children: []},
        // {name: '节点122',children: []},
        // {name: '节点123',children: []},
      ]}
    ]
  };
  treeDataVertical={
    name: '节点1',
    children: [
      {name: '节点11',children: []},
      {name: '节点12',children: [
        // {name: '节点121',children: []},
        // {name: '节点122',children: []},
        // {name: '节点123',children: []},
      ]}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
