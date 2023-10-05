import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-dashbord',
  templateUrl: './post-dashbord.component.html',
  styleUrls: ['./post-dashbord.component.scss']
})
export class PostDashbordComponent implements OnInit {
  allPosts : Array<Ipost> =[];
  constructor(private _postService : PostsService) { }

  ngOnInit(): void {
    this._postService.getAllPost()
      .subscribe(res =>{
        console.log(res);
        this.allPosts = res;
      })
  }

  onRemovePost(postId : string){
    let getConfirm = confirm(`Are you sure ? you want to remove this post`);
    if(getConfirm){
      document.getElementById(postId)?.remove()
      this._postService.removePost(postId)
      .subscribe(res => console.log(res)
      )
    }else{
      return
    }
  }
}
