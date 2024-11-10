import { Component } from '@angular/core';
import { Etudiant, EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiants: Etudiant[] = [];
  newEtudiant: Etudiant = {
    nomEt: '',
    prenomEt: '',
    cin: 0,
    ecole: '',
    dateNaissance: ''
  };

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.findAll().subscribe(data => this.etudiants = data);
  }

  addOrUpdateEtudiant(): void {
    this.etudiantService.addOrUpdate(this.newEtudiant).subscribe(() => {
      this.getEtudiants();
      this.resetForm();
    });
  }

  deleteEtudiant(etudiant: Etudiant): void {
    this.etudiantService.delete(etudiant).subscribe(() => this.getEtudiants());
  }

  resetForm(): void {
    this.newEtudiant = { nomEt: '', prenomEt: '', cin: 0, ecole: '', dateNaissance: '' };
  }
}
