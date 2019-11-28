import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './PersonasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.personas=this.personasService.personas;
  }
  titulo = 'listado de Personas';
  personas:Persona[];
  constructor(private personasService: PersonasService)
  {
    
  }
  
  onPersonaAgregada(persona:Persona)
  {
    this.personasService.agregarPersona(persona);
  }



}
