import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Macchina } from 'src/app/models/macchina';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-dettaglio-macchina',
  templateUrl: './dettaglio-macchina.component.html',
  styleUrls: ['./dettaglio-macchina.component.css']
})
export class DettaglioMacchinaComponent {
  detMacchina?: Macchina;
  constructor(private route: ActivatedRoute, private service: MacchinaService)
  {
    let id: number = +this.route.snapshot.params["id"];
    this.detMacchina = this.service.GetById(id);
    console.log(this.detMacchina);
  }
}
