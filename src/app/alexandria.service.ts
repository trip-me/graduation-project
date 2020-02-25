import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlexandriaService {
  alex_tours;
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/tours').subscribe(data => {
      this.alex_tours = data;
  })}
  }
  

//   myapi = fetch(
//     " http://localhost:3000/tours",
//     {
//         method: "get",
//         headers: {
//             "Content-Type": "application/json"
//         },
//     }
// )
//     .then(function(response) {response.json()})
//     .then(function(result)  {
//         console.log( result);
//         this.alex_tours = result
//     })
//     .catch(function(rej) {
//         console.log("failed");
//         console.log(rej);
//     });
  
