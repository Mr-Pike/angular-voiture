import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { ServiceBase } from 'src/app/services/service-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-index',
  templateUrl: './voiture-index.component.html',
  styleUrls: ['./voiture-index.component.css']
})
export class VoitureIndexComponent implements OnInit {

  voitures!: Voiture[];

  constructor(private service: ServiceBase, private router: Router) {

  }

  ngOnInit() {
    this.service.getVoitures().then(vs => {
      console.log(`Chargement de ${vs.length} voitures`);
      this.voitures = vs;
    }).catch(()=>{
      console.log("Erreur dans le service.")
    });
  }

  gotoVoiture(v: Voiture) {
    this.router.navigateByUrl("/voiture/" + v.id);
    // this.router.navigateByUrl(`/voiture/${v.id}`);
  }

}
