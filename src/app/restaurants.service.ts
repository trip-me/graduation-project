import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http:HttpClient) { }
  // Start get data from api
    getToursData(){
      return this.http.get("http://localhost:3000/restaurants")
    }
  // End get data from api

  //Start send id
  getToursDataId(id){
    return this.http.get("http://localhost:3000/restaurants/"+id)
  }
  //End send id
}
