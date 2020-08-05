import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./components/pokemon-listar/pokemon-listar.module').then(m => m.PokemonListarModule) },
      { path: 'pokemon-listar', loadChildren: () => import('./components/pokemon-listar/pokemon-listar.module').then(m => m.PokemonListarModule) },
      { path: 'pokemon-listar/detalhes/:id', loadChildren: () => import('./components/pokemon-detalhes/pokemon-detalhes.module').then(m => m.PokemonDetalhesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
