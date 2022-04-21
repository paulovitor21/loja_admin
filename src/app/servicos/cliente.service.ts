import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public buscarTodos() {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/cliente/", {headers: header})
  }

  public buscarPorLetra(letra: string) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/cliente/nome/" + letra, {headers: header});
  }

  public buscarPorPalavrachave(keyword: string) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/cliente/busca/" + keyword, {headers: header});
  }

  public buscarCompradores(idProduto: number) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
  return this.http.get("http://localhost:8080/cliente/compras/" + idProduto, { headers: header});
  }
}
