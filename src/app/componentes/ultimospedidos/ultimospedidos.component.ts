import { Component, OnInit } from '@angular/core';
import { FiltroPedidoDTO } from 'src/app/model/FiltroPedidoDTO';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/servicos/pedido.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ultimospedidos',
  templateUrl: './ultimospedidos.component.html',
  styleUrls: ['./ultimospedidos.component.css']
})
export class UltimospedidosComponent implements OnInit {
  
  public lista: Pedido[] = [];
  private filtroDTO: FiltroPedidoDTO;
  public total: number = 0;
  public totalPago: number = 0;
  public totalCancelado: number = 0;
  public totalPendentes: number = 0;

  constructor(private service: PedidoService) { }

  ngOnInit(): void {
    this.recuperarPedidos();
    setInterval(() => this.recuperarPedidos(), 60000);
  }

  public recuperarPedidos() {
    this.total = 0;
    this.totalCancelado = 0;
    this.totalPago = 0;
    this.totalPendentes = 0;
    this.filtroDTO = new FiltroPedidoDTO();
    this.filtroDTO.dataInicio = moment().subtract(7,  'days').format("yyyy-MM-DD");
    this.filtroDTO.dataFim = moment().format("yyyy-MM-DD");

    this.service.getAllPedidos(this.filtroDTO).subscribe(
      (res: Pedido[]) => {
        this.lista = res;
        this.lista.forEach(item => {
          this.total += item.valorTotal;
          if (item.status == 0) this.totalPendentes += item.valorTotal;
          else if (item.status == 1 || item.status == 2) this.totalPago += item.valorTotal;
          else if (item.status == 3) this.totalCancelado += item.valorTotal;
        })
      }
    );
  }

}
