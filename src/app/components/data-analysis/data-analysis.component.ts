import { Component } from '@angular/core';
import { Macchina } from 'src/app/models/macchina';
import { MacchinaService } from 'src/app/services/macchine.service';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent {
  macchine : Macchina[] = [];
  constructor(private service: MacchinaService) {
    this.macchine = this.service.GetAll();
  }

  cancellaRiga(id : number) {
    let b = this.macchine.findIndex( m => m.id == id);
    this.macchine.splice(b, 1);
    }
}
