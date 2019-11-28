import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../PersonasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {
@Input() persona: Persona;
@Input() indice: number;
  constructor(private personasService: PersonasService) 
  {
    
  }
emitirSaludo()
{
    this.personasService.saludar.emit(this.indice); 
}
}
