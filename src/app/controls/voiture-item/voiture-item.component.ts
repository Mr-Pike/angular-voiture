import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-voiture-item',
  templateUrl: './voiture-item.component.html',
  styleUrls: ['./voiture-item.component.css']
})
export class VoitureItemComponent implements OnInit, OnChanges {

  constructor() {
    /*this.voitureAffichee.marque = 'Peugeot';
    this.voitureAffichee.modele = '<b>208</b>';
    this.voitureAffichee.couleur = 'bleu';*/
    // setInterval(() => {
    //   this.title = this.title + "*"
    // }, 1000);
  }

  @Output()
  select = new EventEmitter<Voiture>();


  @Input()
  voitureAffichee!: Voiture;

  @Input()
  extendedView = false;

  ajouterUnCheval() {
    this.voitureAffichee.puissanceFiscale++;
  }

  onSelect() {
    this.select.emit(this.voitureAffichee);
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log('changement dans VoitureComponent');
  }
}
