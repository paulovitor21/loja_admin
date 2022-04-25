import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { FiltroPedidoDTO } from 'src/app/model/FiltroPedidoDTO';
import { Pedido } from 'src/app/model/Pedido';
import { StatusPedido } from 'src/app/model/StatusPedido';
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
  public total;
  public status: StatusPedido = new StatusPedido();

  
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
        console.log(err.status);
        alert("Erro ao alterar status do pedido");
      }
    );
  }

  public enviarDetalhes(pedido: Pedido) {
    this.detalhe = pedido;
    document.getElementById("btnModal").click();
  }

  public filtrarPedidos() {

    this.filtroPedido.novo = (this.filtroPedido.novo) ? StatusPedido.NOVO_PEDIDO : 0;
    this.filtroPedido.pago = (this.filtroPedido.pago) ? StatusPedido.PAGO : 0;
    this.filtroPedido.transporte = (this.filtroPedido.transporte) ? StatusPedido.EM_TRANSPORTE : 0;
    this.filtroPedido.entregue = (this.filtroPedido.entregue) ? StatusPedido.ENTREGUE : 0;
    this.filtroPedido.posVenda = (this.filtroPedido.posVenda) ? StatusPedido.POS_VENDA : 0;
    this.filtroPedido.finalizado = (this.filtroPedido.finalizado) ? StatusPedido.FINALIZDO : 0;
    this.filtroPedido.cancelado = (this.filtroPedido.cancelado) ? StatusPedido.CANCELADO : 0;

    console.log(this.filtroPedido);

    this.service.getAllPedidos(this.filtroPedido).subscribe(
      (res: Pedido[]) => {
        this.total = 0;
        this.lista = res;
        this.lista.forEach(item => { this.total += item.valorTotal; })
      }
    );
  }

  public gerarFianceiro() {

  }

  public limpar(): void {
    this.filtroPedido = new FiltroPedidoDTO();
  }

}
