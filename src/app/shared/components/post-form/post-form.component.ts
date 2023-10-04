import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../models/post';
import { PostsService } from '../../service/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm !: FormGroup;
  userIdArray : Array<number> = [1,2,3,4,5,6,7,8,9,10]
  constructor(private _postService : PostsService,
              private _router : Router) { }

  ngOnInit(): void {
    this.createPostForm()
  }
  
  createPostForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      content : new FormControl(null, [Validators.required]),
      userId : new FormControl(null, [Validators.required]),
    })
  }
  onPostCreate(){
    if(this.postForm.valid){
      let obj : Ipost = this.postForm.value;
      // console.log(obj);
      this._postService.createPost(obj)
      .subscribe(res =>{
        // console.log(res);
        this._router.navigate(['/'])
      })
    }
  }
}
