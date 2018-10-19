import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServiceBase } from 'src/app/services/service-base.service';
import { Voiture } from 'src/app/models/voiture';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private service: ServiceBase) {

  }

  voitureAffichee: Voiture|undefined;
  messageAlerte = "";
  isBusy = true;

  formGroup = new FormGroup({
    marque: new FormControl('toto'),
    modele: new FormControl(''),
  });

  save() {
    var modifications = this.formGroup.value;
    Object.assign(this.voitureAffichee, modifications);
    this.service.updateVoiture(this.voitureAffichee!).then((v) => {
      this.location.back();
    });
  }

  ngOnInit() {
    console.log("Le composant a été chargé.");
      // .subscribe();

    this.route.params.subscribe(c => {
      var id = c.id;
      this.isBusy = true;
      this.messageAlerte = "";
      this.voitureAffichee = undefined;
      this.service.getVoiture(id)
      .then(v => {
        this.voitureAffichee = v;
        this.formGroup.patchValue(v);
        this.isBusy = false;
      })
      .catch(err => {
        this.messageAlerte = "Erreur";
        this.isBusy = false;
      });
      /*.finally(() => {
        this.isBusy = false;
        console.log("Finally marche");
      });*/
    });

    console.log("Changement de paramètre.");

    // this.route.params.
  }

}
