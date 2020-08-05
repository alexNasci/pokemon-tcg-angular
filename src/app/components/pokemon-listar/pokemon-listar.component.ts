import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResponsePokemon, CardsPokemon } from '../../models/pokemon/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.scss']
})
export class PokemonListarComponent implements OnInit {

  public pokemons: CardsPokemon[] = [];

  public formSearch: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private _pokemonService: PokemonService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar(): void {
    this._pokemonService.listar().subscribe(
      (res: ResponsePokemon) => {
        res.cards.sort ((a, b) => { 
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        this.pokemons = res.cards;
      }
    );
  }

  public buscarPokemon(): void {
    this._pokemonService.buscar(this.formSearch.value.name).subscribe(
      (res: ResponsePokemon) => {
        res.cards.sort ((a, b) => { 
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        this.pokemons = res.cards;
      }
    );
  }

  public detalhesPokemon(id: number): void{
    this._router.navigate(['./pokemon-listar/detalhes/',id]);
  }

}
