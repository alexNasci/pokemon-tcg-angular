import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetalhesComponent } from './pokemon-detalhes.component';

const routes: Routes = [
  {
    path: '', component: PokemonDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetalhesRoutingModule { }
