import { Produto } from './../models/produto';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	/**
	 * Salva um novo Produto.
	 * @param Produto objeto que representa o Produto para ser salvo
	 */
	save(produto: Produto): Observable<Produto> {
		if (produto.id)
			return this.httpClient.put<Produto>(`${this.apiUrl}produto/${produto.id}`, produto);
		return this.httpClient.post<Produto>(`${this.apiUrl}produto`, produto);
	}

	/**
	 * Pesquisa por todos os Produtos.
	 */
	findAll(): Observable<Produto[]> {
		return this.httpClient.get<Produto[]>(`${this.apiUrl}produto`);
	}

}
