import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public recuperarTodos() {
    return this.http.get("http://localhost:8080/produto/todos");
  }

  public uploadFoto(formData: FormData) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token,
    }

    let body = {
      'body': formData
    }
    return this.http.post("http://localhost:8080/produto/upload", formData, {headers: header});
  }
}
