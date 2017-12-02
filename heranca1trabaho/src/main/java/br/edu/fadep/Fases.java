package br.edu.fadep;

import java.util.ArrayList;
import java.util.List;

public class Fases {
	
	private String descricao;
	
	private List<Jogo> jogos;
	
	public Fases() {
		this.jogos = new ArrayList<Jogo>();
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Jogo> getJogos() {
		return jogos;
	}

	public void setJogos(List<Jogo> jogos) {
		this.jogos = jogos;
	}
	
	
 }
