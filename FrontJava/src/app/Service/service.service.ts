import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url="http://localhost:8080/cRest/Rest/PruebaMota/listaPersonas";
  url2="http://localhost:8080/cRest/Rest/PruebaMota/registrar";
  url3="http://localhost:8080/cRest/Rest/PruebaMota/consultarPersona";
  url4="http://localhost:8080/cRest/Rest/PruebaMota/actualizarPersona";
  url5="http://localhost:8080/cRest/Rest/PruebaMota/eliminarPersona";


  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
    constructor(private http:HttpClient) {
      console.log("esta funcionando");
    }

    crearPersona(persona:Persona){

      return this.http.post<Persona>(this.url2,persona);
    }

    getPersonas(){
      return this.http.get<Persona[]>(this.url);
    }

    getPersonaId(id:number){
      return this.http.get<Persona>(this.url3+"/"+id);
    }

    actualizarPersona(persona:Persona){
      return this.http.put<Persona>(this.url4,persona);

    }

    eliminarPersona(persona:Persona){
      return this.http.delete<Persona>(this.url5+"/"+persona.id);
    }



}
