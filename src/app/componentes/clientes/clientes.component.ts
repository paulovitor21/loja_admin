import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public listaLetras: string[];
  public keyword: string;

  public lista: Cliente[];
  public modo: number; // 0 - full | 1 - letra | 2 - keyword

  constructor(private route: ActivatedRoute,
              private service: ClienteService,
              private router: Router) { 

              let letra: string = "A";
              this.listaLetras = [];

              for (let i = 0; i < 26; i++) {
                letra = String.fromCharCode(65 + i);
                this.listaLetras.push(letra);
              }

              this.route.queryParams.subscribe(
                (parameters) => {
                  if (parameters['letra']) {
                    this.service.buscarPorLetra(parameters['letra']).subscribe(
                      (res: Cliente[]) => {
                        this.lista = res;
                      }
                    );
                  }
                  else if (parameters['keyword']) {
                    this.service.buscarPorPalavrachave(parameters['keyword']).subscribe(
                      (res: Cliente[]) => {
                        this.lista = res;
                      }
                    );
                  }
                  else {
                    this.service.buscarTodos().subscribe(
                      (res: Cliente[]) => {
                        this.lista = res;
                      }
                    );
                  }
                }
              );
              }
  


  ngOnInit(): void {
  }

  public buscarPorPalavraChave() {
    this.router.navigate(['clientes'], { queryParams: { keyword: this.keyword}});
  }

  public isBirthday(dataNasc: string): boolean {
    if (dataNasc) {
      let hoje: Date = new Date();
      let MesHoje = hoje.getMonth() + 1;
      let diaHoje = hoje.getDate();

      let mesNasc = dataNasc.substring(5,2);
      let diaNasc = dataNasc.substring(8,2);

      return (MesHoje == parseInt(mesNasc) && diaHoje == parseInt(diaNasc));
    }
    return false;
  }

}
