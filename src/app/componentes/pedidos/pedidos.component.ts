import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/servicos/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public detalhe: Pedido = new Pedido();
  public lista: Pedido[] = [];

  
  constructor(private service: PedidoService) { 
    this.detalhe.cliente = new Cliente();
    this.service.getAllPedidos().subscribe(
      (res: Pedido[]) => {
        this.lista = res;
      },
      (err) => {
        alert("Erro ao recuperar")
      }
    );
  }

  ngOnInit(): void {
  }

  public alterarStatus(pedido: Pedido, status: number) {
    this.service.alterarStatus(pedido, status).subscribe(
      (res: Pedido) => {
        alert("Status do pedido alterado");
        pedido.status = status;
      },
      (err) => {
        alert("Erro ao alterar status do pedido");
      }
    );
  }

  public enviarDetalhes(pedido: Pedido) {
    this.detalhe = pedido;
    document.getElementById("btnModal").click();
  }

}
