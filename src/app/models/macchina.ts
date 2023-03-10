import { MacchinaService } from "../services/macchine.service";

export class Macchina {
    [x: string]: any;
    constructor(
        public id: number,
        public costruttore: string,
        public modello: string,
        public tipologia: string,
        public prezzo: number,
        public optionals: string[],
        public immagine: string,
    ) { };
}