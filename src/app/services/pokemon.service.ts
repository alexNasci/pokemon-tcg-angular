import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePokemon } from '../models/pokemon/pokemon.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemon}/cards`);
  }

  buscar(nome): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemon}/cards?name=${nome}`);
  }

  detalhes(id): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemon}/cards?id=${id}`);
  }
}
