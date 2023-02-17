import { Component } from '@angular/core';
import { Macchina } from 'src/app/models/macchina';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent {
  macchine: Macchina[] = [];
  constructor(private service: MacchinaService ) {
    this.macchine = this.service.GetAll();
  }

  marca = "";
  modello = "";
  tipologia = "";
  optional = "";
  prezzo = 0;


  cancellaRiga(id: number) {
    let b = this.macchine.findIndex(m => m.id == id);
    this.macchine.splice(b, 1);
  }
  creaMacchina(marca: string, modello: string, tipologia: string, optionals: string, prezzo: number) {
    console.log(optionals.split(','));
    return this.service.CreaMacchina(marca, modello, tipologia, optionals.split(","), prezzo);
  }
}
