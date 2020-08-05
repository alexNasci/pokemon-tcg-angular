import { Component, OnInit } from '@angular/core';
import { CardsPokemon, ResponsePokemon } from 'src/app/models/pokemon/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.scss']
})
export class PokemonDetalhesComponent implements OnInit {

  public pokemon: CardsPokemon;
  public idPokemon: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pokemonService: PokemonService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.idPokemon = this._activatedRoute.snapshot.params['id'];
    this.carregardadosPokemon();
  }

  public carregardadosPokemon() {
    this._pokemonService.detalhes(this.idPokemon).subscribe(
      (res: ResponsePokemon) => this.pokemon = res.cards[0]
    );
  }
  
  public voltar() {
    this._router.navigate(['./pokemon-listar']);
  }
}
