import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public getAllCategorias() {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/categoriabyid", { headers: header});
  }

  public getById(id: number) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/categoria/" + id, { headers: header});
  }

  public incluirNovaCategoria(categoria: Categoria) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/categoria", categoria, { headers: header });
  }

  public atualizarCategoria(categoria: Categoria) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.put("http://localhost:8080/categoria", categoria, { headers: header });
  }
}
