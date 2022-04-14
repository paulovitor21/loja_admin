import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public lista: Produto[] = [];
  constructor(private service: ProdutoService) { 
    this.service.recuperarTodos().subscribe(
      (res: Produto[]) => {
        this.lista = res;
      } 
    );
  }

  ngOnInit(): void {
  }

  public destaca(id: number) {
    console.log("Destacando = " + id);
  }

  public disponibiliza(id: number) {
    console.log("Dispinibilizando = " + id);
  }
}
