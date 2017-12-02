package br.edu.fadep;

import java.util.ArrayList;
import java.util.List;

public class Time {
	
	private List<Jogador> jogadores;
	
	public Time() {
		this.jogadores = new ArrayList<Jogador>();
	}

	public List<Jogador> getJogadores() {
		return jogadores;
	}

	public void setJogadores(List<Jogador> jogadores) {
		this.jogadores = jogadores;
	}
}
