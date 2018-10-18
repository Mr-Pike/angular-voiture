import { Directive, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { VoitureEditComponent } from '../controls/voiture-edit/voiture-edit.component';

@Directive({
  selector: '[appHighlight]',
  exportAs: "appHighlight"
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  @ViewChild("id1")
  voitureEdit!: VoitureEditComponent;

  @Input()
  appHighlight: string|undefined;

  lastTime: number = 0;
  totalTime: number = 0;
  enteredTime: number|null = null;

  ngOnInit() {
    var target = (this.elementRef.nativeElement as HTMLElement);
    target.addEventListener("mouseover", () => {
      this.enteredTime = Date.now();
      target.style.background = this.appHighlight ? this.appHighlight : "red";
    });
    target.addEventListener("mouseout", () => {
      this.lastTime = Date.now() - this.enteredTime;
      this.totalTime += this.lastTime;
      target.style.background = null;
    });
  }

}
