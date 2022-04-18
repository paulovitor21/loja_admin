import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTToken } from 'src/app/model/JWTToken';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;

  constructor(private route: Router,
              private service: LoginService) { 
    this.usuario = new Usuario;
  }

  ngOnInit(): void {
  }

  autenticar() {
    this.service.logarUsuario(this.usuario)
    .subscribe(
      (res: JWTToken) => {
        localStorage.setItem("PVLP", res.token);
        this.route.navigate(['/dashboard']);
      },
      (err: any) => {
        document.getElementById("btnModal").click();
      }
    );
  }
}
