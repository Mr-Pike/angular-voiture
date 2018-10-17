import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class DataDurService {
  voitures: Voiture[] = [];

  constructor() {
    let v1 = new Voiture();
    v1.marque = 'Peugeot';
    v1.modele = '208';
    v1.couleur = 'Rouge';
    this.voitures.push(v1);

    let v2 = new Voiture();
    v2.marque = 'Citroën';
    v2.modele = 'C3';
    v2.couleur = 'Blanc';
    this.voitures.push(v2);

    let v3 = new Voiture();
    v3.marque = 'Citroën';
    v3.modele = 'C12';
    v3.couleur = 'Blanc';
    this.voitures.push(v3);

    // let P1 = Promise.resolve(4);
    // let P2 = Promise.resolve(5);

    // Promise.all([P1, P2]).then((e) => {
    //   console.log(resulats[0] + resultats[1]);
    // });

    // Promise.race([P1, P2]).then((e) => {

    // });
  }

  createVoiture(): Voiture {
    return new Voiture();
  }

  updateVoiture(voitureOriginale: Voiture|null, voitureModifiee: Voiture): Promise<Voiture> {
    if (!voitureOriginale) {
      this.voitures.push(voitureModifiee!);
    }
    Object.assign(voitureOriginale, voitureModifiee);
    return Promise.resolve(voitureOriginale!);
    /*return new Promise((resolve, reject) => {
      console.log('Début de la maj.');
      setTimeout(() => {
        Object.assign(voitureOriginale, voitureModifiee);
        console.log('maj résolue.');
        resolve(voitureOriginale);
      }, 3000);
    });*/
  }

  getVoitures(): Promise<Voiture[]> {
    return new Promise((resolve, reject) => {
      console.log('Début de la résolution.');
      setTimeout(() => {
        console.log('Promesse résolue.');

        if (new Date().getHours() > 22) {
          reject('Trop tard pour bosser.');
          return;
        }

        resolve(this.voitures);
      }, 3000);
    });
    // return Promise.resolve(this.voitures);
  }

  /*test() {
    let p = this.getVoitures();
    p.then(tab => {

    }).catch(err => {
      console.log('Une erreur s\'est produite...');
    });
  }*/
}
