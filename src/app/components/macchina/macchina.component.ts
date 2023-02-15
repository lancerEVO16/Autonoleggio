import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Macchina } from 'src/app/models/macchina';


@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})

export class MacchinaComponent {
  @Input() macchina? : Macchina;
  imageSrc: string = "/assets/Img/" + (this.macchina?.immagine ? this.macchina.immagine : "vuoto");
  constructor(private router: Router) { 
  }
}
