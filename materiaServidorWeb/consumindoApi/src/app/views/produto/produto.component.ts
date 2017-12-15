import { Produto } from './../../models/produto';
import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  categorias: Categoria[] = [];
  produtos: Produto[] = [];
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.getAllCategorias();
    this.getAllProdutos();
  }

  getAllCategorias() {
    this.categoriaService.findAll().subscribe(res => {
      this.categorias = res;
    }, err => {
      console.log(err);
    });
  }

  getAllProdutos() {
    this.produtoService.findAll().subscribe(res => {
      this.produtos = res;
    }, err => {
      console.log(err);
    });
  }

  salvar(produto: Produto) {
    this.produtoService.save(produto).subscribe(res => {
      this.getAllProdutos();
    })
  }

}
