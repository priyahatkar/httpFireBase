import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postBaseUrl : string = `${environment.baseUrl}/posts.json`;
  constructor(private _http : HttpClient) { }


  createPost(post : Ipost): Observable<Ipost>{
    return this._http.post<any>(this.postBaseUrl, post)
  }

  getAllPost(): Observable<Array<Ipost>>{
    return this._http.get<any>(this.postBaseUrl)
    .pipe(
      map((res) =>{
        let postArray : Array<Ipost> = [];
        for(const key in res){
          let post : Ipost ={
            title : res[key].title,
            content : res[key].content,
            userId : res[key].userId,
            id : key
          }
          postArray.unshift(post)
        }
        return postArray
      })
    )
  }

  getSinglePost(postId : string): Observable<Ipost>{
    let singlePostUrl = `${environment.baseUrl}/posts/${postId}.json`;
    return this._http.get<Ipost>(singlePostUrl)
  }

  updatePost(post : Ipost): Observable<Ipost>{
    let singlePostUrl = `${environment.baseUrl}/posts/${post.id}.json`;
    return this._http.patch<Ipost>(singlePostUrl, post)
    // console.log(singlePostUrl);
    
  }

  removePost(postId : string): Observable<any>{
    let singlePostUrl = `${environment.baseUrl}/posts/${postId}.json`;
    return this._http.delete(singlePostUrl)
  }
}
