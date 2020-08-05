import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetalhesRoutingModule } from './pokemon-detalhes-routing.module';
import { PokemonDetalhesComponent } from './pokemon-detalhes.component';
import { PokemonService } from 'src/app/services/pokemon.service';


@NgModule({
  declarations: [PokemonDetalhesComponent],
  imports: [
    CommonModule,
    PokemonDetalhesRoutingModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonDetalhesModule { }
