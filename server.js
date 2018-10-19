var express = require('express');
var cors = require('cors');
//var bodyParser = require ('body-parser');
var app = express();

console.log("démarrage");

const voitures = [
  {id: "1", marque: "Peugeot", modele: "208", dateCreation: new Date()},
  {id: "2", marque: "Citroen", modele: "C3", dateCreation: new Date()},
  {id: "3", marque: "Tata Motors", modele: "300", dateCreation: new Date()}
];

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

/*app.use((req, res) =>  {
  console.log("une requête passe : " + req.ip.toString());
});*/

app.get("/voitures", (req, res) =>  {
  console.log("une requête pour /voitures")
  res.send(JSON.stringify(voitures));
});

app.get("/voiture/:id", (req, res) =>  {
  console.log("une requête pour /voitures/:id")
  var id = req.params.id;
  //console.log(id);
  var voiture = voitures.find(c => c.id == id);
  res.send(JSON.stringify(voiture));
});

app.post("/voiture", (req, res) => {
  var voiture = req.body;
  var voitureExistante = voitures.find(c => c.id == voiture.id);
  if (voitureExistante) {
    Object.assign(voitureExistante, voiture);
  } else {
    voitures.push(json.stringify(voiture));
  }
});

app.listen(3200);
