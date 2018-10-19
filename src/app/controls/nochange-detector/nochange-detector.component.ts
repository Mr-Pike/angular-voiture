import { Component, OnInit, Input, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nochange-detector',
  templateUrl: './nochange-detector.component.html',
  styleUrls: ['./nochange-detector.component.css']
})
export class NochangeDetectorComponent implements OnInit, DoCheck {

  constructor(
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.changeDetection.detectChanges();
    }, 10000);
  }

  @Input()
  name!:string;
  nombreDoCheck = 0;

  ngDoCheck() {
    this.nombreDoCheck++;
  }

  clicke() {

  }

}
