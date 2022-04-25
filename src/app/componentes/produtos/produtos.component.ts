import { Component, OnInit } from '@angular/core';
import { CompradorDTO } from 'src/app/model/CompradorDTO';
import { Produto } from 'src/app/model/Produto';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public lista: Produto[] = [];
  public compradores: CompradorDTO[] = [];
  
  constructor(private service: ProdutoService,
              private cliService: ClienteService) { 
    this.service.recuperarTodos().subscribe(
      (res: Produto[]) => {
        this.lista = res;
      } 
    );
  }

  ngOnInit(): void {
  }

  public prontaEntrega(produto: Produto) {
    produto.prontaEntrega = (produto.prontaEntrega)?1:0;
    this.service.atualizarProduto(produto).subscribe(
      (res: Produto) => {
        console.log("Produto" + res);
      },
      (err) => {
        alert("Erro ao atualizar [pronta entrega] do produto" + produto.nome);
      }
    );
  }
  public destaca(produto: Produto) {
    //console.log("Destacando = " + produto.id + " destaq. = " + produto.destaque);
    produto.destaque = (produto.destaque)? 1:0;
    this.service.atualizarProduto(produto).subscribe(
      (res: Produto) => {
        console.log("Produto " + res);
      },
      (err) => {
        alert("Erro ao atualizar destaque do produto " + produto.nome);
      }
    );
  }

  public disponibiliza(produto: Produto) {
    produto.disponivel = (produto.disponivel)? 1:0;
    //console.log("Dispinibilizando = " + produto.id + " disp. = " + produto.disponivel);
    this.service.atualizarProduto(produto).subscribe(
      (res: Produto) => {
        console.log("Produto " + res);
      },
      (err) => {
        alert("Erro ao atualizar disponibilidade do produto " + produto.nome);
      }
    );
  }

  public buscarCompradores(idProduto: number) {
    this.cliService.buscarCompradores(idProduto).subscribe(
      (res: CompradorDTO[]) => {
        this.compradores = res;
        //console.log(this.compradores);
        document.getElementById("btnModal").click();
      },
      (err) => { alert("erro = " + err.status) }
    );
    console.log(idProduto);
  }
}
