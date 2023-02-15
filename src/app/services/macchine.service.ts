import { Macchina } from "../models/macchina";
import { Injectable } from "@angular/core";

@Injectable()
export class MacchinaService {

    private flotta: Macchina[] = [
        new Macchina(1, "Alfa Romeo", "Giulietta", "Berlina", 80, ["sedili sportivi"], "alfa-giuletta-berlina-80.png"),
        new Macchina(2, "Audi", "A5", "Berlina", 110, ["cambio automatico", "sedili riscaldati"], "audi-a5-berlina-110.png"),
        new Macchina(3, "Audi", "A7", "Berlina", 170, ["cambio automatico", "sedili riscaldati", "sedili in pelle"], "audi-a7-berlina-170.png"),
        new Macchina(4, "BMW", "5", "Berlina", 120, ["sedili riscaldati", "tettuccio panoramico"], "bmw-5-berlina-120.png"),
        new Macchina(5, "BMW", "840i", "Cabrio", 250, ["tettuccio automatico", "cambio automatico", "Apple Car Play"], "bmw-840i-cabrio-250.png"),
        new Macchina(6, "BMW", "X1", "SUV", 100, ["sedili in pelle"], "bmw-x1-suv-100.png"),
        new Macchina(7, "BMW", "X3", "SUV", 120, ["tettuccio panoramico", "sedili in pelle", "sedili riscaldati"], "bmw-x3-suv-120.png"),
        new Macchina(8, "Fiat", "Qubo", "Pulmino", 70, ["pianale di carico"], "fiat-qubo-pulmino-70.png"),
        new Macchina(9, "Jeep", "Renegade", "SUV", 80, ["4x4", "gancio di traino"], "jeep-renegade-suv-80.png"),
        new Macchina(10, "Volkswagen", "Beetle", "Cabrio", 130, ["capottina in pelle"], "vw-beetle-cabrio-130.png"),
        new Macchina(11, "Volkswagen", "Caravelle", "Pulmino", 120, ["pianale di carico", "sedili rimovibili"], "vw-caravelle-pulmino-120.png"),
        new Macchina(12, "Volkswagen", "Golf", "Berlina", 80, [], "vw-golf-berlina-80.png"),
        new Macchina(13, "Volkswagen", "T-Roc", "Cabrio", 150, ["tettuccio automatico"], "vw-t-roc-cabrio-150.png"),
        new Macchina(14, "Volkswagen", "Touran", "Pulmino", 125, ["7 posti"], "vw-touran-pulmino-125.png"),
    ]

    GetAll(): Macchina[] { return this.flotta; }

    GetBrands(): string[] {
        let brands: string[] = [];
        for (let m of this.flotta) { brands.push(m.costruttore) }
        let unique: string[] = [...new Set(brands)];
        return unique;
    }

    Search(valore: string): Macchina[] { return this.flotta.filter(l => l.costruttore.includes(valore)); }
}