import { EventEmitter } from "@angular/core";
import { Voiture } from "../models/voiture";

export abstract class ServiceBase {
  isBusyChange = new EventEmitter<boolean>();

  isBusy = false;
  gereIsBusy<T>(promesse: Promise<T>): Promise<T>{
    this.isBusy = true;
    promesse.then(c=>{
      this.isBusy = false;
    }).catch(c=>{
      this.isBusy = false;
    });
    return promesse;
  }

  abstract createVoiture(): Voiture;
  abstract getVoiture(id: string): Promise<Voiture>;
  abstract updateVoiture(voitureModifiee: Voiture): Promise<Voiture>;
  abstract getVoitures(): Promise<Voiture[]>;
}
