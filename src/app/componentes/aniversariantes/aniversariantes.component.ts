import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './aniversariantes.component.html',
  styleUrls: ['./aniversariantes.component.css']
})
export class AniversariantesComponent implements OnInit {

  private dataHoje: Date;
  public lista: Cliente[] = [];
  
  constructor(private cliserv: ClienteService) { 
    this.dataHoje = new Date();
    let mes = this.dataHoje.getMonth() + 1;
    this.aniv(mes);
  }

  ngOnInit(): void {
  }

  public aniv(mes: number): void {
    this.cliserv.buscarAniversariantes(mes).subscribe(
      (res: Cliente[]) => {
        this.lista = res;
      }
    );
  }

}
