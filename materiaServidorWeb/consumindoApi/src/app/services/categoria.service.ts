import { Observable } from 'rxjs/Observable';
import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriaService {


	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	/**
	 * Salva um novo Categoria.
	 * @param Categoria objeto que representa o Categoria para ser salvo
	 */
	save(categoria: Categoria): Observable<Categoria> {
		if (categoria.id)
			return this.httpClient.put<Categoria>(`${this.apiUrl}categoria/${categoria.id}`, categoria);
		return this.httpClient.post<Categoria>(`${this.apiUrl}categoria`, categoria);
	}

	/**
	 * Pesquisa por todos os Categorias.
	 */
	findAll(): Observable<Categoria[]> {
		return this.httpClient.get<Categoria[]>(`${this.apiUrl}categoria`);
	}

}
