import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './PersonasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  titulo = 'LISTADO DE PERSONAS';
  personas:Persona[];
  
  ngOnInit(): void {
    this.personas=this.personasService.personas;
  }
  
  constructor(private personasService: PersonasService)
  {
    
  }
  
  



}
