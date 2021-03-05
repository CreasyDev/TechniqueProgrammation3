import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/services.dart' show rootBundle;

import 'travel.dart';

class PackageList extends StatefulWidget {
  PackageList({Key key}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  @override
  _MyPackageListState createState() => _MyPackageListState();
}

Future<String> getJson() {
  return rootBundle.loadString('data.json');
}

class _MyPackageListState extends State<PackageList> {
  Future<List<Forfait>> futureAlbum;


  Future<List<Forfait>> _fetchPackageList() async {
    //todo: uncomment this block and use correct endpoint API
    var uri = Uri.https('forfaits-voyages.herokuapp.com', '/api/forfaits');
    var response = await http.get(uri);
    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      return (json.decode(response.body) as List).map((data) {
        try {
          return new Forfait.fromJson(data);

        } catch (_){
          print("error occured while decoding");
        }
      } ).toList();
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      throw Exception('Echec lors de la recherche des forfaits');
    }

    //comment this return statement when receiving the corect url
    //API de test
    //Iterable list = json.decode('[{"_id":"6000ff360efa3fd999621bf4","destination":"Mexique","villeDepart":"Montréal","hotel":{"nom":"Ocean Riviera Paradise","coordonnees":"34 km de Aéroport Juan Gualberto Gomez - Varadero","nombreEtoiles":5,"nombreChambres":350,"caracteristiques":["Face à la plage","Dans un lieu situé à proximité d\'un parc/lieu naturel","Miniclub","Parque aquiatique","Salle d\'exercice","Wi-Fi : dans tout le complexe"],"coordonees":"afdssddsssadsadsaa"},"dateDepart":"2021-03-15T04:00:00.000Z","dateRetour":"2021-03-22T04:00:00.000Z","dateDepartD":"2020-01-01T00:00:00.000Z","dateRetourD":"2020-01-08T00:00:00.000Z","prix":1150,"rabais":200,"vedette":true,"da":"1996407","action":"Modifier"},{"_id":"6000ff3a0efa3fd999621c42","destination":"Cuba","villeDepart":"Montreal","hotel":{"nom":"Hotel #7","coordonnees":"...","nombreEtoiles":3,"nombreChambres":20,"caracteristiques":[]},"dateDepart":"2021-01-01","dateRetour":"2021-01-08","dateDepartD":"2020-01-01T00:00:00.000Z","dateRetourD":"2020-01-08T00:00:00.000Z","prix":3000,"rabais":0,"vedette":false,"da":"1796133","action":"Modifier"}]');
    // return list.map((data) => new Forfait.fromJson(data))
    //        .toList();
  }
  @override
  void initState() {
    super.initState();

    futureAlbum = _fetchPackageList();
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text("Forfaits de voyage disponibles",
        style: TextStyle(color: Colors.white),
        ),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: FutureBuilder<List<Forfait>>(
            future: futureAlbum,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return ListView.builder(
              itemCount: snapshot.data.length,
              itemBuilder: (context, index) {
                var item = snapshot.data[index];
                if(item is Forfait)
                  return Travel(item);
                else
                return (Text(''));
              });
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }

              // By default, show a loading spinner.
              return CircularProgressIndicator();
            },
          ),
      ),
     // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
