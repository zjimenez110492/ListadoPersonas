import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../PersonasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //Se debe agregar un proveedor del servicio, que es la misma clase del servcio
})
export class FormularioComponent  {
  
  @ViewChild('nombreInput', { static: false }) nombreInput:ElementRef;
  @ViewChild('apellidoInput', { static: false }) apellidoInput:ElementRef;
  
  constructor(private logginService:LogginService, private personasService:PersonasService) { }

  onAgregarPersona()
  {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //Se notifica por medio de un evento, que hay una persona y se emite esa persona 
    //this.logginService.enviarMensajeAConsola("Enviamos persona:    "+persona1.nombre);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
