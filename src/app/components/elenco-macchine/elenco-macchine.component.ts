import { Component } from '@angular/core';
import { Macchina } from 'src/app/models/macchina';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-elenco-macchine',
  templateUrl: './elenco-macchine.component.html',
  styleUrls: ['./elenco-macchine.component.css']
})
export class ElencoMacchineComponent {
  macchine: Macchina[] = [];
  constructor(private service: MacchinaService) {
    this.macchine = this.service.GetAll();
  }
}