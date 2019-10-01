import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from "../../Service/service.service";
import { Persona } from 'src/app/Modelo/Persona';
import {FormGroup,FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  signupForm:FormGroup;
  constructor(private service:ServiceService, private router:Router,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      nom:['',Validators.required],
      apel:['',Validators.required],
      tel:['',Validators.required],
      doc:['',Validators.required],
      direc:['',Validators.required],
     
   })
   }

  ngOnInit() {
    this.Editar();
  }
  persona:Persona=new Persona;

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(){
    this.service.actualizarPersona(this.persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
