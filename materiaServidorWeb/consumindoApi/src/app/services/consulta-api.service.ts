import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultaApiService {

	apiUrl = environment;

	constructor(private httpClient: HttpClient) {
	}

	getAdressByName(query: string): Observable<any> {
		return this.httpClient.get<any>(`${this.apiUrl.url_api_google}${query}`);
	}

	getAdressByIp(): Observable<any> {
		return this.httpClient.get<any>(this.apiUrl.url_api_google_ip);
	}

	getAdressByCep(cep: string): Observable<any> {
		return this.httpClient.get<any>(`${this.apiUrl.url_viacep}${cep}/json/`)
	}


}
