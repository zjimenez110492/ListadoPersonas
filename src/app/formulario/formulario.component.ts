import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput', { static: false }) nombreInput:ElementRef;
  @ViewChild('apellidoInput', { static: false }) apellidoInput:ElementRef;
  
  constructor() { }

  onAgregarPersona()
  {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //Se notifica por medio de un evento, que hay una persona y se emite esa persona 
    this.personaCreada.emit(persona1);
  }

}
