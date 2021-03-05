import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';


class Travel extends StatelessWidget {
  final Forfait forfait;

  Travel(this.forfait);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(
            width: 1.0,
            color: Colors.black,
          ),
          left: BorderSide(
            width: 1.0,
            color: Colors.black,
          ),
          right: BorderSide(
            width: 1.0,
            color: Colors.black,
          ),
          bottom: BorderSide(
            width: 1.0,
            color: Colors.black,
          ),
        ),
      ),
      margin: EdgeInsets.only(
        left: MediaQuery.of(context).size.width>600 ?
        MediaQuery.of(context).size.width>1000 ? MediaQuery.of(context).size.width / 3: MediaQuery.of(context).size.width / 4: 
        MediaQuery.of(context).size.width / 10,
        right: MediaQuery.of(context).size.width>600 ?
        MediaQuery.of(context).size.width>1000 ? MediaQuery.of(context).size.width / 3: MediaQuery.of(context).size.width / 4: 
        MediaQuery.of(context).size.width / 10,
        bottom: 25,
      ),
      padding: EdgeInsets.only(
        top: 15,
        left: 10,
        right: 10,
      ),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                  flex: 6,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        forfait.hotel!=null && forfait.hotel.nom!=null? forfait.hotel.nom: " Hotel name",
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                      Text(forfait.destination!=null? forfait.destination : "Unknown destination"),
                    ],
                  )),
              Expanded(
                flex: 1,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Row(
                      children: [
                        Icon(
                          Icons.star,
                          color: Colors.deepOrange,
                        ),
                        Text(forfait.hotel!=null? forfait.hotel.nombreEtoiles.toString(): "[1-5]"),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
          Divider(
            height: 10,
          ),
          Row(
            children: [
              Expanded(
                  flex: 4,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Depart",
                      ),
                      Text(forfait.dateDepart!=null? forfait.dateDepart.split("T")[0]: "Unknown"),
                    ],
                  )),
              Expanded(
                  flex: 4,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(right: 28.0),
                        child: Text(
                          "Retour",
                        ),
                      ),
                      Text(forfait.dateRetour!=null? forfait.dateRetour.split("T")[0]: "Unknown"),
                    ],
                  )),
            ],
          ),
          Divider(
            height: 10,
          ),
          Padding(
            padding: const EdgeInsets.only(
              top: 10.0,
              bottom: 10,
            ),
            child: Row(
              children: [
                Text("Price: "),
                Text(
                  forfait.prix.toString() + "\$",
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    color: Colors.green,
                  ),
                ),
              ],
            ),
          ),
          Divider(
            height: 10,
          ),
          Padding(
            padding: const EdgeInsets.only(
              top: 10.0,
              bottom: 10,
            ),
            child: Column(  
              crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Align( alignment: Alignment.topLeft, child: Text("Caractéristiques: ")),
                Column(
                  children: forfait.hotel != null && forfait.hotel.caracteristiques!=null && forfait.hotel.caracteristiques.length>0?
                  forfait.hotel.caracteristiques.map((e) {
                    return Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Expanded(flex: 1, child: Icon(Icons.arrow_right, color: Colors.deepOrange)),
                  Expanded(flex: 9, child: Text(e,maxLines: 3, overflow: TextOverflow.ellipsis,)),
                ]
                    
                  );         
          
                  }).toList():[],),
                ],
                ),
          ),
        ],
      ),
    );
  }
}

class Forfait {
  String sId;
  String destination;
  String villeDepart;
  Hotel hotel;
  String dateDepart;
  String dateRetour;
  String dateDepartD;
  String dateRetourD;
  int prix;
  int rabais;
  bool vedette;
  String da;
  String action;

  Forfait(
      {this.sId,
      this.destination,
      this.villeDepart,
      this.hotel,
      this.dateDepart,
      this.dateRetour,
      this.dateDepartD,
      this.dateRetourD,
      this.prix,
      this.rabais,
      this.vedette,
      this.da,
      this.action});

  Forfait.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    destination = json['destination'];
    villeDepart = json['villeDepart'];
    hotel = json['hotel'] != null ? new Hotel.fromJson(json['hotel']) : null;
    dateDepart = json['dateDepart'];
    dateRetour = json['dateRetour'];
    dateDepartD = json['dateDepartD'];
    dateRetourD = json['dateRetourD'];
    prix = json['prix'];
    rabais = json['rabais'];
    vedette = json['vedette'];
    da = json['da'];
    action = json['action'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['destination'] = this.destination;
    data['villeDepart'] = this.villeDepart;
    if (this.hotel != null) {
      data['hotel'] = this.hotel.toJson();
    }
    data['dateDepart'] = this.dateDepart;
    data['dateRetour'] = this.dateRetour;
    data['dateDepartD'] = this.dateDepartD;
    data['dateRetourD'] = this.dateRetourD;
    data['prix'] = this.prix;
    data['rabais'] = this.rabais;
    data['vedette'] = this.vedette;
    data['da'] = this.da;
    data['action'] = this.action;
    return data;
  }
}

class Hotel {
  String nom;
  String coordonnees;
  int nombreEtoiles;
  int nombreChambres;
  List<String> caracteristiques;
  String coordonees;

  Hotel(
      {this.nom,
      this.coordonnees,
      this.nombreEtoiles,
      this.nombreChambres,
      this.caracteristiques,
      this.coordonees});

  Hotel.fromJson(Map<String, dynamic> json) {
    nom = json['nom'];
    coordonnees = json['coordonnees'];
    nombreEtoiles = json['nombreEtoiles'];
    nombreChambres = json['nombreChambres'];
    caracteristiques = json['caracteristiques'].cast<String>();
    coordonees = json['coordonees'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['nom'] = this.nom;
    data['coordonnees'] = this.coordonnees;
    data['nombreEtoiles'] = this.nombreEtoiles;
    data['nombreChambres'] = this.nombreChambres;
    data['caracteristiques'] = this.caracteristiques;
    data['coordonees'] = this.coordonees;
    return data;
  }
}