import { Component, EventEmitter, Output } from '@angular/core';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-barra-ricerca',
  templateUrl: './barra-ricerca.component.html',
  styleUrls: ['./barra-ricerca.component.css']
})
export class BarraRicercaComponent {
  @Output() searchEvent = new EventEmitter();

  valore = "";
  costruttori: string[];
  constructor(private service: MacchinaService) {
    this.costruttori = this.service.GetBrands();
  }
  Search() { return this.searchEvent.emit(this.valore)}
}