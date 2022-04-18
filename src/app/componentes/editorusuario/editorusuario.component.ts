import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-editorusuario',
  templateUrl: './editorusuario.component.html',
  styleUrls: ['./editorusuario.component.css']
})
export class EditorusuarioComponent implements OnInit {

  public senhasIguais = true;
  public usuario: Usuario;
  public senha: string;
  public msgResultado: string;
  public sucessoGravar: boolean;

  constructor(private service: UsuarioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 

                this.usuario = new Usuario();
                this.sucessoGravar = false;
                this.usuario.email = "";
                this.usuario.username = "";
                this.usuario.id = 0;
                let idUser = this.activatedRoute.snapshot.params["id"];
                if (idUser != "new") {
                  this.service.recuperarPeloId(idUser).subscribe(
                    (res: Usuario) => {
                      this.usuario = res;
                    }
                  );
                }
              }

  ngOnInit(): void {
  }

  public sugereUsername() {
    let arroba = (this.usuario.email.indexOf("@") > 0)?this.usuario.email.indexOf("@"):this.usuario.email.length;
    this.usuario.username = this.usuario.email.substring(0, arroba);
  }

  public confereSenha() {
    if (this.senha == this.usuario.senha) {
      this.senhasIguais = true;
    }
    else {
      this.senhasIguais = false;
    }
  }

  public atualizarUsuario(){
    if (this.usuario.id == 0){ // novo usuario
      this.service.adicionarNovoUsuario(this.usuario).subscribe(
        (res: Usuario) => {
          this.msgResultado = "Usuario adicionado com Sucesso!";
          this.sucessoGravar = true;
          document.getElementById("btnModal").click();                       
        },

        (err: any)=>{
          this.msgResultado = "Erro ao adicionar Usuário";
          document.getElementById("btnModal").click();
        }
      );
    }
    else {  // atualizar usuario existente
      this.service.atualizarUsuario(this.usuario).subscribe(
        (res: Usuario) => {
          this.msgResultado = "Atualização de Dados feita com Sucesso!";
          this.sucessoGravar = true;
          document.getElementById("btnModal").click(); 
        },
        (err: any) => {
          this.msgResultado = "Erro ao atualizar Usuário";
          document.getElementById("btnModal").click();

        }
      )

    }


  }

  public voltarOuFicar() {
    if (this.sucessoGravar) {
      this.router.navigate(['/usuarios']);
    }
  }

}
