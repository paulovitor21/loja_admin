import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltroPedidoDTO } from '../model/FiltroPedidoDTO';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public getAllPedidos(filtro: FiltroPedidoDTO) {
    let token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/pedido/filtrar", filtro, { headers: header});
  }

  public alterarStatus(pedido: Pedido, status: number) {
    let token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedido/" + pedido.idPedido + "?status=" + status, { headers: header});
  }

  public recuperarTotaisDaSemana() {
    let token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedido/recentes", { headers: header});
  }


}
