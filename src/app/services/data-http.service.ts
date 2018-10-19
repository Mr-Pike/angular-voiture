import { Injectable } from '@angular/core';
import { ServiceBase } from './service-base.service';
import { Voiture } from '../models/voiture';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataHttpService extends ServiceBase {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createVoiture(): Voiture {
    return new Voiture();
  }

  getVoiture(id: string): Promise<Voiture> {
    return this.gereIsBusy(this.httpClient.get(environment.serviceUrl + '/voiture/' + id)
    .toPromise()
    // Promesse qui renvoie un tableau d'objets non typés.
    .then((v: Voiture) => {
      //debugger;
      return v;
    })
    );
  }


  updateVoiture(voitureModifiee: Voiture): Promise<Voiture> {
    return this.httpClient.post(environment.serviceUrl + '/voiture', voitureModifiee)
    .toPromise()
    .then(o => {
      var v = this.createVoiture();
      Object.assign(v, o);
      return v;
    });
  }

  getVoitures(): Promise<Voiture[]> {
    return this.gereIsBusy(this.httpClient.get(environment.serviceUrl + '/voitures')
    .toPromise()
    // Promesse qui renvoie un tableau d'objets non typés.
    .then((tab: any[]) => {
      return tab.map(o => {
        var v = this.createVoiture();
        Object.assign(v, o);
        return v;
      });
    }).then(tabvoiture => {
      // Implémentation du stockage.
      return tabvoiture;
    })
    );
  }


}
