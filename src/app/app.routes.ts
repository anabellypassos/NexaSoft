import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import e from 'express';
import { ServicosComponent } from './servicos/servicos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [

{path:'Home', component: HomeComponent},
{path:'Empresa', component:EmpresaComponent},
{path:'Servicos', component:ServicosComponent},
{path:'Clientes', component: ClientesComponent},
{path:'Blog', component:BlogComponent},
{path:'Contato', component:ContatoComponent},
 { path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: '**', redirectTo: '/Home' }




];
