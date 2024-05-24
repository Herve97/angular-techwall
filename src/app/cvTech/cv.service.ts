import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes!: Personne[];

  link = 'http://localhost:3000/api/personnes';
  // private readonly http: HttpClient

  constructor() {
    this.personnes = [
      new Personne(
        1,
        'BAKONGO',
        'Hervé',
        26,
        'tim_logo.png',
        457893,
        'Fullstack Web Developer'
      ),
      new Personne(
        2,
        'MBEMBA',
        'Chancel',
        28,
        'rotating_card_profile2.png',
        893045,
        'Football Player'
      ),
    ];
  }

  addPersonne(personne: Personne){
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonneById(id: number): Personne | undefined{
    const personne = this.personnes.find(p => {return p.id === id});
    return personne;
  }

  deletePersonne(id: number) {
    const personne: any = this.personnes.find((p) => {
      return p.id === id;
    });
    const index = this.personnes.indexOf(personne);

    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }


  updatePersonne(id: number, data: Personne){
    let personne: any = this.personnes.find((p) => {
      return p.id === id;
    });
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
      const newPersonne = {
        ...data,
        id: personne.id,
      };
      this.personnes.push(newPersonne);
    }
  }

  findByName(chaine: string) {
    return this.personnes.find((personne)=> personne.name == chaine);
  }
}
