import { Directive, Input, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @Input() appDraggable=[0,0];//初始偏移量
  parentNode:any;
  isMouseDown = false;
  public totalOffsetX;
  public totalOffsetY;
  public disX;
  public disY;

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('document:mousemove', ['$event']) onMouseEnter(event) {
    if (this.isMouseDown) {
      let left=this.totalOffsetX + event.clientX - this.disX,
      top=this.totalOffsetY + event.clientY - this.disY;
      if(left>this.parentNode.clientWidth-this.el.nativeElement.clientWidth){
        left=this.parentNode.clientWidth-this.el.nativeElement.clientWidth;
      }
      if(left<0){
        left=0;
      }
      if(top>this.parentNode.clientHeight-this.el.nativeElement.clientHeight){
        top=this.parentNode.clientHeight-this.el.nativeElement.clientHeight;
      }
      if(top<0){
        top=0;
      }
      
      this.el.nativeElement.style.left = left + 'px';
      this.el.nativeElement.style.top = top + 'px';
    }
  }
  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    this.isMouseDown = true;
    this.el.nativeElement.style.cursor = 'move';
    this.disX = event.clientX;
    this.disY = event.clientY;
    if(!this.totalOffsetX&&this.totalOffsetX!==0){
      this.totalOffsetX=this.appDraggable[0];
    }
    if(!this.totalOffsetY&&this.totalOffsetY!==0){
      this.totalOffsetY=this.appDraggable[1];
    }
    
    this.parentNode=this.renderer.parentNode(this.el.nativeElement);
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(event) {
    if (this.isMouseDown) {
      this.totalOffsetX += event.clientX - this.disX;
      this.totalOffsetY += event.clientY - this.disY;
      this.isMouseDown = false;
      this.el.nativeElement.style.cursor = 'default';
    }

  }
  @HostListener('document:mouseleave', ['$event']) onMouseLeave(event) {
    this.isMouseDown = false;
    this.el.nativeElement.style.cursor = 'default';
  }

}
