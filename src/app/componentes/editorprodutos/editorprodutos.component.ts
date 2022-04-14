import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { PathDTO } from 'src/app/model/PathDTO';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/servicos/categoria.service';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-editorprodutos',
  templateUrl: './editorprodutos.component.html',
  styleUrls: ['./editorprodutos.component.css']
})
export class EditorprodutosComponent implements OnInit {

  public mode: number = 1;
  public listaCategorias: Categoria[] = [];
  public produto: Produto;
  public arquivo: File;


  constructor(private activatedRoute: ActivatedRoute,
              private categService: CategoriaService,
              private produtoService: ProdutoService) {
    this.produto = new Produto();
    let id = this.activatedRoute.snapshot.params["id"];
    if (id === "new") {
      this.mode = 0;
    }

    // busca todas as categorias
    this.categService.getAllCategorias().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res;
      },
      (err) => {

      }
    );
  }

  ngOnInit(): void {
  }

  public uploadFoto() {
    const formData = new FormData();

    formData.append("arquivo", this.arquivo, this.arquivo.name);
    console.log(formData.get("arquivo"));
    
    this.produtoService.uploadFoto(formData).subscribe(
      (res: PathDTO) => {
          this.produto.linkFoto = "images/"+res.pathToFile;
      }
    );
  }

  public selectFile(event: any) {
    if (!this.arquivo)
      this.arquivo = event.target.files[0];
    //this.uploadFoto();
  }

}
