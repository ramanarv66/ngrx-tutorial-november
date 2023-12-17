import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../../state/app.state';
import { getPostByIdSelector, getPostsSelector } from '../posts-list/state/posts.selector';
import { Post } from '../posts-list/state/posts.state';
import { updatePostAction } from '../posts-list/state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrl: './edit-posts.component.css'
})
export class EditPostsComponent implements OnInit {

   id : string = '';
   eachPost: any;
   onePost: Post = new Post();
  postForm: FormGroup = new FormGroup({
    title: new FormControl(this.onePost.title, [
      Validators.required,
      Validators.minLength(6),
    ]),
    description: new FormControl(this.onePost.description, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onUpdatePost() {
    let updatePost: Post = new Post();
    updatePost.id = this.onePost.id;
    updatePost.title = this.postForm.controls['title'].value;
    updatePost.description = this.postForm.controls['description'].value;
    this.store.dispatch(updatePostAction({post: updatePost}))
     this.router.navigate(['posts'])

  }

  constructor(private activatedRoute: ActivatedRoute, private store: Store<Appstate>, private router: Router){
    
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id =''+ data.get('id');
      console.log(this.id)
     // this.store.select(getPostsSelector).subscribe(data=>{
 
     //   let postList:Post[] = data;
     //   this.eachPost =  postList.filter(a=>a.id === this.id)
     //   console.log(this.eachPost[0])
     // })
 
     this.store.select(getPostByIdSelector,{id:this.id}).subscribe(data=>{
       this.onePost = data[0];
       console.log(this.onePost)
       this.createForm();
     })
     })
    
  }
  createForm() {
    this.postForm =  new FormGroup({
      title: new FormControl(this.onePost.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.onePost.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

}