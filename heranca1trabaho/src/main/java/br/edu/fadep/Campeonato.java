package br.edu.fadep;

import java.util.ArrayList;
import java.util.List;

public class Campeonato {
	private List<Fases> fases;
	
	private TipoCampeonato tipo;
	
	public Campeonato() {
		this.fases = new ArrayList<Fases>();
	}

	public List<Fases> getFases() {
		return fases;
	}

	public void setFases(List<Fases> fases) {
		this.fases = fases;
	}

	public TipoCampeonato getTipo() {
		return tipo;
	}

	public void setTipo(TipoCampeonato tipo) {
		this.tipo = tipo;
	}
	
}

