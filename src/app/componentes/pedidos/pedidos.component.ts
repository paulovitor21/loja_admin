import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { FiltroPedidoDTO } from 'src/app/model/FiltroPedidoDTO';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/servicos/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public filtroPedido: FiltroPedidoDTO = new FiltroPedidoDTO();
  
  public detalhe: Pedido = new Pedido();
  public lista: Pedido[] = [];

  
  constructor(private service: PedidoService) { 
    this.detalhe.cliente = new Cliente();
    this.service.getAllPedidos(this.filtroPedido).subscribe(
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

  public filtrarPedidos() {
    this.filtroPedido.pago = (this.filtroPedido.pago)?1:0;
    this.filtroPedido.entregue = (this.filtroPedido.entregue)?2:0;
    this.filtroPedido.cancelado = (this.filtroPedido.cancelado)?3:0;
    
    console.log(this.filtroPedido);

    this.service.getAllPedidos(this.filtroPedido).subscribe(
      (res: Pedido[]) => {
        this.lista = res;
      }
    );
  }

  public gerarFianceiro() {

  }

  public limpar(): void {
    this.filtroPedido = new FiltroPedidoDTO();
  }

}
