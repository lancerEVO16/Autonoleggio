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
  prezzo = 0;
  optional = "";


  cancellaRiga(id: number) {
    let b = this.macchine.findIndex(m => m.id == id);
    this.macchine.splice(b, 1);
  }
  creaMacchina(marca: string, modello: string, tipologia: string, prezzo: number) {
    return this.service.CreaMacchina(marca, modello, tipologia, prezzo);
  }

}
