import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { EditorcategoriaComponent } from './componentes/editorcategoria/editorcategoria.component';
import { EditorprodutosComponent } from './componentes/editorprodutos/editorprodutos.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { RelatoriosComponent } from './componentes/relatorios/relatorios.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EditorusuarioComponent } from './componentes/editorusuario/editorusuario.component';
import { GraficovendasComponent } from './componentes/graficovendas/graficovendas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    CategoriasComponent,
    EditorcategoriaComponent,
    EditorprodutosComponent,
    ProdutosComponent,
    PedidosComponent,
    ClientesComponent,
    RelatoriosComponent,
    UsuariosComponent,
    EditorusuarioComponent,
    GraficovendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
