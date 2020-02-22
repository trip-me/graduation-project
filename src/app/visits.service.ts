import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VisitsService {
 
  constructor(private http:HttpClient) { }
  // Start get data from api
    getToursData(){
      return this.http.get("http://localhost:3000/tours")
    }
  // End get data from api

  //Start send id
  getToursDataId(id){
    return this.http.get("http://localhost:3000/tours/"+id)
  }
  //End send id

}
