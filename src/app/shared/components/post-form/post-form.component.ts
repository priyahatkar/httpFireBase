import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../models/post';
import { PostsService } from '../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm !: FormGroup;
  public editPostId !: string;
  public isInEditMode : boolean = false;
  userIdArray : Array<number> = [1,2,3,4,5,6,7,8,9,10]
  constructor(private _postService : PostsService,
              private _router : Router,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.createPostForm()
    this.editPostId = this._route.snapshot.params['postId'];
    // console.log(this.editPostId);
    if(this.editPostId){
      this.isInEditMode = true;
      this._postService.getSinglePost(this.editPostId)
        .subscribe(res =>{
          console.log(res);
          this.postForm.patchValue(res)
        })
    }else{
      this.isInEditMode = false;
    }
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
      this._postService.createPost(obj)
      .subscribe(res =>{
        this._router.navigate(['/'])
      })
    }
  }
  onPostUpdate(){
    let post : Ipost = {
      ...this.postForm.value,
      id : this.editPostId
    }
    console.log(post);
    this._postService.updatePost(post)
      .subscribe(res => {
        this.postForm.reset();
        this._router.navigate(['/'])
        console.log(post);
        
      })
  }
}
