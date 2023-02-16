import { Component, Output, EventEmitter } from '@angular/core';
import { Macchina } from 'src/app/models/macchina';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-elenco-macchine',
  templateUrl: './elenco-macchine.component.html',
  styleUrls: ['./elenco-macchine.component.css']
})
export class ElencoMacchineComponent {
  macchine: Macchina[] = [];
  costruttori: string[] = [];

  constructor(private service: MacchinaService) {
    this.macchine = this.service.GetAll();
    this.costruttori = this.service.GetBrands();
  }
  Search(oggetto: { value: string, index: boolean }[]) { 
    this.macchine = this.service.Search(oggetto);
    return this.macchine;
  }
}