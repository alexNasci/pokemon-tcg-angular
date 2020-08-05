import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListarComponent } from './pokemon-listar.component';

const routes: Routes = [{ 
  path: '', component: PokemonListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonListarRoutingModule { }
