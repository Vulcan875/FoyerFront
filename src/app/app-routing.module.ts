import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: '/etudiant', pathMatch: 'full' },
  { path: 'etudiant', component: EtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
