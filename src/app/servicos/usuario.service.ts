import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public recuperarTodos() {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/usuario", { headers: header});

  }

  public atualizarUsuario(usuario: Usuario) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.put("http://localhost:8080/usuario/" + usuario.id, usuario, {headers: header});
  }

  public adicionarNovoUsuario(usuario: Usuario) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/usuario", usuario, { headers: header});
  }

  public recuperarPeloId(id: number) {
    let token: string;
    token = localStorage.getItem("PVLP");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/usuario/" + id, { headers: header});
  }
}
