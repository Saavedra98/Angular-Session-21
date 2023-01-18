import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    FormularioComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
  ],exports: [
    HomeComponent,
    LoginComponent,
    FormularioComponent,
    PostComponent
  ],
})
export class PagesModule { }
