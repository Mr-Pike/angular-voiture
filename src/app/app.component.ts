import { Component, OnInit, OnDestroy } from '@angular/core';
import { Voiture } from './models/voiture';
import { ServiceBase } from './services/service-base.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'FirstApp';
  isServiceBusy = false;
  constructor(private service: ServiceBase) {

  }

  serviceIsBusySubscription!: Subscription;

  ngOnInit() {
    this.serviceIsBusySubscription = this.service.isBusyChange.subscribe(i => {
      console.log(`isBusy est passé à : ${i}`);
      this.isServiceBusy = i;
    });
  }

  ngOnDestroy() {
    this.serviceIsBusySubscription.unsubscribe();
  }
}
