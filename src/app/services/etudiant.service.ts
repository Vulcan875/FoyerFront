import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Etudiant {
  idEtudiant?: number;
  nomEt: string;
  prenomEt: string;
  cin: number;
  ecole: string;
  dateNaissance: string;
}
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = `${environment.apiUrl}/etudiant`;

  constructor(private http: HttpClient) {}

  addOrUpdate(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/addOrUpdate`, etudiant);
  }

  findAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/findAll`);
  }

  findById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/findById?id=${id}`);
  }

  delete(etudiant: Etudiant): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete`, { body: etudiant });
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById?id=${id}`);
  }
}
