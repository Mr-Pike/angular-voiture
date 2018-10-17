import { Component, OnInit, Input } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-voiture-liste',
  templateUrl: './voiture-liste.component.html',
  styleUrls: ['./voiture-liste.component.css']
})
export class VoitureListeComponent {

  constructor() {
    /*let tab = [1, 7, 9, 4, 6];
    let petitsEntiers = tab.filter(function(e) {
      return e < 5;
    });
    let premierPetitEntier = tab.find(e => e < 5);*/

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

    this.voituresLimitees = this.voitures.map(c => c).slice(0, 1);

  }

  voitureSelectionnee!: Voiture;



  title = 'FirstApp';
  @Input()
  voitures: Voiture[] = [];
  voituresLimitees: Voiture[] = [];

  selectVoiture(v: Voiture) {
    this.voitureSelectionnee = v;
    console.log(v);
  }

 // @Input("extendedView")
 // extendedView = false;
}
