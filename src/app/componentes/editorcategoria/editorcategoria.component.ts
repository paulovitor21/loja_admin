import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-editorcategoria',
  templateUrl: './editorcategoria.component.html',
  styleUrls: ['./editorcategoria.component.css']
})
export class EditorcategoriaComponent implements OnInit {

  public categoria: Categoria;
  public mode: number; // modo 0 = POST modo 1 = PUT
  
  constructor(private activadeRoute: ActivatedRoute,
              private service: CategoriaService,
              private route: Router) { 
    this.categoria = new Categoria();
    let id = this.activadeRoute.snapshot.params['id'];
    if (id === "new") {
      this.mode = 0;
    }
    else {
      this.mode = 1;
      this.service.getById(id).subscribe(
        (res: Categoria) => {
          this.categoria = res;
        }, 
        (err) => {
          console.log("status do erro" + err.status);
          if (err.status == 404) {

          }
          else {
            // reforçar a segurança
            localStorage.removeItem("PVLP");
            this.route.navigate(['/']);
          }
        }
      );
    }
  }

  ngOnInit(): void {
  }

  public atualizarCategoria(){
    if (this.mode == 0){
      return this.service.incluirNovaCategoria(this.categoria).subscribe(
        (res: Categoria) => { 
          alert("Categoria cadastrada com sucesso"); 
          this.route.navigate(['/categorias']);
        },
        (err) => {
           if (err.status == 400){
             alert("Valores inválidos para a categoria");
           }
           else{
             localStorage.removeItem("PVLP");
             this.route.navigate(['/']);
           }
        }
      );
    }
    else{
      return this.service.atualizarCategoria(this.categoria).subscribe(
        (res: Categoria) => { 
          alert("Categoria atualizada com sucesso"); 
          this.route.navigate(['/categorias']);
        },
        (err) => {
           if (err.status == 400){
             alert("Valores inválidos para a categoria");
           }
           else{
             localStorage.removeItem("PVLP");
             this.route.navigate(['/']);
           }
        }
      );

    }
  }

}
