import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';

//Se debe agregar el decorador Injectable, para injectar la dependencia de servicio a servicio
@Injectable()
export class PersonasService
{
    personas: Persona[]= [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];
    saludar= new EventEmitter<number>();
    constructor(private loggingService:LogginService){}
    agregarPersona(persona:Persona)
    {
      this.personas.push(persona);
      this.loggingService.enviarMensajeAConsola("Agregando persona : "+persona.nombre);
    }
}