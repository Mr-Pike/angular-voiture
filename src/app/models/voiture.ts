export class Voiture {
    marque: string = "";
    modele: string = ""; // ou modele = "";
    couleur: string|null = null; //couleur: string = null;
    puissanceFiscale: number = 2;
    dateConstruction: Date = new Date();
    moteur: any;

    reset() {
      //var a: string = this.couleur!;
      //a = a + "";
        for (var p in this) {
            //this[p] = null;
        }
    }
}
