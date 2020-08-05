import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonListarComponent } from './pokemon-listar.component';

import { PokemonListarRoutingModule } from './pokemon-listar-routing.module';
import { PokemonService } from 'src/app/services/pokemon.service';


@NgModule({
  declarations: [PokemonListarComponent],
  imports: [
    CommonModule,
    PokemonListarRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonListarModule { }
