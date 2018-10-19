export class Voiture {
  constructor() {
    this.id = (function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    })();
  }
  id: string;
  marque: string = "";
  modele = "";

  // @ChoiceQuestion('rouge', 'vert', 'bleu')
  couleur: string|null = null;

  // @Range(1, 12)
  puissanceFiscale: number = 2;
  dateConstruction: Date = new Date();
  moteur: any;
}
