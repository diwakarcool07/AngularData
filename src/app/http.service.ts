import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }


  //getmethod

  getPosts(){
    return this.http.get<any>(this.baseUrl);
  }

  //postmethod for creating new data
createPosts(post){
  return this.http.post<any>(this.baseUrl,post);
}

//putmethod for modify purpose

updatePosts(post){
  return this.http.put<any>(this.baseUrl,post);

}
//deletemethod

removePosts(post){
  return this.http.delete<any>(this.baseUrl,post);
}



}
