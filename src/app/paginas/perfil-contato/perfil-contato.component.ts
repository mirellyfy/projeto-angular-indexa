import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../componentes/container/container.component";

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule, 
    ContainerComponent
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

}
