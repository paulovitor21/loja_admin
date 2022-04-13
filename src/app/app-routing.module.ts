import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditorcategoriaComponent } from './componentes/editorcategoria/editorcategoria.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'editorcategoria/:id', component: EditorcategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
