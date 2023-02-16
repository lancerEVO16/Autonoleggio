import { Component, EventEmitter, Output } from '@angular/core';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-barra-ricerca',
  templateUrl: './barra-ricerca.component.html',
  styleUrls: ['./barra-ricerca.component.css']
})
export class BarraRicercaComponent {
  @Output() searchEvent = new EventEmitter();
  
  costruttori: {
    value: string,
    index: boolean
  }[] = [];
  
  constructor(private service: MacchinaService) {
    let x = this.service.GetBrands();
    
    for (let i = 0; i < x.length; i++) { 
      this.costruttori.push({ index: false, value: x[i] });
    }
  }

  Search(valore: string, index: boolean) { 
    this.costruttori.map(x => {
      if (x.value === valore) x.index = !x.index;
    })
    return this.searchEvent.emit(this.costruttori);
  }
}