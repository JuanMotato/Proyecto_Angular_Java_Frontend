import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from "../../Service/service.service";
import { Persona } from 'src/app/Modelo/Persona';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas=data as Persona[];
      });
    
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Eliminar(persona:Persona)
  {
    this.service.eliminarPersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Persona eliminada...!!!");
    })
  }

}
