import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //start variables
  userFavorite;

  //End variables

  constructor(private http: HttpClient) { }
  getTour(){
    return this.http.get("http://localhost:3000/tours");
  }
  getCompanyData(){
    return this.http.get("http://localhost:3000/company");
  }
  getCompanyPackage(id){
    return this.http.get(`http://localhost:3000/company/${id}`);
  }

  getTourGuid(){
    return this.http.get("http://localhost:3000/tourGuid"); 
  }
  getTourGuidPackage(id){
    return this.http.get(`http://localhost:3000/tourGuid/${id}`); 
  }

  postUser(user) {
    return this.http.post("http://localhost:3000/users", user);
  }

  getUser() {
    return this.http.get("http://localhost:3000/users");
  }
// Ayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  // thses methodes to get  user favorite trip and send it in his profile 
  postUserFavoriteTrip(obj) {
    return this.http.post('http://localhost:3000/user-favorite-trip/', obj);
  }


  getUserFavoriteTrip() {
    return this.http.get('http://localhost:3000/user-favorite-trip/');
  }

  cancelUserFavoriteTrip(id) {
    return this.http.delete('http://localhost:3000/user-favorite-trip/' + id)
  }
// get tour guid of trip

  // thses methodes to get the  user  post  to  share it 
  // in guid me page 

  postUserPost(obj) {
    return this.http.post('http://localhost:3000/user-post/', obj);
  }

  getUserPost() {
    return this.http.get('http://localhost:3000/user-post/');
  }

  cancelUserPost(id) {
    return this.http.delete('http://localhost:3000/user-post/' + id)
  }


  // thses methodes  dealing with  tour guide reply   

  postTourGuideReply(obj) {
    return this.http.post('http://localhost:3000/guide-reply/', obj);
  }

  getTourGuideReply() {
    return this.http.get('http://localhost:3000/guide-reply/');
  }

  deleteTourGuideReply(id) {
    return this.http.delete('http://localhost:3000/guide-reply/' + id)
  }




// Ayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa













}