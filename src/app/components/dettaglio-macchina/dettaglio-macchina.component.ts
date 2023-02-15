import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Macchina } from 'src/app/models/macchina';

@Component({
  selector: 'app-dettaglio-macchina',
  templateUrl: './dettaglio-macchina.component.html',
  styleUrls: ['./dettaglio-macchina.component.css']
})
export class DettaglioMacchinaComponent {
  detMacchina?: Macchina;
  constructor(private route: ActivatedRoute, private service: Macchina) {
    let id: number = +this.route.snapshot.params["id"];
    // this.detLibro = this.service.GetById(id);
    console.log(this.detMacchina);
  }
}
