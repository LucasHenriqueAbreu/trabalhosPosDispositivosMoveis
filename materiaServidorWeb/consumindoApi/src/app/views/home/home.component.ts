import { MatSnackBar } from '@angular/material';
import { ConsultaApiService } from './../../services/consulta-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	adressBySearch: any;

	constructor(
		private consultaApiService: ConsultaApiService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
	}

	getAddress(query: string) {
		this.consultaApiService.getAdressByName(query).subscribe(res => {
			this.adressBySearch = res;
		}, err => {
			this.openSnackBar('Não foi possível encontrar o endreco.', 'OK');
		})
	}

	/**
	 * Abre o serviço de mensagem em tela.
	 * @param message mensagem a ser mostrada.
	 * @param action texto para botão de acção.
	 */
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
