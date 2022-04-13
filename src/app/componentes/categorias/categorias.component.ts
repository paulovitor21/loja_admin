import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public lista: Categoria[] = [];
  constructor(private service: CategoriaService,
              private route: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("PVLP")) {
      this.route.navigate(['/']);
    }

    this.service.getAllCategorias().subscribe(
      (res: Categoria[]) => {
        this.lista = res;
      },
      (err) => {
        if (err.status == 403) {
          this.route.navigate['/'];
        }
      }
    );
  }

}
