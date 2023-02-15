import { Macchina } from "../models/macchina";
import { Injectable } from "@angular/core";

@Injectable()
export class MacchinaService {

    private flotta : Macchina[] = [
        new Macchina(1, "Alfa Romeo", "Giulietta", "Berlina", 80, ["sedili sportivi"], "" ),
        new Macchina(2, "Audi", "A5", "Berlina", 110, ["cambio automatico", "sedili riscaldati"], "" ),
        new Macchina(3, "Audi", "A7", "Berlina", 170, ["cambio automatico", "seili riscaldati", "sedili in pelle"], "" ),
        new Macchina(4, "BMW", "5", "Berlina", 120, ["sedili riscaldati", "tettuccio panoramico"], "" ),
        new Macchina(5, "BMW", "840i", "Cabrio", 250, ["tettuccio automatico", "cambio automatico", "Apple Car Play"], "" ),
        new Macchina(6, "BMW", "X1", "SUV", 100, ["sedili in pelle"], "" ),
        new Macchina(7, "BMW", "X3", "SUV", 120, ["tettuccio panoramico", "sedili in pelle", "sedili riscaldati"], "" ),
        new Macchina(8, "Fiat", "Qubo", "Pulmino", 70, ["pianale di carico"], "" ),
        new Macchina(9, "Jeep", "Renegade", "SUV", 80, ["4x4", "gancio di traino"], "" ),
        new Macchina(10, "Volkswagen", "Beetle", "Cabrio", 130, ["capottina in pelle"], "" ),
        new Macchina(11, "Volkswagen", "Caravelle", "Pulmino", 120, ["pianale di carico", "sedili rimovibili"], "" ),
        new Macchina(12, "Volkswagen", "Golf", "Berlina", 80, [], "" ),
        new Macchina(13, "Volkswagen", "T-Roc", "Cabrio", 150, ["tettuccio ", ""], "" ),
        new Macchina(14, "Volkswagen", "Touran", "Pulmino", 125, ["7 posti"], "" ),
    ]
}
