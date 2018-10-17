import { Component, OnInit, OnDestroy } from '@angular/core';
import { Voiture } from './models/voiture';
import { DataDurService } from './services/data-dur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private service: DataDurService) {


  }

  // service!: DataDurService;
  title = 'FirstApp';
  voitures: Voiture[] = [];

  // ngOnChanges() {

  // }

  ngOnInit() {
    let p = this.service.getVoitures().then(vs => {
      console.log('J\'exploite le résultat');
      this.voitures = vs;
    }).catch(() => {
      console.log('Erreur dans le service, il s\'est passé quelque chose.');
    });

    console.log('Je fais autre chose en attendant.');
  }

  ngOnDestroy() {

  }


}
