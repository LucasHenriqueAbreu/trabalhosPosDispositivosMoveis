package br.edu.fadep;

import java.util.ArrayList;
import java.util.List;

public class Jogo {
	
	private List<Time> times;
	
	private Juiz juiz;
	
	private String placar;
	
	private Jogo() {
		this.times = new ArrayList<Time>();
	}

	public List<Time> getTimes() {
		return times;
	}

	public void setTimes(List<Time> times) {
		this.times = times;
	}

	public Juiz getJuiz() {
		return juiz;
	}

	public void setJuiz(Juiz juiz) {
		this.juiz = juiz;
	}

	public String getPlacar() {
		return placar;
	}

	public void setPlacar(String placar) {
		this.placar = placar;
	}
	
}
