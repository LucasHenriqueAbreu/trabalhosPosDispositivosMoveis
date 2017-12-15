import { MatSnackBar } from '@angular/material';
import { ConsultaApiService } from './../../services/consulta-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	enderecos: any[];
	enderecoByIp: any;
	enderecoCep: any;
	lat: number = 51.678418;
	lng: number = 7.809007;

	constructor(
		private consultaApiService: ConsultaApiService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.getAddressByIp();
	}

	getAddress(query: string) {
		this.consultaApiService.getAdressByName(query).subscribe(res => {
			this.enderecos = res.results;
		}, err => {
			this.openSnackBar('Não foi possível encontrar o endreco.', 'OK');
		})
	}

	getAddressByIp() {
		this.consultaApiService.getAdressByIp().subscribe(res => {
			this.lat = parseFloat(res.lat);
			this.lng = parseFloat(res.lon);
			this.enderecoByIp = res;
		}, err => {
			this.openSnackBar('Não foi possível encontrar o endreco do ip.', 'OK');
		})
	}

	getAddressByCep(cep: string) {
		this.consultaApiService.getAdressByCep(cep).subscribe(res => {
			this.enderecoCep = res;
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
