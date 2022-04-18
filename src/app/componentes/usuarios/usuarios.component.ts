import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public lista: Usuario[] = [];
  
  constructor(private service: UsuarioService) { 
    // recuperacao da lista de usuarios
    this.service.recuperarTodos().subscribe(
      (res: Usuario[]) => {
        this.lista = res;
      }
    );

  }

  ngOnInit(): void {
  }

  public mudaStatus(usuario: Usuario) {
    usuario.ativo = (usuario.ativo)?1:0;

    this.service.atualizarUsuario(usuario).subscribe(
      (res: Usuario) => {
        alert("Usuario alterado!");
      },
      (err: any) => {
        alert("Erro ao atualizar!");
      }
    );
  }

}
