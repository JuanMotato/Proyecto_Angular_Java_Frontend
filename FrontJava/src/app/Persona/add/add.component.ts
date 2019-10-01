import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import {FormGroup,FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private router:Router, private service:ServiceService,private _builder:FormBuilder) {
    this.signupForm=this._builder.group({
      nom:['',Validators.required],
      apel:['',Validators.required],
      tel:['',Validators.required],
      doc:['',Validators.required],
      direc:['',Validators.required],
     
   })

   }



  ngOnInit() {
  }

  persona:Persona=new Persona();

  Guardar(){
    
    this.service.crearPersona(this.persona)
      .subscribe(data => {
        alert("Se Registro la Persona...!!!");
        this.router.navigate(["listar"]);
      });
    
  }

}
